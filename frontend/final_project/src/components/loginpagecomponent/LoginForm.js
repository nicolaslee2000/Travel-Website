import { Container, Input, Link, Tab, Tabs } from '@mui/material';
import Button from '@mui/material/Button';
import './loginForm.css';
import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
//import { TabPanel } from 'react-tabs';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Route, useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { goToHome, login, setUserInfoToLocalstorage } from '../../apiEndPoints/ApiEndPoints';
import {
  ACCESS_TOKEN,
  BASE_URL,
  GOOGLE_AUTH_URL,
  OAUTH2_REDIRECT_URI,
} from '../../apiEndPoints/constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';

function TabPanel(props) {
  const navigate = useNavigate();

  const { children, value, index } = props;
  return (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {<div>{children}</div>}
    </div>
  );
}

const LoginForm = (props) => {

  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  //local로그인, sns로그인 탭
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };


  const loginStart = async (e) => {
    e.preventDefault();
    const data = {
      email: inputs.email,
      password: inputs.password,
    };
    /**
    *  나중에 alert 지우고 toast으로 바꾸려고함 제발 왜 작동을 안하는거임 ㅡㅡ
     */
    login(data)
      .then((response) => {
        alert('감사')
        toast.success('로그인되었습니다, 감사합니다.', );
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        setUserInfoToLocalstorage();
        return goToHome();
      })
      .catch((err) => {
        console.log('로그인')
        alert("에러")
        toast.error("아이디와 비밀번호를 다시 확인해 주세요.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_RIGHT
        });
        console.log(err)
        toast.info(err && err.message, {
          autoClose: 5000,
          position: toast.POSITION.TOP_RIGHT
        });
      });
  };
  const facebookLogin = async (e) => {};

  return (
    <Container maxWidth='sm'>
      <form>
        <div className='tab-form'>
          <div className='tab-head'>
            <Tabs value={value} onChange={handleChange}>
              <Tab label='통합회원 로그인' />
              <Tab label='SNS 로그인' />
            </Tabs>
          </div>
          <div className='form'>
            <TabPanel value={value} index={0} className='test'>
              <div className='login active'>
                <h2>통합회원 로그인 </h2>
                <div className='form-input'>
                  <label>아이디 &nbsp; &nbsp; </label>
                  <Input
                    type='text'
                    name='email'
                    placeholder='아이디(이메일)를 입력하세요.'
                    className='email'
                    required
                    value={email || ''}
                    onChange={handleValueChange}
                  ></Input>
                </div>
                <div className='form-input'>
                  <label>비밀번호 &nbsp; </label>
                  <Input
                    type='password'
                    name='password'
                    placeholder='비밀번호를 입력하세요.'
                    className='password'
                    required
                    value={password || ''}
                    onChange={handleValueChange}
                  ></Input>
                </div>
                <div className='form-button'>
                  <br></br>
                  <Button variant='text' href='/'>
                    이전
                  </Button>
                  <Button
                    type='submit'
                    variant='contained'
                    onClick={loginStart}
                  >
                    로그인
                    
                  </Button>
                </div>
              </div>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <div className='SNSlogin'>
                <h2>SNS 계정 로그인 </h2>
                <div className='form-input'>
                  <div>
                    <Button
                      type='submit'
                      className='googleLogin'
                      value='googleLogin'
                        href={
                          BASE_URL +
                          '/oauth2/authorize/google?redirect_uri=' +
                          OAUTH2_REDIRECT_URI
                        }
                    >
                      <GoogleIcon />
                      <label> &nbsp; 구글 아이디로 로그인하기</label>
                    </Button>
                  </div>
                  <br></br>
                  <div>
                    <Button
                      type='submit'
                      className='facebookLogin'
                      value='facebookLogin'
                      target='_blank'
                      href={GOOGLE_AUTH_URL}
                      onClick={facebookLogin}
                    >
                      <FacebookIcon />
                      <label>&nbsp; 페이스북 아이디로 로그인하기</label>
                    </Button>
                  </div>
                </div>
                <br></br>
                <div className='form-button'>
                  <Button variant='text' href='/'>
                    이전
                  </Button>
                  <Button type='submit' variant='contained' href='/'>
                    확인
                  </Button>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default LoginForm;
