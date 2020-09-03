const { StatusHelper, StageNameHelper } = require("../helpers");

let _tournamentService = null;

class TournamentController {
  // dependency injection
  constructor({ TournamentService }) {
    _tournamentService = TournamentService;
  }

  async create(req, res) {
    const { body } = req;
    const createTournament = await _tournamentService.create(body);
    return res.status(201).json(createTournament);
  }

  async getAll(req, res) {
    const tournaments = await _tournamentService.getAll();
    return res.json(tournaments);
  }

  async get(req, res) {
    const { tournamentId } = req.params;
    const tournament = await _tournamentService.get(tournamentId);

    if (tournament.status === StatusHelper.FINISHED) {
      return res.json(tournament);
    }
    return res.json({
      message: "The tournament is not finished yet!",
      ...tournament.toJSON(),
    });
  }

  async getWinners(req, res) {
    const tournaments = await _tournamentService.getWinners();
    return res.json(tournaments);
  }

  async getStage(req, res) {
    const { tournamentId, stageNumber } = req.params;
    const stage = await _tournamentService.getStage(tournamentId, stageNumber);
    return res.json({
      stageName: StageNameHelper.getName(stage.length),
      stage,
    });
  }

  async addStage(req, res) {
    const { tournamentId, stageNumber } = req.params;
    const stage = await _tournamentService.addStage(
      tournamentId,
      Number(stageNumber)
    );
    return res.json(stage);
  }

  async updateStage(req, res) {
    const { tournamentId, stageId } = req.params;
    const { body } = req;

    const stageUpdated = await _tournamentService.updateStage(
      tournamentId,
      stageId,
      body
    );

    return res.json(stageUpdated);
  }
}

module.exports = TournamentController;
