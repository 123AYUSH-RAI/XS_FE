import React, { useEffect, useState } from 'react'
import { getUserInfo, isLoggedIn } from '../utils/auth/getUserInfo'

import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Login from './Auth/Login';
import Properties from './Properties';
import Recommendations from './Reccomendation';
import Header from './Header';

function Home() {
  const login = isLoggedIn()
  const navigate = useNavigate()
  
  if(!login)  navigate("/login")

   
return (
  <>
  <Header />
  <Properties/>
  <Recommendations />
 
  </>
)  

  
}

export default Home