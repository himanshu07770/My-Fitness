import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

import Spinner from 'react-bootstrap/Spinner';
import "./mix.css"
import axios from 'axios'
import Home from './Home';
import { colors } from '@mui/material';

const Login = () => {

    const [ email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
    const [spiner,setSpiner] = useState(false);
    const [loginPage, setLoginPage] = useState(true);
    const[passwordCorrect , setPasswordCorrect] = useState(true);

    const navigate = useNavigate();
    const handlesubmit =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:4002/login ",{email,password})
        
        .then(result =>{
            console.log(result)
            if(result.data === 'success'){
                setLoginPage(false);
               
                navigate('/')
            }
            else {
                setPasswordCorrect(false);
            }
        })
        .catch(err =>console.log(err))
       
    }

    return (
       
    loginPage == true ?   <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        
                    </div>
                    <form onSubmit={handlesubmit}>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"  onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                     
                            <input type="password" name="password" onChange={(e)=> setPassword(e.target.value)}  placeholder='Enter Your password' />
                            {!passwordCorrect && <p className="error-message" style={{color:"red"}}>Incorrect password. Please try again.</p>}
                         </div>
                       
                     
                        
                        <button className='btn' >Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                        <p >Don't have an account, <NavLink to="/register" style={{color:"Blue"}}>Create Account</NavLink> </p>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </> : <Home />
        
    )
}

export default Login