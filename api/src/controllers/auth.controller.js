let _authService = null;

class AuthController {
  // dependency injection
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async signUp(req, res) {
    const { body } = req;
    const createUser = await _authService.signUp(body);
    return res.status(201).json(createUser);
  }

  async signIn(req, res) {
    const { body } = req;
    const creds = await _authService.signIn(body);
    return res.json(creds);
  }
}

module.exports = AuthController;
