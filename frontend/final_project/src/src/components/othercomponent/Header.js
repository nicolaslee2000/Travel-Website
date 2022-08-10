import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [openProButton, setOpenProButton] = useState(true);
  const handleLogin = () => {
    setOpenProButton(!openProButton);
  };

  // const titleStyle = {
  //   fontSize: '30px',
  //   color: 'white',
  //   textShadow: '6px 2px 2px gray',
  // };
  return (
    <>
      <div className="headerCotainer">
        {openProButton && (
          <div className="headerButtonGroup">
            <div className="headerButtonPos">
              <Button
                className="headerButton"
                onClick={handleLogin}
                href="login"
                variant="contained"
              >
                로그인
              </Button>
            </div>
            <div className="headerButtonPos">
              <Button
                className="headerButton"
                href="register"
                variant="contained"
              >
                회원가입
              </Button>
            </div>
          </div>
        )}

        {!openProButton && (
          <div className="headerButtonGroup">
            <div className="headerButtonPos">
              <button className="headerButton">프로필</button>
            </div>
            <div className="headerButtonPos">
              <button className="headerButton" onClick={handleLogin}>
                로그아웃
              </button>
            </div>
          </div>
        )}
        <div className="headerTitle">
          {/* activeStyle={titleStyle}  얘를 넣으면 오류떠서 뺴놓음 */}
          <NavLink className="main" to="/">
            자바 풀스텍 A반 3조
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
