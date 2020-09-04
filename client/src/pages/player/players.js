import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { playersList } from "../../redux/actions/player.action";

import { history } from "../../helpers";

import PlayerList from "../../components/player/PlayerList";

const Players = () => {
  const dispatch = useDispatch();
  const players = useSelector((store) => store.player.players);

  useEffect(() => {
    dispatch(playersList());
    history.replace("/player");
  }, [dispatch]);

  return <PlayerList players={players} />;
};

export default Players;
