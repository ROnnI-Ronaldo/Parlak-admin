import axios from "../../../config";
import authTypes from "./auth.types";

export const authSuccess = (user) => ({
  type: authTypes.AUTH_SUCCESS,
  payload: user,
});

const authStarts = () => ({
  type: authTypes.AUTH_START,
});

const authFailed = (errMsg) => ({
  type: authTypes.AUTH_FAILED,
  payload: errMsg,
});

const logoutRequest = () => ({
  type: authTypes.LOGOUT_REQUEST,
});

const logoutSuccess = () => ({ type: authTypes.LOGOUT_SUCCESS });

export const authenticate = ({ email, password }) => {
  return (dispatch) => {
    dispatch(authStarts());
    axios
      .post("/admin/signin", {
        email,
        password,
      })
      .then((res) => {
        dispatch(authSuccess(res.data));
      })
      .catch((err) => {
        dispatch(authFailed(err.errMsg));
      });
  };
};

export const isUserAuthenticated = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(authStarts());
    if (token && user) {
      return dispatch(authSuccess({ token, user }));
    }

    return dispatch(authFailed("Failed to login"));
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch(logoutSuccess());
    const res = axios
      .post("/admin/signout")
      .then((res) => {
        dispatch(logoutRequest());
      })
      .catch((err) => {
        dispatch({ type: authTypes.LOGOUT_FAILED, payload: err.msg });
      });
  };
};
