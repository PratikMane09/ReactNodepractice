import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
    const auth = localStorage.getItem("user")

  return (
    <div>
     {auth? <Outlet/>:<Navigate to='/signup'/>} 
    </div>
  )
}

export default Private
