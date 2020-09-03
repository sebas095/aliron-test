let _userService = null;

class UserController {
  // dependency injection
  constructor({ UserService }) {
    _userService = UserService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = await _userService.get(userId);
    return res.json(user);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const users = await _userService.getAll(pageSize, pageNum);
    return res.json(users);
  }
}

module.exports = UserController;
