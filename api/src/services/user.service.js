const BaseService = require("./base.service");
const { RolesHelper } = require("../helpers");

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

  async getAll(pageSize = 20, pageNum = 1) {
    return await this.repository.getAll(pageSize, pageNum, {
      role: RolesHelper.PLAYER_ROLE,
    });
  }
}

module.exports = UserService;
