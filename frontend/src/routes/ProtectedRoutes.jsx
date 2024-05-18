import React from 'react'
import UserServices from '../Services/UserService'
import RoutesApp from '.';

const userService = new UserServices();

export default function ProtectedRoutes({children}) {
    const usuarioAutenticado = userService.usuarioAutenticado();
    return usuarioAutenticado? children : <RoutesApp/>
}