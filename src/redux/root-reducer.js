import { combineReducers } from "redux";

import { authReducer } from "./reducers/auth/auth-reducer";
import { userReducer } from "./reducers/user/user.reducer";
import { categoriesReducer } from "./reducers/categories/categories.reducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  categories: categoriesReducer,
});
