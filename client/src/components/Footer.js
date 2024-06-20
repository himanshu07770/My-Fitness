import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Logo from '../assets/images/Logo1.png'

const Footer = () => {
  return (
    <Box bgcolor="#d2d2d2" color="black" py={3} display="flex" justifyContent="center" alignItems="center">
      {/* First Box: Website Logo */}
      <Box className="box logo" mx={2}>
      <Link to="/">
      <img src={Logo} alt="logo" style={{width:'380px'}} />
     </Link>  
      </Box>
      <Box mx={7}></Box>
      {/* Second Box: Social Media Links (Vertical) */}
      <Box className="box social-media" mx={2} display="flex" flexDirection="column" alignItems="center" color='black'>
        <Typography fontSize="20px" variant="body2" gutterBottom>
          Follow us on social media:
        </Typography>
        <Link href="https://www.instagram.com/ch_himanshu_18/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon color="primary" fontSize="large" style={{marginBottom:"14px"}} />
        </Link>
         <Link href="https://www.linkedin.com/in/himanshu-choudhary-67b4b6304/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon color="primary" fontSize="large" style={{marginBottom:"14px"}} />
        </Link>
        {/* <Link href="https://www.facebook.com/mayankrawat24/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon color="primary" fontSize="large" style={{marginBottom:"14px"}}/>
        </Link> */}
        <Link href="https://github.com/himanshu07770" target="_blank" rel="noopener noreferrer">
          <GitHubIcon color="primary" fontSize="large" style={{marginBottom:"14px"}}/>
        </Link>
      </Box>
      <Box mx={7}></Box>
      {/* Third Box: Vertical Line */}
      <Box className="box vertical-line" mx={2}>
        <div style={{ width: '1px', height: '230px', backgroundColor: '#000' }}></div>
      </Box>
      <Box mx={7}></Box>


      {/* Fourth Box: Email Address Link */}
      <Box className="box email" mx={2}>
        <Typography variant="body2" gutterBottom>
          Contact us via email:
         
        </Typography>
        <a href="mailto: ch.himanshu148@gmail.com">
          <EmailIcon color="primary" fontSize="large" /> 
        </a>
      </Box>
      <Box mx={7}></Box>
    </Box>
  );
};

export default Footer;
