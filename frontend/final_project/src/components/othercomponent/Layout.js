import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, isLogin }) => {
  return (
    <>
      <Header isLogin={isLogin} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
