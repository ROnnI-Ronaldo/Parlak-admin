import { userTypes } from "./user.types";
import axios from "../../../config";
import { authSuccess } from "../auth/auth.actions";

const userRequestStart = () => ({
  type: userTypes.USER_REQUEST_START,
});

const userRequestSuccess = (user) => ({
  type: userTypes.USER_REQUEST_SUCCESS,
  payload: user,
});

const userRequestFailed = (errorMsg) => ({
  type: userTypes.USER_REQUEST_FAILED,
  payload: errorMsg,
});

export const userSignUp = (user) => {
  return (dispatch) => {
    dispatch(userRequestStart());
    user.role = "admin";
    axios
      .post("/admin/signup", {
        ...user,
      })
      .then((res) => {
        console.log(res.data);
        userRequestSuccess(res.data.user);
      })
      .catch((err) => {
        userRequestFailed(err.errorMsg);
      });
  };
};
