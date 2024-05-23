import React, { useState } from 'react'
import UserServices from '../Services/UserService'
import  { Navigate }  from 'react-router-dom';


const userService = new UserServices();

export default function ProtectedRoutesUser({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const isLogged = async() => {
        const statusLogin = await userService.userAutheticatedUser();
        setIsAuthenticated(statusLogin)
    }

    isLogged();
    
    return isAuthenticated ? children : <Navigate to="/login"/>
}