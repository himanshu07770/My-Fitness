//Here banner is added and test besideof it
import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material' ;//typography is like <p> tag

import HeroBannerImage from '../assets/images/cbum.jpg';

const HeroBanner = () => {
  return (
  <Box 
  sx={{mt: { lg: '90px', xs: '70px'}, ml:{ sm: '40px'}}}
  position="relative" p="px"
  >
        <Typography color="#7EAA92" fontWeight="580" fontSize="25px" mb="25px">
           Fitness Club 
        </Typography> 
        <Typography fontWeight={700} color="white"
        sx={{ fontSize: { lg: '44px', xs:'40px'}}} >
            Sweat, Smile <br />
             and Repeat
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="100px" mb="1px" color="#7EAA92">
           Check out the most effective exercises 
        </Typography>
         <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#7EAA92' , padding: '12px'}}>Explore Exercises</Button>
         <Typography fontWeight={600} color="#7EAA92" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '175px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
  )
}

export default HeroBanner