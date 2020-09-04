import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SignupForm from "../../components/forms/SignupForm";

import { signup } from "../../redux/actions/auth.action";

const Signup = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleFirstname = (ev) => {
    setFirstname(ev.target.value);
  };

  const handleLastname = (ev) => {
    setLastname(ev.target.value);
  };

  const handleUsername = (ev) => {
    setUsername(ev.target.value);
  };

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(signup({ firstname, lastname, username, email, password }));
  };

  return (
    <SignupForm
      handleFirstname={handleFirstname}
      handleLastname={handleLastname}
      handleUsername={handleUsername}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default Signup;
