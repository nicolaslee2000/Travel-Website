import React from 'react';
import { getCurrentUser } from '../../ApiConnect/ApiEndPoints';
import { ACCESS_TOKEN } from '../../ApiConnect/constants';

const SocialLogin = () => {
  console.log(getCurrentUser());
  console.log(localStorage.getItem(ACCESS_TOKEN));

  return <div></div>;
};

export default SocialLogin;
