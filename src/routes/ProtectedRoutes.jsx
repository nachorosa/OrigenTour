import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoutes = ({isLogin}) => {
  return (
    isLogin ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoutes