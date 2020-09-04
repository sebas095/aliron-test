import React from "react";
import styled from "styled-components";

import PlayerCard from "./PlayerCard";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 90vh;
  margin: 0.5rem;
  overflow-y: auto;
`;

const PlayerList = ({ players }) => (
  <Container>
    {players.map((player) => (
      <PlayerCard key={player._id} {...player} />
    ))}
  </Container>
);

export default PlayerList;
