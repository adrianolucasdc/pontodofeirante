import React from 'react'
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import UserProvider from './contexts/user';


export default function App() {
  return (
    <div className=" h-screen w-full">
      <BrowserRouter>
        <UserProvider>
          <RoutesApp />
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}