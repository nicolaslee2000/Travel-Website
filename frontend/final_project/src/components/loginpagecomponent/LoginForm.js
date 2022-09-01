import { Container, Input, Link, Tab, Tabs } from '@mui/material';
import Button from '@mui/material/Button';
import './loginForm.css';
import React, { useEffect, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
//import { TabPanel } from 'react-tabs';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Route, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { login } from '../../ApiConnect/ApiEndPoints';
import { ACCESS_TOKEN } from '../../ApiConnect/constants';

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
  const baseURL = 'http://localhost:8090';
  const [cookies, setCookie, removeCookie] = useCookies(['this_is_login']);

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

    login(data)
      .then((response) => {
        alert('로그인되었습니다, 감사합니다.');
        setCookie('this_is_login', response.data); //이메일 을 저장
        console.log('this_is_login', response); //이메일 가져옴
        localStorage.setItem('token', response.accessToken);
        console.log('니 알아서 해라', localStorage.getItem('token'));
        // props.setIsLogin(true);
        // this.props.history.push("/");
        navigate('/');
      })
      .catch((err) => {
        alert('아이디와 비밀번호를 다시 확인해 주세요.');
      });
  };

  const OAUTH2_REDIRECT_URI = 'http://localhost:8090/auth/oauth2/redirect';

  const googleLogin = async () => {
    console.log('google Login start');
    const data = {
      token: inputs.token,
    };
    await axios
      .get(
        baseURL +
          '/auth/oauth2/redirect=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNjYyMDQ3MDM0LCJleHAiOjE2NjI5MTEwMzR9.PAssM-ybPGeEGAeybHgCxr-lyL6TCh4J4jE6iLcSo6LjiIaV_2KUlmNVIvvRZNd_sAvwo0P3f5X3p6HhSEqTpA#_=_'
      )
      .then((response) => {
        alert('로그인되었습니다, 감사합니다.');
        setCookie('this_is_login', response); //이메일 을 저장
        console.log('this_is_login', response); //이메일 가져옴
        localStorage.setItem('token', response.accessToken);
        console.log('니 알아서 해라', localStorage.getItem('token'));
      });
  };
  const facebookLogin = () => {
    console.log('facebook Login start');
  };

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
                      target='_blank'
                      href={
                        baseURL +
                        '/oauth2/authorize/google?redirect_uri=' +
                        OAUTH2_REDIRECT_URI
                      }
                      onClick={googleLogin}
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
                      href={
                        baseURL +
                        '/oauth2/authorize/facebook?redirect_uri=' +
                        OAUTH2_REDIRECT_URI
                      }
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
