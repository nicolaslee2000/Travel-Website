import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
  const [openProButton, setOpenProButton] = useState(true);
  const handleLogin = () => {
    setOpenProButton(!openProButton);
  };
  const titleStyle = {
    fontSize: '30px',
    color: 'white',
    textShadow: '6px 2px 2px gray',
  };
  return (
    <>
      <div className='headerCotainer'>
        {openProButton && (
          <div className='headerButtonGroup'>
            <div className='headerButtonPos'>
              <button className='headerButton' onClick={handleLogin}>
                로그인
              </button>
            </div>
            <div className='headerButtonPos'>
              <button className='headerButton'>회원가입</button>
            </div>
          </div>
        )}

        {!openProButton && (
          <div className='headerButtonGroup'>
            <div className='headerButtonPos'>
              <button className='headerButton'>프로필</button>
            </div>
            <div className='headerButtonPos'>
              <button className='headerButton' onClick={handleLogin}>
                로그아웃
              </button>
            </div>
          </div>
        )}
        <div className='headerTitle'>
          <NavLink activeStyle={titleStyle} to='/'>
            자바 풀스텍 A반 3조
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
