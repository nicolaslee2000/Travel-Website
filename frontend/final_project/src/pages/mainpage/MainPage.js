import React from 'react';
import './mainPage.css';
import MainSearch from '../../components/mainpagecomponent/MainSearch';
import Header from '../../components/othercomponent/Header';
import Layout from './../../components/othercomponent/Layout';
import MainSearchPrac02 from './../../components/mainpagecomponent/MainSearchPrac02';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainSearchPrac02 />
    </>
  );
  // return (
  //   <>
  //     <Layout children={<MainSearch />} />
  //     {/* <Layout component={<MainSearchPrac02 />} /> */}
  //   </>
  // );
};

export default MainPage;
