import React from 'react';
import { getCurrentUser } from '../../ApiConnect/ApiEndPoints';
import { ACCESS_TOKEN } from '../../ApiConnect/constants';

const SocialLogin = () => {
  console.log(getCurrentUser());
  console.log(localStorage.getItem(ACCESS_TOKEN));

  //http://localhost:3000/oauth2/redirect?
  //token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OTAxIiwiaWF0IjoxNjYyMTExOTM5LCJleHAiOjE2NjI5NzU5Mzl9.yg3UI1dIFSeFGpdWt7NMQWPohE65bufi7vZCuzgItGcIporaR3Q5YfPNQRUWxkgXuutAY6ko9Dnb2XvEt6XkUA

  
  return <div></div>;
};

export default SocialLogin;
