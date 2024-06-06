import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/user';


export default function ProtectedRoutesUser({ children }) {
    const { isAuthenticatedStore, updateToken} = useContext(UserContext)
    updateToken();
    return isAuthenticatedStore ? children : <Navigate to="/sua_loja_login" />;
}
