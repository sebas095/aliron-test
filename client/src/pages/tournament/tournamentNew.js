import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { playersList } from "../../redux/actions/player.action";
import { tournamentCreate } from "../../redux/actions/tournament.action";

import TournamentForm from "../../components/forms/TournamentForm";

const TournamentNew = () => {
  const dispatch = useDispatch();
  const playersOptions = useSelector((store) => store.player.players);

  const [name, setName] = useState();
  const [players, setPlayers] = useState([]);
  const [playersNumber, setPlayersNumber] = useState();

  const handleSelect = (options) => {
    const playersSelected = options.map((player) => player.value);
    setPlayers(playersSelected);
  };

  const handleName = (ev) => {
    setName(ev.target.value);
  };

  const handlePlayersNumber = (ev) => {
    setPlayersNumber(Number(ev.target.value));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(tournamentCreate({ name, playersNumber, players }));
  };

  useEffect(() => {
    dispatch(playersList());
  }, [dispatch]);

  return (
    <TournamentForm
      playerOptions={playersOptions}
      handleSelect={handleSelect}
      handleName={handleName}
      handlePlayersNumber={handlePlayersNumber}
      handleSubmit={handleSubmit}
    />
  );
};

export default TournamentNew;
