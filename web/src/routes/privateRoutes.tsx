import React, { useContext } from 'react'
import { UserContext } from '../contexts/user'
import { User } from '../types/user'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    const { signed } = useContext(UserContext) as User;
    return signed ? <Outlet /> : <Navigate to='/signin' />

}

export default PrivateRoutes