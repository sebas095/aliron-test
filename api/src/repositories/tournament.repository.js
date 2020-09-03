const BaseRepository = require("./base.repository");
const { StatusHelper } = require("../helpers");

let _tournament = null;

class TournamentRepository extends BaseRepository {
  constructor({ Tournament }) {
    super(Tournament);
    _tournament = Tournament;
  }

  async getAll() {
    return await _tournament
      .find()
      .populate("players", "firstname lastname username");
  }

  async get(tournamentId) {
    return await _tournament
      .findById(tournamentId)
      .populate("winner", "firstname lastname username");
  }

  async getWinners() {
    return await _tournament
      .find({ status: StatusHelper.FINISHED })
      .populate("winner", "firstname lastname username");
  }
}

module.exports = TournamentRepository;
