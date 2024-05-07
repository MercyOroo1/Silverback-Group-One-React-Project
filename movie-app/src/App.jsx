import React, { useEffect }, { useEffect, useState } from 'react'
import Home from './pages/Home/Home'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In!");
        navigate('/');
      } else {
        console.log("Not Logged In!");
        navigate('/login');
      }
    });
  }, []);

  return (
    <div>
      <Home />
      </div>
  )
}

export default App;
