import React from 'react';
import './mainpage.css';
import MainSearch from '../../components/mainpagecomponent/MainSearch';
import Header from '../../components/othercomponent/Header';
import Layout from './../../components/othercomponent/Layout';
import MainSearchPrac02 from './../../components/mainpagecomponent/MainSearchPrac02';

const main = () => {
  return (
    <>
      <div className='wrap'>
        <div className='container'>
          <MainSearchPrac02 />
        </div>
      </div>
    </>
  );
};

export default MainPage;
