import { PLAYERS_LIST } from "../types";

const initialState = { players: [] };

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYERS_LIST:
      return {
        ...state,
        players: action.players,
      };

    default:
      return state;
  }
};

export default playerReducer;
