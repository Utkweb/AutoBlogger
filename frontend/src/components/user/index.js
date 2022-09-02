import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../main/Header';

const User = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default User;