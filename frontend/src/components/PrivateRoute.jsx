import { Navigate,Outlet }  from 'react-router-dom'
import {useSelector} from 'react-redux'

import React from 'react'

const PrivateRoute = () => {
    console.log("Enter Me");
    
    const {userInfo} = useSelector((state)=>state.auth)
  return userInfo ?  <Outlet/> : <Navigate to='/login'/> 
}

export default PrivateRoute