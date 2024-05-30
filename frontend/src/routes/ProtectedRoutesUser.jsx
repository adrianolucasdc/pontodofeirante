import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user';


export default function ProtectedRoutesUser({ children }) {
    const { isAuthenticated, updateToken} = useContext(UserContext)
    updateToken();
    return isAuthenticated ? children : <Navigate to="/login" />;
}
