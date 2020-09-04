import React from "react";
import styled from "styled-components";

import playerImg from "../../img/player.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 290px;
  width: 220px;
  margin: 0.5rem 1rem;
`;

const Card = styled.div`
  text-align: center;
  height: 100%;
  background-color: #eee;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 20px;
  color: #000;

  h1 {
    text-transform: uppercase;
    color: #000;
    border-bottom: 5px dotted #000;
    margin: 0.8rem 0;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const ImgContainer = styled.div`
  width: 100%;
  border-bottom: 5px dotted #000;
  margin-bottom: 0.5rem;
`;

const Img = styled.img`
  width: 40%;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  line-height: 1.8;
  font-size: 0.9rem;
  padding: 0 0.5rem;
`;

const Label = styled.div`
  width: 100%;
  font-weight: bold;
  text-transform: uppercase;
`;

const Field = styled.div`
  width: 100%;
`;

const PlayerCard = ({ firstname, lastname, username, email }) => (
  <Container>
    <Card>
      <h1>Jugador</h1>
      <ImgContainer>
        <Img src={playerImg} alt="player" />
      </ImgContainer>
      <List>
        <Item>
          <Label>Nombre(s)</Label>
          <Field>{firstname}</Field>
        </Item>
        <Item>
          <Label>Apellido(s)</Label>
          <Field>{lastname}</Field>
        </Item>
        <Item>
          <Label>Username</Label>
          <Field>{username}</Field>
        </Item>
        <Item>
          <Label>Email</Label>
          <Field>{email}</Field>
        </Item>
      </List>
    </Card>
  </Container>
);

export default PlayerCard;
