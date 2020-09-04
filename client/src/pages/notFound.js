import React from "react";
import styled from "styled-components";

import notFoundImg from "../img/404.png";

const Container = styled.div`
  width: 100%;
  display: flexbox;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  min-height: 100%;
`;

const NotFound = () => (
  <Container>
    <Img src={notFoundImg} alt="404 - Not Found" />
  </Container>
);

export default NotFound;
