const BaseRepository = require("./base.repository");
let _stage = null;

class StageRepository extends BaseRepository {
  constructor({ Stage }) {
    super(Stage);
    _stage = Stage;
  }

  async getBy(filter) {
    return await _stage
      .find(filter)
      .populate("playerOne", "firstname lastname username")
      .populate("playerTwo", "firstname lastname username");
  }

  async update(id, entity) {
    return await _stage
      .findByIdAndUpdate(id, entity, { new: true })
      .populate("playerOne", "firstname lastname username")
      .populate("playerTwo", "firstname lastname username");
  }
}

module.exports = StageRepository;
