import React from "react";

import { Outlet, Navigate } from "react-router-dom";
import { DataContext } from "../api/context";

const ProtectedRoutes = () => {
  const userId = localStorage.getItem('userId')
  return (
    userId != null ? <Outlet/> : <Navigate to='/'/>
  )
}

export default ProtectedRoutes
