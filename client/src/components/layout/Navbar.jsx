import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Container = styled.nav`
  grid-area: nav;
  height: 100vh;
  background: linear-gradient(87deg, #172b4d, #1a174d);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const List = styled.ul`
  color: #eee;
  list-style: none;
  padding: 0;
  margin: 20px;
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 2;

  &:hover {
    opacity: 0.7;
  }
`;

const Navbar = () => (
  <Container>
    <Logo />
    <List>
      <li>
        <LinkStyled to="/tournament/new">Crear Torneo</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/tournament">Listar Torneos</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/tournament/winner">Torneos Finalizados</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/player">Listar Jugadores</LinkStyled>
      </li>
      {/* <li>
        <LinkStyled to="/logout">Cerrar Sesión</LinkStyled>
      </li> */}
    </List>
  </Container>
);

export default Navbar;
