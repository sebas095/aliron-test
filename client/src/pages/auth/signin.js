import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SigninForm from "../../components/forms/SigninForm";

import { signin } from "../../redux/actions/auth.action";

const Signin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleUsername = (ev) => {
    setUsername(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(signin({ username, password }));
  };

  return (
    <SigninForm
      handleUsername={handleUsername}
      handlePassword={handlePassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default Signin;
