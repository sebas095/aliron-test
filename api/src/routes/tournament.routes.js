const { Router } = require("express");
const { AuthMiddleware, VerifyRoleMiddleware } = require("../middlewares");

module.exports = ({ TournamentController }) => {
  const router = Router();

  router.get("/", AuthMiddleware, TournamentController.getAll);
  router.get("/winner", AuthMiddleware, TournamentController.getWinners);
  router.get("/:tournamentId", AuthMiddleware, TournamentController.get);

  router.get(
    "/:tournamentId/:stageNumber",
    AuthMiddleware,
    TournamentController.getStage
  );

  router.post(
    "/",
    [AuthMiddleware, VerifyRoleMiddleware],
    TournamentController.create
  );

  router.post(
    "/:tournamentId/:stageNumber",
    [AuthMiddleware, VerifyRoleMiddleware],
    TournamentController.addStage
  );

  router.put(
    "/:tournamentId/:stageId",
    [AuthMiddleware, VerifyRoleMiddleware],
    TournamentController.updateStage
  );

  return router;
};
