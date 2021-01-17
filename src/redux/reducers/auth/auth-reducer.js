import authTypes from "./auth.types";

const INITIAL_STATE = {
  loading: true,
  token: null,
  user: null,
  authenticated: false,
  errMsg: "",
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        authenticated: false,
      };
    case authTypes.AUTH_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user.user,
        authenticated: true,
      };
    case authTypes.AUTH_FAILED:
      return {
        ...state,
        errMsg: action.payload,
        authenticated: false,
      };
    case authTypes.LOGOUT_REQUEST:
      localStorage.clear();
      return {
        ...INITIAL_STATE,
      };
    case authTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authTypes.LOGOUT_SUCCESS:
      return {
        ...INITIAL_STATE,
      };
    case authTypes.LOGOUT_FAILED:
      return {
        ...state,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};
