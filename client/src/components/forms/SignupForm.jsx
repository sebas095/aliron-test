import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Footer from "../layout/Footer";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  footer {
    margin-top: auto;
    margin-bottom: 5px;
  }
`;

const Card = styled.div`
  margin: auto;
  text-align: center;
  width: 40%;
  height: 410px;
  background-color: #1a174d;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 20px;
  color: #eee;

  h1 {
    text-transform: uppercase;
    color: #eee;
    border-bottom: 5px dotted #eee;
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
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  width: 100%;
  text-align: left;
  margin-left: 5rem;
`;

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
  color: inherit;
  width: 85%;
  text-align: left;
`;

const NamesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  input {
    width: 200px;
  }
`;

const Button = styled.button`
  color: inherit;
  background-color: #172b4d;
  margin-top: 0.8rem;
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

const LinkStyled = styled(Link)`
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 0.8rem;
`;

const SignupForm = ({
  handleFirstname,
  handleLastname,
  handleUsername,
  handleEmail,
  handlePassword,
  handleSubmit,
}) => (
  <Container>
    <Card>
      <h1>Registro</h1>
      <Form onSubmit={handleSubmit}>
        <NamesContainer>
          <FormField>
            <Label htmlFor="firstname">Nombre(s)</Label>
            <Input
              type="text"
              id="firstname"
              required
              onChange={handleFirstname}
            />
          </FormField>
          <FormField>
            <Label htmlFor="lastname">Apellido(s)</Label>
            <Input
              type="text"
              id="lastname"
              required
              onChange={handleLastname}
            />
          </FormField>
        </NamesContainer>
        <FormField>
          <Label htmlFor="username">Usuario</Label>
          <Input type="text" id="username" required onChange={handleUsername} />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required onChange={handleEmail} />
        </FormField>
        <FormField>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            required
            onChange={handlePassword}
          />
        </FormField>
        <Button>Registrar</Button>
        <LinkStyled to="/auth/signin">¿Ya tienes cuenta?</LinkStyled>
      </Form>
    </Card>
    <Footer />
  </Container>
);

export default SignupForm;
