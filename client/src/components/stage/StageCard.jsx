import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  width: 300px;
  margin: 0.5rem 1rem;
`;

const Card = styled.div`
  text-align: center;
  height: 100%;
  background-color: #eee;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 20px;
  color: #000;
  padding: 1rem;
  width: 100%;

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

const StageCard = ({ score, playerOne, playerTwo }) => (
  <Container>
    <Card>
      <List>
        <Item>
          <Label>Jugador 1</Label>
          <Field>{playerOne.username}</Field>
        </Item>
        <Item>
          <Label>vs</Label>
        </Item>
        <Item>
          <Label>Jugador 2</Label>
          <Field>{playerTwo.username}</Field>
        </Item>
      </List>
    </Card>
  </Container>
);

export default StageCard;
