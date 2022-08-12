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
  const ACCESS_TOKEN = 'accessToken';

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

  // setSaveIDFlag(e.target.check);
  // if (e.target.check) {
  //   setCookie('rememberID', saveid, { maxAge: 2000 });
  // } else {
  //   removeCookie('rememberID');
  // }
  // };

  // const [saveid, setSaveid] = useState('');
  // const [saveIDFlag, setSaveIDFlag] = useState(false);
  // const [cookies, setCookie, removeCookie] = useCookies(['rememberID']);

  // useEffect(() => {
  //   //undefined 일때 A component is changing a controlled input to be uncontrolled. 발생
  //   if (cookies.rememberID !== undefined) {
  //     setSaveid(cookies.rememberID);
  //     setSaveIDFlag(true);
  //   }
  // }, []);

  const loginStart = async (e) => {
    console.log(inputs);
    e.preventDefault();

    const data = {
      email: inputs.email,
      password: inputs.password,
    };
    // console.log('111', data);
    await axios
      .post(baseURL + '/auth/login', JSON.stringify(data), {
        // headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((res) => {
        console.log('data:', res);
        console.log('res.data', res.data);
        localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
        console.log('res.data.accessToken', res.data.accessToken);
        console.log('localStorage.getiTem', localStorage.getItem(ACCESS_TOKEN));
        alert('로그인되었습니다, 감사합니다.');

        props.setIsLogin(true);

        navigate('/'); //팝업창 확인 후 메인페이지로.
      })
      .catch((err) => {
        console.log('err', err);
        alert('아이디와 비밀번호를 다시 확인해 주세요.');
      });
  };

  // function login(inputs) {
  //   return request({
  //     url: API_BASE_URL + '/auth/login',
  //     method: 'POST',
  //     body: JSON.stringify(inputs),
  //   });
  // }

  return (
    <Container maxWidth='sm'>
      {/* onSubmit={handleSubmit} */}
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
                {/* <div className='form_saveID'>
                  <input
                    type='checkbox'
                    name='saveEmail'
                    id='saveEmail'
                    checked={saveIDFlag}
                    onChange={loginStart}
                  />
                  <label>
                    <span>아이디 저장</span>
                  </label>
                </div> */}
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
                    <Button>
                      <GoogleIcon />
                      <label> &nbsp; 구글 아이디로 로그인하기</label>
                    </Button>
                  </div>
                  <br></br>
                  <div>
                    <Button>
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
