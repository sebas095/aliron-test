import React from "react";
import styled from "styled-components";

import TournamentCard from "./TournamentCard";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 90vh;
  margin: 0.5rem;
  overflow-y: auto;
`;

const TournamentList = ({ tournaments }) => (
  <Container>
    {tournaments.map((tournament) => (
      <TournamentCard key={tournament._id} {...tournament} />
    ))}
  </Container>
);

export default TournamentList;
