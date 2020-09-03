const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    const error = new Error();
    error.status = 400;
    error.message = "Token must be sent";
    throw error;
  }

  jwt.verify(token.slice(7), JWT_SECRET, (err, decodeToken) => {
    if (err) {
      const error = new Error();
      error.status = 401;
      error.message = "Invalid token";
      throw error;
    }

    req.user = decodeToken.user;
    next();
  });
};
