import { Button } from '@mui/material';
import React from 'react';
import './emailconfirmed.css';

const Emailconfirmed = () => {
  return (
    <>
      <div className='emailconfirmed'>
        <div className='okay'>
          <img
            src={require('../../assets/image/ok.png')}
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          />
          <div className='emailconfirmed-text'>
            <h4> 이메일 인증이 완료 되었습니다.</h4>
            <h5> 회원가입을 진행하시던 페이지로 이동 후</h5>
            <h5> 회원가입 진행 부탁드립니다.</h5>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Emailconfirmed;
