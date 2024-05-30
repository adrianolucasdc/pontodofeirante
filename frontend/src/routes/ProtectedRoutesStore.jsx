import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user';


export default function ProtectedRoutesUser({ children }) {
    const { isAuthenticatedStore, updateToken} = useContext(UserContext)
    updateToken();
    return isAuthenticatedStore ? children : <Navigate to="/login" />;
}
