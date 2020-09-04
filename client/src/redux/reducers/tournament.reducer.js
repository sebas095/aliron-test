import {
  TOURNAMENT_LIST,
  TOURNAMENT_WINNER_LIST,
  TOURNAMENT_STAGE,
} from "../types";

const initialState = { tournaments: [], stage: [], stageName: "" };

const tournamentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOURNAMENT_LIST:
    case TOURNAMENT_WINNER_LIST:
      return {
        ...state,
        tournaments: action.tournaments,
      };

    case TOURNAMENT_STAGE:
      return {
        ...state,
        stage: action.stage,
        stageName: action.stageName,
      };

    default:
      return state;
  }
};

export default tournamentReducer;
