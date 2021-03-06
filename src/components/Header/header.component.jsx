import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '../Button/Button.component'

import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/reducers/auth/auth.actions";

import { NavLink } from "react-router-dom";

import "./header.styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const logoutRequest = () => dispatch(signOut());

  return (
    <div className="header">
      <AppBar position='static'>
        <Toolbar className="tool-bar">
          {auth.authenticated ? (
            <Button
             variant= "outline" 
             onClick={logoutRequest}
             label="SignOut"
            /> 
          ) : (
            <>
              <NavLink className='nav-link' to='/login'>
                LogIn
              </NavLink>
              <NavLink className='nav-link' to='/signup'>
                SignUp
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
