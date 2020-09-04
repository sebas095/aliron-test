import React from "react";
import styled from "styled-components";
import Select from "react-select";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
`;

const Card = styled.div`
  margin: auto;
  text-align: center;
  width: 50%;
  height: 300px;
  background-color: #eee;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 20px;
  color: #000;

  h1 {
    text-transform: uppercase;
    color: #000;
    border-bottom: 5px dotted #000;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 80%;
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;

  input {
    width: 200px;
  }
`;

const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  color: inherit;
`;

const SelectStyled = styled(Select)`
  width: 100%;
`;

const Button = styled.button`
  color: #eee;
  background-color: #172b4d;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  border-radius: 15px;
  padding: 0.8rem;
  width: 40%;
  cursor: pointer;
  outline: none;

  &:active {
    opacity: 0.6;
  }
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
};

const TournamentForm = ({
  playerOptions,
  handleSelect,
  handleName,
  handlePlayersNumber,
  handleSubmit,
}) => {
  const options = playerOptions.map((player) => ({
    value: player._id,
    label: `${player.username} - ${player.firstname} ${player.lastname}`,
  }));

  return (
    <Container>
      <Card>
        <h1>Crear Torneo</h1>
        <Form onSubmit={handleSubmit}>
          <DataContainer>
            <FormField>
              <Label htmlFor="name">Nombre del torneo</Label>
              <Input type="text" id="name" required onChange={handleName} />
            </FormField>
            <FormField>
              <Label htmlFor="playersNumber">Cantidad De Jugadores</Label>
              <Input
                type="number"
                id="playersNumber"
                required
                min="1"
                onChange={handlePlayersNumber}
              />
            </FormField>
          </DataContainer>
          <FormField>
            <Label htmlFor="players">Elegir Jugadores</Label>
            <SelectStyled
              options={options}
              styles={customStyles}
              width="200px"
              isMulti
              onChange={handleSelect}
            />
          </FormField>
          <Button>Crear</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default TournamentForm;
