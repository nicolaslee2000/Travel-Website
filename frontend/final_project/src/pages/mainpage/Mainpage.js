import { Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Layout from "../../components/othercomponent/Layout";
import MainSearchPrac02 from "../../components/mainpagecomponent/MainSearchPrac02";
import "./mainpage.css";
//import Log_JoinPage from '../registerpage/RegisterPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const main = () => {
  return (
    <>
      <Layout>
        <div className="wrap">
          <div className="container">
            <MainSearchPrac02 />
          </div>
        </div>
      </Layout>
    </>

    // <Layout>
    //   <Container maxWidth='sm'>
    //     <div className='wrap'>
    //       <div className='container'>
    //         <Button variant='contained' href='/register'>
    //           회원가입
    //         </Button>
    //         <Button variant='contained' href='/login'>
    //           로그인
    //         </Button>
    //         <main>
    //           <h1>메인페이지입니다.</h1>
    //         </main>
    //       </div>
    //     </div>
    //   </Container>
    // </Layout>
  );
};

export default main;
