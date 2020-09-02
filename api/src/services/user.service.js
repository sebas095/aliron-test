const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
  // dependency injection
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getUserByUsername(username) {
    return await _userRepository.getUserByUsername(username);
  }

  async disableUser(id) {
    return await _userRepository.disableUser(id);
  }
}

module.exports = UserService;
