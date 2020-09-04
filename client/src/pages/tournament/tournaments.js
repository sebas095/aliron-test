import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { tournamentList } from "../../redux/actions/tournament.action";

import TournamentList from "../../components/tournament/TournamentList";

const Tournaments = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector((store) => store.tournament.tournaments);

  useEffect(() => {
    dispatch(tournamentList());
  }, [dispatch]);

  return <TournamentList tournaments={tournaments} />;
};

export default Tournaments;
