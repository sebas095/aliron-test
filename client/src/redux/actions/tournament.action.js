import {
  TOURNAMENT_LIST,
  TOURNAMENT_WINNER_LIST,
  TOURNAMENT_CREATE,
  TOURNAMENT_STAGE,
} from "../types";

import {
  getTournaments,
  getTournamentsWinners,
  createTournament,
  getStage,
} from "../../services";

import { history } from "../../helpers";

export const tournamentList = () => {
  return async (dispatch) => {
    const tournaments = await getTournaments();
    dispatch({ type: TOURNAMENT_LIST, tournaments });
    history.push("/tournament");
  };
};

export const tournamentWinnerList = () => {
  return async (dispatch) => {
    const tournaments = await getTournamentsWinners();
    dispatch({ type: TOURNAMENT_WINNER_LIST, tournaments });
    history.push("/tournament/winner");
  };
};

export const tournamentCreate = (body) => {
  return async (dispatch) => {
    const tournament = await createTournament(body);
    dispatch({ type: TOURNAMENT_CREATE, tournament });
    if (tournament._id) history.replace(`/tournament/${tournament._id}/1`);
  };
};

export const tournamentStage = (tournamentId, stageNumber) => {
  return async (dispatch) => {
    const { stage, stageName } = await getStage(tournamentId, stageNumber);
    dispatch({ type: TOURNAMENT_STAGE, stage, stageName });
  };
};
