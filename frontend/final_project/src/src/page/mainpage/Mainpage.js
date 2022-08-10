import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import './mainpage.css';
//import Log_JoinPage from '../registerpage/RegisterPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const main = () => {
  return (
    <>
      <Container maxWidth='sm'>
        <div className='wrap'>
          <div className='container'>
            <main>
              <h1>메인페이지입니다.</h1>
            </main>
          </div>
        </div>
      </Container>
    </>
  );
};

export default main;
