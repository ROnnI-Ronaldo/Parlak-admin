import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { userSignUp } from "../../redux/reducers/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./signUp.styles.scss";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(userSignUp(user));
  };

  if (auth.authenticated) {
    return <Redirect to='/' />;
  }

  return (
    <form noValidate autoComplete='off' className='sign-up' onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <h4>
        If you already have an account please
        <Link className='sign-up__link' to='/login'>
          {" "}
          Log In
        </Link>
      </h4>
      <div className='input-box__row'>
        <TextField
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          className='input firstName'
          id='standard-basic'
          label='First Name'
        />
        <TextField
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          className='input lastName'
          id='filled-basic'
          label='Last Name'
        />
      </div>
      <div className='input-box__column'>
        <TextField
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className='input email'
          id='outlined-basic'
          label='Email'
        />
        <TextField
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className='input password'
          id='outlined-basic'
          label='Password'
          type='password'
        />
      </div>
      <Button
        className='button-primary'
        variant='contained'
        color='primary'
        type='submit'
      >
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
