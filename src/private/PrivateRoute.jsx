import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const isLoggedIn = false;

    if(!isLoggedIn){
        return <Navigate to='/login' />
    }
    else{
        return children;
    }
}

export default PrivateRoute
