import "./App.css";
import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import signIn from "./components/SignIn/signIn.component";
import SignUp from "./components/SignUp/signUp.component";
import PrivateRouter from "./components/HOC/PrivateRoute";
import Home from "./pages/Home/Home.pages";
import OrdersPage from "./pages/orders/Orders.pages";
import ProductsPage from "./pages/products/Products";
import CategoryPage from "./pages/categories/categories.page";

import { fetchCategories } from "./redux/reducers/categories/categories.actions";

import { useDispatch, useSelector } from "react-redux";
import { isUserAuthenticated } from "./redux/reducers/auth/auth.actions";

const App = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isUserAuthenticated());
    }

    dispatch(fetchCategories());
  }, []);
  return (
    <>
      <Switch>
        <PrivateRouter
          exact
          path='/'
          component={(props) => <Home sideNav={true} />}
        />
        <PrivateRouter path='/orders' component={OrdersPage} />
        <PrivateRouter path='/categories' component={CategoryPage} />
        <PrivateRouter path='/products' component={ProductsPage} />
        <Route path='/logIn' component={signIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </>
  );
};

export default App;
