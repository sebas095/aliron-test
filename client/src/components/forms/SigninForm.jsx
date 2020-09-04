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
  width: 25%;
  height: 300px;
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
  align-items: flex-start;
  margin-bottom: 1rem;
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
  border-bottom: 1px solid #eee;
  outline: none;
  color: inherit;
`;

const Button = styled.button`
  color: inherit;
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

const LinkStyled = styled(Link)`
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8rem;
  font-style: italic;
`;

const SigninForm = ({ handleUsername, handlePassword, handleSubmit }) => (
  <Container>
    <Card>
      <h1>Iniciar Sesión</h1>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="username">Usuario</Label>
          <Input type="text" id="username" onChange={handleUsername} required />
        </FormField>
        <FormField>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            onChange={handlePassword}
            required
          />
        </FormField>
        <Button>Iniciar Sesión</Button>
        <LinkStyled to="/auth/signup">Regístrate aquí</LinkStyled>
      </Form>
    </Card>
    <Footer />
  </Container>
);

export default SigninForm;
