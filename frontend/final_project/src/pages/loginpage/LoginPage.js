import React from 'react';
import LoginForm from '../../components/loginpagecomponent/LoginForm';
import Layout from '../../components/othercomponent/Layout';

const LoginPage = (props) => {
  return (
    <>
      <div>
        <LoginForm setIsLogin={props.setIsLogin} />
      </div>
      <br />
      <br />
    </>
  );
};

export default LoginPage;
