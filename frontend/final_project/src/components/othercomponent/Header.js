import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
import { Box, Button, Link } from '@mui/material';
import LogoIcon from '../../global/assets/images/logo/LogoIcon.png';
import LogoName from '../../global/assets/images/logo/LogoName.png';
import { useCookies } from 'react-cookie';
import { remove } from 'lodash';

const Header = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openProButton, setOpenProButton] = useState(true);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['this_is_login']);
  const [checkLogin, setCheckLogin] = useState(null);

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

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenProButton(!openProButton);
    setOpen(false);
  };

  const LoginChecked = () => {
    const cookie = cookies.this_is_login; //쿠키에서 이메일꺼내기
    console.log('loginChecked', cookie); //이메일 가져오는거 확인됨(cookie에 담긴건 확인)
  };

  const isLogout = () => {
    const cookie = cookies.this_is_login;
    console.log('Logout cookie', cookie);
    removeCookie('this_is_login');
    console.log('Logout 확인', cookies.this_is_login); //두번 클릭해야 둘다 사라진거 확인
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: 120,
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{ color: 'inherit', display: 'flex' }}
        underline='none'
        component={Link}
        href='/'
      >
        <img src={LogoIcon} alt='Logo icon' width={120} height={120} />
        {/* <img
                        src={LogoName}
                        alt="Logo name"
                        width={240}
                        height={240}
                        style={{ alignSelf: "center" }}
                    /> */}
        <Typography
          variant='h1'
          sx={{
            alignSelf: 'center',
            fontFamily: 'comic sans MS',
            fontWeight: '630',
          }}
          noWrap
        >
          Travel Service
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        {!cookies.this_is_login && (
          <div>
            <Button
              sx={{ minWidth: 100, mr: 0.5 }}
              variant='text'
              onClick={() => navigate('/login')}
            >
              Sign in
            </Button>
            <Button
              sx={{ minWidth: 100 }}
              variant='outlined'
              onClick={() => navigate('/register')}
            >
              Sign up
            </Button>
          </div>
        )}
        {cookies.this_is_login && (
          <div>
            <Tooltip title='Account settings'>
              <IconButton
                onClick={handleClick}
                size='small'
                sx={{ ml: 2, mr: 3 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
              >
                {/* <Avatar sx={{ width: 32, height: 32 }} >M</Avatar> */}
                <AccountCircleIcon
                  color='disabled'
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Tooltip>

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
              transformOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom',
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate('/dashboard/travelerInfo');
                }}
              >
                <Avatar />
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate('/dashboard/account');
                }}
              >
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={isLogout}>
                <ListItemIcon>
                  <Logout fontSize='small' />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Header;
