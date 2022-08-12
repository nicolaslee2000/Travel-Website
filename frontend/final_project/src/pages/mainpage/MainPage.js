import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Layout from '../../components/othercomponent/Layout';
import MainSearchPrac02 from '../../components/mainpagecomponent/MainSearchPrac02';
import './mainpage.css';
//import Log_JoinPage from '../registerpage/RegisterPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const main = () => {
  return (
    <>
      <div className='wrap'>
        <div className='container'>
          <MainSearchPrac02 />
        </div>
      </div>
    </>
  );
};

export default main;
