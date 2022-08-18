import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import { SidebarWidth } from '../../../global/assets/global/Theme-variable';
import Menuitems from './data';

const Sidebar = (props) => {
  const [open, setOpen] = React.useState(true);
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };

  const SidebarContent = (
    <Box sx={{ p: 3, height: 'calc(100vh - 40px)', overflow: 'auto' }}>
      {/* <Link to="/">
                <Box sx={{ display: "flex", alignItems: "Center" }}>
                    <LogoIcon />
                </Box>
            </Link> */}

      <Box>
        <List
          sx={{
            mt: 4,
          }}
        >
          {Menuitems.map((item, index) => {
            //{/********SubHeader**********/}
            return (
              <List component='li' disablePadding key={item.title}>
                <ListItem
                  onClick={() => handleClick(index)}
                  button
                  component={NavLink}
                  to={item.href}
                  selected={pathDirect === item.href}
                  sx={{
                    mb: 1,
                    ...(pathDirect === item.href && {
                      color: 'white',
                      backgroundColor: (theme) =>
                        `${theme.palette.primary.main}!important`,
                    }),
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ...(pathDirect === item.href && {
                        color: 'white',
                      }),
                    }}
                  >
                    <item.icon width='20' height='20' />
                  </ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItem>
              </List>
            );
          })}
        </List>
      </Box>
    </Box>
  );
  if (lgUp) {
    return <Box sx={{ width: 400 }}>{SidebarContent}</Box>;
  }
  return <Box sx={{ width: 400 }}>{SidebarContent}</Box>;
};

export default Sidebar;
