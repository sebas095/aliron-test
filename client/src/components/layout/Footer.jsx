import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  grid-area: footer;
  background-color: white;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

const Footer = () => (
  <Container>
    <div>
      <span>©{new Date().getFullYear()}&nbsp;</span>
      Hecho con 🤘
    </div>
  </Container>
);

export default Footer;
