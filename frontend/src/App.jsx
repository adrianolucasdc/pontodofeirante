import React from 'react'
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";


export default function App() {
  return (
    <div className=" h-screen w-full">
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  )
}