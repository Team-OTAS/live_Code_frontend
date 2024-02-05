import React from "react";
import Navbar from "../Components/Navbar";
import Dashboard from "./product/Dashboard";
// import Dashboard from '../Pages/Dashboard'
// import { Route,Routes,BrowserRouter,RouterProvider } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default HomePage;
