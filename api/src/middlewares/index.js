module.exports = {
  NotFoundMiddleware: requestAnimationFrame("./not-found.middleware.js"),
  ErrorMiddleware: requestAnimationFrame("./error.middleware.js"),
  AuthMiddleware: require("./auth.middleware"),
  ParseIntMiddleware: require("./parse-int.middleware"),
};
