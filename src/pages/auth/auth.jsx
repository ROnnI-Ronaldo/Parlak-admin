import React from "react";

import SignIn from '../../components/signIn/signIn.component';

import "./auth.styles.scss";

const Auth = () => {
  return (
    <div className='container'>
      <div className='auth-signIn'>
        <SignIn />
      </div>
      <div className='auth-signUp'></div>
    </div>
  );
};

export default Auth;
