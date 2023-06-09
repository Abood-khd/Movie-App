import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
export default function Layout({userData,setuserData}) {
  let navigate= useNavigate();
  
function logOut(){
  setuserData(null)
  localStorage.removeItem('userToken');
  navigate('/login')
}


  return <>
    <Navbar logOut={logOut} userData={userData} />
    <div className="container">
      <Outlet></Outlet>
    </div>
  </>
}
