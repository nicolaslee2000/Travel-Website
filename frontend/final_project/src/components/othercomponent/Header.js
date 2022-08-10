import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
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

  // 이미지 클릭 메뉴바와 비슷하게
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenProButton(!openProButton);
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
            <IconButton
              size='large'
              onClick={handleClick}
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
            >
              <AccountCircleIcon fontSize='large' />
            </IconButton>

            {/* <div className='headerButtonPos'>
              <button className='headerButton'>프로필</button>
            </div>
            <div className='headerButtonPos'>
              <button className='headerButton' onClick={handleLogin}>
                로그아웃
              </button>
            </div> */}
          </div>
        )}
        <div className='headerTitle'>
          <NavLink /*activeStyle={titleStyle}*/ to='/'>
            자바 풀스텍 A반 3조
          </NavLink>
        </div>
      </div>

      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize='small' />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
