import './registeredPage.css';
import React from 'react';
import { Button } from '@mui/material';
import Layout from '../../components/othercomponent/Layout';

const RegisteredPage = () => {
  return (
    <>
      <div className='registed'>
        <div className='welcome'>
          <img
            src={require('../../assets/image/welcome.jpg')}
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          />
          <h1>환영합니다!</h1>
          <h4> 가입이 완료 되었습니다.</h4>
          <Button variant='contained' href='/'>
            확인
          </Button>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default RegisteredPage;
