let _stageService = null;

class StageController {
  // dependency injection
  constructor({ StageService }) {
    _stageService = StageService;
  }
}

module.exports = StageController;
