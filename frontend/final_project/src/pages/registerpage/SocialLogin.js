// import React, { useEffect } from 'react';
// import { useCookies } from 'react-cookie';
// import { getCurrentUser } from '../../ApiConnect/ApiEndPoints';
// import { ACCESS_TOKEN } from '../../ApiConnect/constants';

// const SocialLogin = () => {
//   const [cookies, setCookie, removeCookie] = useCookies(['this_is_login']);
//   // console.log('CurrentUser', getCurrentUser());
//   // console.log('ACCESS_TOKEN', localStorage.getItem(ACCESS_TOKEN));

//   const getUrlParameter(name) {
//     name = name.replace(/[[]/, '\[').replace(/[]]/, '\]');
//     var regex = new RegExp('[\?&]' + name + '=([^&#]*)');

//     var results = regex.exec(this.props.location.search);
//     return results === null ? '' : decodeURIComponent(results[1].replace(/+/g, ' '));
//   };

//   const token = this.getUrlParameter('token');
//   console.log('token', token);
//   // useEffect(() => {
//   //   setCookie('this_is_login', email);
//   // }, []);

//   return <div>로그인 되었습니다.</div>;
// };

// export default SocialLogin;
