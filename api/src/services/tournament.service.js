const BaseService = require("./base.service");
const { MatchmakingHelper, StatusHelper } = require("../helpers");

let _tournamentRepository = null;
let _stageRepository = null;

class TournamentService extends BaseService {
  // dependency injection
  constructor({ TournamentRepository, StageRepository }) {
    super(TournamentRepository);
    _tournamentRepository = TournamentRepository;
    _stageRepository = StageRepository;
  }

  async create(entity) {
    const tournament = await super.create(entity);
    const matchmakings = MatchmakingHelper.getRandomMatch(
      tournament.playersNumber
    );

    for (const match of matchmakings) {
      const stage = await _stageRepository.create({
        playerOne: tournament.players[match[0]],
        playerTwo: tournament.players[match[1]],
        tournamentId: tournament._id,
      });

      tournament.stages.push(stage);
    }

    return await tournament.save();
  }

  async get(tournamentId) {
    return await _tournamentRepository.get(tournamentId);
  }

  async getWinners() {
    return await _tournamentRepository.getWinners();
  }

  async getStage(tournamentId, stageNumber) {
    const stageExist = await _stageRepository.getBy({
      tournamentId,
      round: stageNumber,
    });

    if (!stageExist || stageExist.length === 0) {
      const error = new Error();
      error.status = 404;
      error.message = "Stage does not exist";
      throw error;
    }

    return stageExist;
  }

  async addStage(tournamentId, stageNumber) {
    const tournamentExist = await _tournamentRepository.get(tournamentId);

    const prevStage = await _stageRepository.getBy({
      tournamentId,
      round: stageNumber - 1,
    });

    const stageExist = await _stageRepository.getBy({
      tournamentId,
      round: stageNumber,
    });

    if (
      !tournamentExist ||
      stageNumber <= 1 ||
      prevStage.length <= 1 ||
      stageExist.length > 0
    ) {
      const error = new Error();
      error.status = 400;
      error.message = "Stage invalid";
      throw error;
    }

    const pendingMatch = prevStage.some((stage) => stage.score.length === 0);
    if (pendingMatch) {
      const error = new Error();
      error.message = "There are still match pending!";
      throw error;
    }

    // get winning players from the previous stage
    const players = prevStage.map((stage) => {
      const scorePlayerOne = stage.score[0];
      const scorePlayerTwo = stage.score[1];

      if (scorePlayerOne > scorePlayerTwo) {
        return stage.playerOne._id;
      }

      return stage.playerTwo._id;
    });

    // Generate next matchmaking
    const matchmakings = MatchmakingHelper.getRandomMatch(players.length);

    for (const match of matchmakings) {
      const stage = await _stageRepository.create({
        playerOne: players[match[0]],
        playerTwo: players[match[1]],
        round: stageNumber,
        tournamentId,
      });

      tournamentExist.stages.push(stage);
    }

    await tournamentExist.save();
    return await _stageRepository.getBy({
      tournamentId,
      round: stageNumber,
    });
  }

  async updateStage(tournamentId, stageId, entity) {
    const tournamentExist = await _tournamentRepository.get(tournamentId);
    const stageExist = await _stageRepository.get(stageId);

    if (!stageExist || !tournamentExist) {
      const error = new Error();
      error.status = 404;
      error.message = "Resource not found";
      throw error;
    }

    const nextStage = await _stageRepository.getBy({
      tournamentId,
      round: stageExist.round + 1,
    });

    if (
      nextStage.length > 0 ||
      tournamentExist.status === StatusHelper.FINISHED
    ) {
      const error = new Error();
      error.status = 405;
      error.message = "Action not allowed";
      throw error;
    }

    const stageUpdated = await _stageRepository.update(stageId, entity);

    // Last match (stage final)
    if (tournamentExist.stagesNumber === stageExist.round) {
      const { score, playerOne, playerTwo } = stageUpdated;
      let winner;

      if (score[0] > score[1]) {
        winner = playerOne._id;
      } else {
        winner = playerTwo._id;
      }

      await _tournamentRepository.update(tournamentId, {
        status: StatusHelper.FINISHED,
        winner,
      });
    }

    return stageUpdated;
  }
}

module.exports = TournamentService;
