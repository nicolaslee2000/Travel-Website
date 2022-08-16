import { Grid } from '@mui/material';
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
          <div className='footer-container-1'>
            {/* <h4>url</h4>
            <ul className='footer-list-1'>
              <li>
                <a href='/'>메인</a>
              </li>
              <li>
                <a href='/login'>로그인</a>
              </li>
              <li>
                <a href='/register'>회원가입</a>
              </li>
            </ul> */}
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className='footer-container'>
            <h4>팀원들한테 물어보고 개인 git주소 연결</h4>
            <ul className='footer-list'>
              <li>
                <a href='/'>손상기</a>
                <span className='text_dot'>·</span>
                <a href='/'>엽은준</a>
                <span className='text_dot'>·</span>
                <a href='/'>유민정</a>
                <span className='text_dot'>·</span>
                <a href='/'>유정현</a>
                <span className='text_dot'>·</span>
                <a href='/'>이건영</a>
                <span className='text_dot'>·</span>
                <a href='/'>황준혁</a>
              </li>
              <li>
                <div className='footer-icon'>
                  <a
                    className='footer-icon'
                    href='https://github.com/nicolaslee2000/Travel-Website'
                    target='_blank' //새 창 열어주는거
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
