import { userTypes } from "./user.types";

const INITIAL_STATE = {
  loading: true,
  user: null,
  errorMsg: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.USER_REQUEST_START:
      return {
        ...INITIAL_STATE,
      };
    case userTypes.USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        errorMsg: "",
      };
    case userTypes.USER_REQUEST_FAILED:
      return {
        ...state,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
