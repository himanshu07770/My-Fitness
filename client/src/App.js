import React from 'react';
import { Route , Routes, Navigate } from 'react-router-dom'; 
import { Box } from '@mui/material'; 

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BmiCalculator from './pages/BmiCalculator';
import ChatBotLogic from './pages/chatgpt';
import Login from './pages/login';
import Register from './pages/register';


import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Box width="400px" sx={{ width : {x1: '1488px'}}} m="auto"> 


   
    <Routes> 
    {/* <Route path="*" element={<Navigate to="/login" />} /> */}
        {/* <Route path="/" element={<Login />} />  */}
        <Route path="/" element = {<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/BmiCalculator" element={<BmiCalculator />} />
        <Route path="/Chatgpt" element={<ChatBotLogic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />   
    </Routes>
    <Footer />
     </Box>
  )
}

export default App


