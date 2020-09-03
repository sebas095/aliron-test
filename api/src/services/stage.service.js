const BaseService = require("./base.service");
let _stageRepository = null;

class StageService extends BaseService {
  // dependency injection
  constructor({ StageRepository }) {
    super(StageRepository);
    _stageRepository = StageRepository;
  }
}

module.exports = StageService;
