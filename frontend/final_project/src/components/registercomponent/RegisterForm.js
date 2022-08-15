import {
  Checkbox,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Input,
  Tab,
  Tabs,
} from '@mui/material';
import Button from '@mui/material/Button';
import './registerForm.css';
import React, { useState } from 'react';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {<div>{children}</div>}
    </div>
  );
}

const RegisterForm = (props) => {
  const baseURL = 'http://localhost:8090';

  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  // const [register, setRegister] = useState([]);

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = inputs;

  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };

  function signup(inputs) {
    return request({
      url: baseURL + '/auth/signup',
      method: 'POST',
      body: JSON.stringify(inputs),
    });
  } // POST 호출 부분 분리

  const request = (options) => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);
    return fetch(options.url, options).then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          //   console.log(!response.ok);
          alert('해당 아이디는 이미 사용중입니다. 다른 ID를 입력해주세요');
          return Promise.reject(json);
        } else if (response.ok) {
          navigate('/registed');
        }
        return json;
      })
    );
  }; //JWT

  const handleSubmit = async (e) => {
    console.log(inputs);
    e.preventDefault();
    signup(inputs);
  };

  //   팝업창
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = async (e) => {
    //여기서 클릭을 했을때 dialog가 오픈이 되고, 이메일 인증코드가 발송이 되게.
    setOpen(true);
    const data = {
      email: inputs.email,
    };
    console.log(data); //정상적으로 값을 가져옴.

    await axios
      .post(baseURL + '/auth/emailAuth', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: Bearer ${ACCESS_TOKEN},
        },
      })
      .then((res) => {
        console.log('res', res);
      });
    // axios({
    //   url: baseURL + '/auth/emailAuth',
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // });
  };

  const emailcheck = async (e) => {
    //여기는 dialog 내부에서 확인 버튼을 누를때 인증 확인이 되었으면 눌리게
    const data = {
      email: inputs.email,
    };
    console.log(data);

    await axios
      .get(baseURL + `/auth/AuthSuccess?userEmail=${inputs.email}`)
      .then((res) => {
        console.log('res', res);
        alert('이메일 인증이 완료 되었습니다.');
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        alert('이메일 인증 확인 부탁드립니다.');
      });
  };

  return (
    <>
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
                  <div className='form-input name'>
                    <label>이름 &nbsp; &nbsp; </label>
                    <Input
                      type='text'
                      name='name'
                      placeholder='이름 입력하세요.'
                      className='name'
                      required
                      value={name}
                      onChange={handleValueChange}
                    ></Input>
                  </div>
                  <div className='form-input email'>
                    <label>아이디 &nbsp; &nbsp; </label>
                    {/* { !emailcheck && ( */}
                    <Input
                      type='text'
                      name='email'
                      placeholder='이메일을 입력하세요.'
                      className='email'
                      required
                      value={email}
                      onChange={handleValueChange}
                    ></Input>
                    <br />
                    <div className='email-checklist'>
                      <FormGroup row>
                        <FormControlLabel
                          value='email-checkbox'
                          control={<Checkbox disabled />}
                          label='로그인확인'
                        />
                        <FormControlLabel
                          value='email-checkbutton'
                          control={
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={handleClickOpen}
                            >
                              이메일인증
                            </Button>
                          }
                        />
                      </FormGroup>
                    </div>
                    {/* )} /*}
                    {/* { emailcheck && (
                    <Input
                      type='text'
                      name='email'
                      placeholder='이메일을 입력하세요.'
                      className='email'
                      required
                      disabled
                      value={email}
                      onChange={handleValueChange}
                    ></Input>
                    <br />
                    <div className='email-checklist'>
                      <FormGroup row>
                        <FormControlLabel
                          value='email-checkbox'
                          control={
                            <Checkbox
                              disabled
                              checked
                            />
                          }
                          label='로그인확인'
                        />
                        <FormControlLabel
                          value='email-checkbutton'
                          control={
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={handleClickOpen}
                            >
                              이메일인증
                            </Button>
                          }
                        />
                      </FormGroup>
                    </div>
                    )}  */}
                  </div>
                  <div className='form-input'>
                    <label className='password'>비밀번호 &nbsp; </label>
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
                    <br></br>
                    <Button variant='text' href='/'>
                      이전
                    </Button>
                    <Button type='submit' variant='contained'>
                      확인
                    </Button>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </form>
      </Container>

      <Dialog open={open} onClose={handleClose} className='emailCheckDialog'>
        <DialogTitle>이메일 인증 부탁드립니다.</DialogTitle>
        <DialogContent>
          <br />
          <DialogContentText>
            <Button variant='outlined' onClick={emailcheck}>
              인증 확인 완료
            </Button>
            <Button variant='outlined' onClick={handleClose}>
              인증 확인 취소
            </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RegisterForm;
