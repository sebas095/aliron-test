import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { tournamentStage } from "../../redux/actions/tournament.action";

import StageList from "../../components/stage/StageList";

const Stage = () => {
  const dispatch = useDispatch();
  const { tournamentId, stageNumber } = useParams();
  const tournament = useSelector((store) => store.tournament);

  useEffect(() => {
    dispatch(tournamentStage(tournamentId, stageNumber));
  }, [dispatch, tournamentId, stageNumber]);

  return (
    <StageList stage={tournament.stage} stageName={tournament.stageName} />
  );
};

export default Stage;
