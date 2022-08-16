import { Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <Box
      className='footer-main'
      sx={{
        width: 1,
        minHeight: 100,
        textAlign: 'Center',
      }}
    >
      <Grid container spacing={5}>
        {/* <Grid item xs={2}></Grid> */}
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <div className='footer-container'>
            <h4>Travel Service</h4>
            <ul className='footer-list'>
              <li>
              <Link underline="hover" color="inherit" href="/" target='_blank' fontSize="small">
                손상기
              </Link>
              <span className='text_dot'>&nbsp;·&nbsp;</span>
              <Link underline="hover" color="inherit" href="https://github.com/eunjuny" target='_blank' fontSize="small">
              엽은준
              </Link>
              <span className='text_dot'>&nbsp;·&nbsp;</span>
              <Link underline="hover" color="inherit" href="https://github.com/yooxx" target='_blank' fontSize="small">
              유민정
              </Link>
              <span className='text_dot'>&nbsp;·&nbsp;</span>
              <Link underline="hover" color="inherit" href="https://github.com/cupmilk" target='_blank' fontSize="small">
              유정현
              </Link>
              <span className='text_dot'>&nbsp;·&nbsp;</span>
              <Link underline="hover" color="inherit" href="https://github.com/nicolaslee2000" target='_blank' fontSize="small">
              이건영
              </Link>
              <span className='text_dot'>&nbsp;·&nbsp;</span>
              <Link underline="hover" color="inherit" href="https://github.com/Blaze-F" target='_blank' fontSize="small">
              황준혁
              </Link>  
              </li>
              <li>
                <div className='footer-icon'>
                  <a
                    className='footer-icon'
                    href='https://github.com/nicolaslee2000/Travel-Website'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <GitHubIcon fontSize='large' color='secondary' />
                  </a>
                  <a
                    className='footer-icon'
                    href='https://www.notion.so/Web-development-project-a54b72b29d224b228b71494646bdd0c3'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <AssignmentIcon fontSize='large' color='secondary' />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <hr />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <div className='footer-bottom'>
            <div> Copyright &copy; 2022.03.23 - 2022.09.05 </div>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <Grid item xs>
          <div> &nbsp; &nbsp;</div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
