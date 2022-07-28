import { Box, Input, Tab, Tabs } from '@mui/material';
import Button from '@mui/material/Button';
import './registerForm.css';
import React, { useState } from 'react';
import { Container } from '@mui/system';

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {<div>{children}</div>}
    </div>
  );
}

const RegisterForm = () => {
  const [value, setValue] = React.useState(0);

  const [register, setRegister] = useState('');

  const [inputs, setInputs] = useState({
    name: '',
    id: '',
    password: '',
    pnumber: '',
    email: '',
  });
  const { name, id, password, pnumber, email } = inputs;
  console.log(inputs);

  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };

  const handleSubmit = async (e) => {
    setRegister();
    e.preventDefault();
    setRegister();
  };

  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit}>
        <div className='tab-regform'>
          <div className='tab-head'>
            <Tabs value={value}>
              <Tab label='통합회원 회원가입' />
            </Tabs>
          </div>
          <div className='form'>
            <TabPanel value={value} index={0} className='test'>
              <div className='register active'>
                <h2>통합회원 회원가입 </h2>
                <div className='form-input'>
                  <label>이름 &nbsp; &nbsp; </label>
                  <Input
                    type='text'
                    name='name'
                    placeholder='이름을 입력해주세요'
                    required
                    value={name}
                    onChange={handleValueChange}
                  ></Input>
                </div>
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
                <div className='form-input'>
                  <label>연락처 &nbsp; &nbsp; </label>
                  <Input
                    type='text'
                    name='pnumber'
                    placeholder='연락처를 입력하세요.'
                    className='number'
                    required
                    value={pnumber}
                    onChange={handleValueChange}
                  ></Input>
                </div>
                <div className='form-input'>
                  <label>이메일 &nbsp; &nbsp; </label>
                  <Input
                    type='text'
                    name='email'
                    placeholder='이메일을 입력하세요.'
                    className='email'
                    required
                    value={email}
                    onChange={handleValueChange}
                  ></Input>
                </div>
                <div className='form-input'>
                  <br></br>
                  <Button variant='text' href='/'>
                    이전
                  </Button>
                  <Button type='submit' variant='contained' href='/registed'>
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

export default RegisterForm;
