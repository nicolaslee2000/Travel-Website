import { Container, Input, Tab, Tabs } from '@mui/material';
import Button from '@mui/material/Button';
import './loginForm.css';
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
//import { TabPanel } from 'react-tabs';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {<div>{children}</div>}
    </div>
  );
}

const LoginForm = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [login, setLogin] = useState('');

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });
  const { id, password } = inputs;
  console.log(inputs);

  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };

  const handleSubmit = async (e) => {
    setLogin();
    e.preventDefault();
    setLogin();
  };
  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit}>
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
                    name='id'
                    placeholder='아이디를 입력하세요.'
                    className='id'
                    required
                    value={id}
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
                    value={password}
                    onChange={handleValueChange}
                  ></Input>
                </div>
                <div className='form-button'>
                  <br></br>
                  <Button variant='text' href='/'>
                    이전
                  </Button>
                  <Button type='submit' variant='contained' href='/'>
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
                      <ContactSupportRoundedIcon />
                      <label>&nbsp; 카카오 아이디로 로그인하기</label>
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
