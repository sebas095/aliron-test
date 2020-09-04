import React from "react";
import styled from "styled-components";

import StageCard from "./StageCard";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  height: 90vh;
  margin: 0.5rem;
  overflow-y: auto;
`;

const StageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const StageList = ({ stage, stageName }) => (
  <Container>
    <h1>{stageName}</h1>
    <StageContainer>
      {stage.map((stageItem) => (
        <StageCard key={stageItem._id} {...stageItem} />
      ))}
    </StageContainer>
  </Container>
);

export default StageList;
