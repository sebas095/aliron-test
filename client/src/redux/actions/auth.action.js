import { SIGNIN, SIGNUP, LOGOUT } from "../types";
import { login, register } from "../../services";

import { history } from "../../helpers";

export const signin = ({ username, password }) => {
  return async (dispatch) => {
    const user = await login(username, password);
    dispatch({ type: SIGNIN, user });
    if (user.token) history.replace("/");
  };
};

export const signup = (body) => {
  return async (dispatch) => {
    const user = await register(body);
    dispatch({ type: SIGNUP, user });
    history.replace("/auth/sigin");
  };
};

export const signOut = () => {
  return {
    type: LOGOUT,
  };
};
