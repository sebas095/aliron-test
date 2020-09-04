import { PLAYERS_LIST } from "../types";
import { getPlayers } from "../../services";

export const playersList = () => {
  return async (dispatch) => {
    const players = await getPlayers();
    dispatch({ type: PLAYERS_LIST, players });
  };
};
