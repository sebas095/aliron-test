module.exports = {
  NotFoundMiddleware: require("./not-found.middleware.js"),
  ErrorMiddleware: require("./error.middleware.js"),
  AuthMiddleware: require("./auth.middleware"),
  ParseIntMiddleware: require("./parse-int.middleware"),
  VerifyRoleMiddleware: require("./verify-role.middleware"),
};
