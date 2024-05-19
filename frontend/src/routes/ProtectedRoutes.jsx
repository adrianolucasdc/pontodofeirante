import React from 'react'
import UserServices from '../Services/UserService'
import RoutesApp from '.';

const userService = new UserServices();

export default async function ProtectedRoutes({children}) {
    const userAutheticated = await userService.userAutheticated();
    return userAutheticated? children : <RoutesApp/>
}