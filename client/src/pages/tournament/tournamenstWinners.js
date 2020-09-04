import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { tournamentWinnerList } from "../../redux/actions/tournament.action";

import TournamentList from "../../components/tournament/TournamentList";

const TournamentsWinners = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector((store) => store.tournament.tournaments);

  useEffect(() => {
    dispatch(tournamentWinnerList());
  }, [dispatch]);

  return <TournamentList tournaments={tournaments} />;
};

export default TournamentsWinners;
