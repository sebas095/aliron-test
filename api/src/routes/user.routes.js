const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = ({ UserController }) => {
  const router = Router();

  router.get("/", /*[AuthMiddleware],*/ UserController.getAll);
  router.get("/:userId", [AuthMiddleware], UserController.get);

  return router;
};
