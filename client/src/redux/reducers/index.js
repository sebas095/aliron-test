import { combineReducers } from "redux";

import authReducer from "./auth.reducer";
import playerReducer from "./player.reducer";
import tournamentReducer from "./tournament.reducer";

export default combineReducers({
  auth: authReducer,
  player: playerReducer,
  tournament: tournamentReducer,
});
