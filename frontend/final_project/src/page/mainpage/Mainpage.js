import { Button } from '@mui/material';
import React from 'react';
import './mainpage.css';
//import Log_JoinPage from '../registerpage/RegisterPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const main = () => {
  return (
    <div className='wrap'>
      <div className='container'>
        <Button variant='contained' href='/register'>
          회원가입
        </Button>
        <Button variant='contained' href='/login'>
          로그인
        </Button>
        <main>
          <h1>메인페이지입니다.</h1>
        </main>
      </div>
    </div>
  );
};

export default main;
