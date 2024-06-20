import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import {NavLink,useNavigate} from "react-router-dom"
import "./mix.css"



const Register = () => {
  const navigate = useNavigate()
  
  const [ email,setEmail] = useState("");
  const [ password,setPassword] = useState("");
  const [ name,setName] = useState("");
  const[passwordCorrrect , setPasswordCorrrect] = useState(true);
  const validatePassword = (password) => {
    // Password must be at least six characters, contain one uppercase letter,
    // one special character, and one number.
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
    return regex.test(password);
  };
  const handlesubmit =(e) =>{
    e.preventDefault()
    if (!validatePassword(password)) {
      setPasswordCorrrect(false);
      console.log("hello");
    }
    else{
      console.log("heh");
      axios.post("http://localhost:4002/register ",{name,email,password})
    .then(result => {console.log(result)
    navigate('/login')
    
  })
    .then(err => console.log(err))
  }
    
}
  

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
           
          </div>
          <form onSubmit={handlesubmit} >
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname"  onChange={(e) => setName(e.target.value)}  placeholder='Enter Your Name' />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={(e) => setEmail(e.target.value)}   placeholder='Enter Your Email Address' />
            </div>


            <div className="form_input">
              <label htmlFor="password">Password</label>
            
              <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}   placeholder='Enter Your password' />
              {!passwordCorrrect && <p className="error-message">Please Enter a valid password</p>}
              </div>
           


            <button className='btn' >Sign Up</button>
            
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Register