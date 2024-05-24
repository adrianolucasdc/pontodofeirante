import React, { useState } from 'react'
import UserServices from '../Services/UserService'
import  { Navigate }  from 'react-router-dom';



const userService = new UserServices();

export default async function ProtectedRoutesUser({ children }) {
    const isAuthenticated = await userService.userAutheticatedUser();
    return isAuthenticated  ? children : <Navigate to="/login"/>
}