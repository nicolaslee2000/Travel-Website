
import { after } from "lodash";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN, BASE_URL } from "./constants";

  const signUpRequest = (options) => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization :', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options).then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          //   console.log(!response.ok);
          alert('해당 아이디는 이미 사용중입니다. 다른 ID를 입력해주세요');
          return Promise.reject(json);
        } else if (response.ok) {
          Navigate('/registed');
        }
        return json;
      })
    );
  }; 

  /**
  *  상단은 회원가입 전용 분기를 만들어놓은 리퀘스트
  *  하단은 일반적인 JWT 리퀘스트
   */

  export function jwtRequest (options) {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    } 
    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};
  

  export function signup(inputs) {
    return signUpRequest({
      url: BASE_URL + '/auth/signup',
      method: 'POST',
      body: JSON.stringify(inputs),
    });
  } 

  export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return jwtRequest({
        url: BASE_URL + "/user/me",
        method: 'GET'
    });
}

    export function login(loginRequest) {

    return jwtRequest({
        url: BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function setUserInfoToLocalstorage() {
  getCurrentUser().then(response =>{
    localStorage.setItem('email', response.email)
    localStorage.setItem('name', response.name)
    localStorage.setItem('profileImg', response.imageUrl)
    localStorage.setItem('createDate', response.createDate)
    localStorage.setItem('UUID',response.id)
  })
  if(localStorage.getItem('email'))
  return localStorage.getItem('email') 
}

export function goToHome () {
  return document.location.href="/";
}

//Hooks only useing in React Components, remember 