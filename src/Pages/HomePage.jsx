import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Dashboard from "./product/Dashboard";
import { Route, Routes } from "react-router-dom";
import LiveSale from "./liveSale/LiveSale";
import DrawerSlide from "../Components/DrawerSlide";
import { Box } from "@mui/material";
// import { Route,Routes,BrowserRouter,RouterProvider } from 'react-router-dom'

function HomePage() {
  const [navtitle, setNavtitle] = useState("Stock Management");

  // recieve from drawer
  function getTitle(title) {
    console.log("nav", title);
    setNavtitle(title);
  }

  return (
    <div>
      <Navbar title={navtitle} />
      <div className="dashboardContainer">
        <Box component="div" sx={{ display: { xs: "none", md: "block" } }}>
          <DrawerSlide Title={getTitle} />
        </Box>
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="/live" element={<LiveSale />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
