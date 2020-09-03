const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const logger = require("morgan");
require("express-async-errors");

const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");

module.exports = ({ UserRoutes, AuthRoutes, TournamentRoutes }) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  // default middlewares
  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(logger("dev"))
    .use(compression());

  apiRoutes.use("/user", UserRoutes);
  apiRoutes.use("/auth", AuthRoutes);
  apiRoutes.use("/tournament", TournamentRoutes);

  router.use("/v1/api", apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};
