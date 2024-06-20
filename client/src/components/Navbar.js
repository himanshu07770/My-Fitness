import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Button} from '@mui/material'; 
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    
    <Stack
    
    direction="row"
    justifyContent="space-around"
    
    sx={{ gap: {sm: '122px' , xs:'70px'}, mt: {sm: '1px', xs: '20px'}, justifyContent: 'none'}}
    px="3px"
    
    >


    <Stack 
    

    width= "100%"
    height="100px"
    direction="row"
    gap="25px"
    fontFamily="24px"
    alignItems="flex-end"
    paddingY="10px"
    boxShadow="0 2px 4px rgba(100,103,105,.85)"
    justifyContent="flex-end"
    backgroundColor= "black"
    
    paddingRight="35px"
    >
          
<Link to="/">
<img src={Logo} alt="logo" style={{width:'270px', margin:'5px 500px'}} />
</Link>     
{/* <Link style={{textDecoration: 'none',color:'white'}}>Hello</Link> */}

<a href="/Home" style={{textDecoration: 'none',color: 'white',fontSize: '20px',fontFamily: 'Montserrat', textDecoration: 'none',paddingBottom:"28px" }} onMouseEnter={(e) => {e.target.style.textDecoration = 'underline';}} onMouseLeave={(e) => {e.target.style.textDecoration = 'none';  }}> Home</a>
<a href="/BmiCalculator" style={{textDecoration: 'none',color: 'white',fontSize: '20px',fontFamily: 'Montserrat', textDecoration: 'none',paddingBottom:"28px" }} onMouseEnter={(e) => {e.target.style.textDecoration = 'underline';}} onMouseLeave={(e) => {e.target.style.textDecoration = 'none';  }}> BmiCalculator</a>
<a href="/Chatgpt" style={{textDecoration: 'none',color: 'white',fontSize: '20px',fontFamily: 'Montserrat', textDecoration: 'none',paddingBottom:"28px" }} onMouseEnter={(e) => {e.target.style.textDecoration = 'underline';}} onMouseLeave={(e) => {e.target.style.textDecoration = 'none';  }}> MyBot</a>
<a href="/login" style={{textDecoration: 'none',color: 'white',fontSize: '20px',fontFamily: 'Montserrat', textDecoration: 'none',paddingBottom:"28px" }} onMouseEnter={(e) => {e.target.style.textDecoration = 'underline';}} onMouseLeave={(e) => {e.target.style.textDecoration = 'none';  }}> LogOut</a>





  </Stack>

    </Stack>
  )
}

export default Navbar