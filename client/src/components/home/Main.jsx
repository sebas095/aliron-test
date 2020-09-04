import React from "react";
import styled from "styled-components";

const Container = styled.main`
  grid-area: main;
  padding: 2em 0.5em 0.5em 1em;
  margin: 10px;
  background-color: white;
  text-align: center;
`;

const Main = () => (
  <Container>
    <h1>Bienvenido</h1>
  </Container>
);

export default Main;
