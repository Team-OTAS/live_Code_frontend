import React from "react";
import Navbar from "../Components/Navbar";
import DashboardCopy from "./DashboardCopy";
// import Dashboard from '../Pages/Dashboard'
// import { Route,Routes,BrowserRouter,RouterProvider } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <Navbar />
      <DashboardCopy />
    </div>
  );
}

export default HomePage;
