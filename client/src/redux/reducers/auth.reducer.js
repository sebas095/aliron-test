import { SIGNIN, SIGNUP, LOGOUT } from "../types";

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.user,
      };

    case SIGNUP:
      return state;

    case LOGOUT:
      return {};

    default:
      return state;
  }
};

export default authReducer;
