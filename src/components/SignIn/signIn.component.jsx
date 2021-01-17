import React, { useState } from 'react';
import { connect } from 'react-redux';

import Layout from '../../containers/Layout/layout';


import { authenticate } from '../../redux/reducers/auth/auth.actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./signIn.styles.scss";
import { Link, Redirect } from 'react-router-dom';

const SignIn = ({ loading, token, user, errMsg, authenticate, authenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(email.length > 0 && password.length > 0)
    authenticate(email, password);
  }

  if(authenticated){
    return <Redirect to="/"/>
  }

  return (
    <Layout >
      <form className="flex-container" noValidate autoComplete="on" onSubmit={onSubmit}>
          <h1>LogIn</h1>
          <h4>If you don't have an account please <Link className="sign-up__link" to="/signup"> Sign up </Link></h4>
          <TextField className="form-control" id="standard-basic" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <TextField type="password" className="form-control" id="standard-basic" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Button className="login-button" variant="contained" color="primary" type="submit">
              Login
          </Button>
      </form>
    </Layout>
  );
};

const mapStateToProps = ({ auth: { loading, token, user, errMsg, authenticated } }) => ({
  loading,
  token,
  user,
  errMsg,
  authenticated
}); 

const mapDispatchToProps = (dispatch) => ({
  authenticate: (email, password) => dispatch(authenticate({email, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);