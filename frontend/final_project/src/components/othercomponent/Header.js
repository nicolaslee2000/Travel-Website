import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "./header.css";
import { Box, Button, Link } from "@mui/material";
import LogoIcon from "../../global/assets/images/logo/LogoIcon.png";
import LogoName from "../../global/assets/images/logo/LogoName.png";

const Header = (props) => {
    const [openProButton, setOpenProButton] = useState(true);
    const navigate = useNavigate();
    const handleLogin = () => {
        setOpenProButton(!openProButton);
    };
    const titleStyle = {
        fontSize: "30px",
        color: "white",
        textShadow: "6px 2px 2px gray",
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
        console.log(anchorEl);
        console.log(open);
    };
    return (
        <>
            {/* <div className="headerCotainer">
                {!props.isLogin && (
                    <div className="headerButtonGroup">
                        <div className="headerButtonPos">
                            <Button
                                className="headerButton"
                                onClick={handleLogin}
                                href="/login"
                            >
                                로그인
                            </Button>
                        </div>
                        <div className="headerButtonPos">
                            <Button className="headerButton" href="/register">
                                회원가입
                            </Button>
                        </div>
                    </div>
                )}

                {props.isLogin && (
                    <div className="headerButtonGroup">
                        <IconButton
                            size="small"
                            onClick={handleClick}
                            sx={{ ml: 2, width: 50, height: 50 }}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        >
                            <AccountCircleIcon fontSize="large" />
                        </IconButton>
                        <Button>로그아웃</Button>

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
                <div className="headerTitle">
                    <NavLink /*activeStyle={titleStyle} to="/">
                        자바 풀스텍 A반 3조
                    </NavLink>
                </div>
            </div> */}
            <Box
                sx={{
                    display: "flex",
                    height: 120,
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{ color: "inherit", display: "flex" }}
                    underline="none"
                    component={Link}
                    href="/"
                >
                    <img
                        src={LogoIcon}
                        alt="Logo icon"
                        width={120}
                        height={120}
                    />
                    {/* <img
                        src={LogoName}
                        alt="Logo name"
                        width={240}
                        height={240}
                        style={{ alignSelf: "center" }}
                    /> */}
                    <Typography
                        variant="h1"
                        sx={{
                            alignSelf: "center",
                            fontFamily: "comic sans MS",
                            fontWeight: "630",
                        }}
                        noWrap
                    >
                        Travel Service
                    </Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Button sx={{ minWidth: 100, mr: 0.5 }} variant="text">
                        Sign in
                    </Button>
                    <Button sx={{ minWidth: 100 }} variant="outlined">
                        Sign up
                    </Button>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2, mr: 3 }}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                "&:before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: "background.paper",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                        }}
                        anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                        }}
                    >
                        <MenuItem
                            onClick={() => {
                                console.log("open" + open);
                                console.log("anchor" + anchorEl);
                                handleClose();
                                setAnchorEl(null);
                                navigate("/dashboard");
                                console.log("open" + open);
                                console.log("anchor" + anchorEl);
                            }}
                        >
                            <Avatar />
                            Profile
                        </MenuItem>
                        <MenuItem>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>
        </>
    );
};

export default Header;
