import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import soccerImg from "../../img/soccer.png";

const Container = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
  border-bottom: 5px dotted #eee;
`;

const Img = styled.img`
  width: 40px;
  background-color: white;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
  font-style: italic;
  text-transform: uppercase;
  line-height: 2;
  margin: 0 15px;

  &:hover {
    opacity: 0.7;
  }
`;

const Logo = () => (
  <Container>
    <Img src={soccerImg} alr="Soccer ball" />
    <LinkStyled to="/">Aliron Test</LinkStyled>
    <Img src={soccerImg} alr="Soccer ball" />
  </Container>
);

export default Logo;
