import React, { useEffect, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import Logout from '@mui/icons-material/Logout';
import { Box, Button, Link } from '@mui/material';
import LogoIcon from '../../global/assets/images/logo/LogoIcon.png';

import Triplus_logo from '../../global/assets/images/logo/Triplus_logo.PNG';



const Header = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openProButton, setOpenProButton] = useState(true);
  const navigate = useNavigate();

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

  /**
  * cookie 는 권장하지는 않음.
   */
   function isLogout(goToHome) { 
    localStorage.removeItem('email')
    localStorage.removeItem('profileImg')
    localStorage.removeItem('name')
    localStorage.removeItem('createDate')
  };
  function goToHome() {
    navigate("/");
  }
  


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
        <Box sx={{ margin: 'auto' }}>
          <img src={Triplus_logo} alt='Logo name' width={224} height={63} />
        </Box>
      </Box>

      <Box sx={{ mt: '3.5%' }}>
        {!localStorage.getItem('email') && (
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
        {localStorage.getItem('email') && (
          <div>
            <Tooltip title='Account settings'>
              <IconButton
                onClick={handleClick}
                size='medium'
                sx={{ ml: 2, mr: 3 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
              >
                {/* <Avatar sx={{ width: 32, height: 32 }} >M</Avatar> */}
                < img src={localStorage.getItem('profileImg')} alt={localStorage.getItem('profileImg')}
                  color = 'disabled'
                  sx={{ width: 35, height: 35 }}
                />
              </IconButton>
            </Tooltip>
            <Typography variant='h3'> {localStorage.getItem('name') + "님 안녕하세요"} </Typography>
            <Typography variant='h3'> {localStorage.getItem('email')} </Typography>
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
                <Avatar  />
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
              <MenuItem onClick={isLogout} >
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
