import React from 'react';
import './mainPage.css';
import MainSearch from '../../components/mainpagecomponent/MainSearch';
import Header from '../../components/othercomponent/Header';
import Layout from './../../components/othercomponent/Layout';
import MainSearchPrac02 from './../../components/mainpagecomponent/MainSearchPrac02';

const main = () => {
  return (
    <>
      <div className="wrap">
        <div className="container">
          <MainSearchPrac02 />
        </div>
      </div>
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

export default MainPage;
