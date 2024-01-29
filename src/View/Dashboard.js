import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { Box, Button, Container, Grid } from "@mui/material";
import "./../Styles/dashboard.css";
import DataTable from "../Components/DataTable";
import DrawerSlide from "../Components/DrawerSlide";
import AddStock from "../Components/AddStock";
import EditStock from "../Components/EditStock";
import ViewStock from "../Components/ViewStock";

export default function AdminDashBoard() {
  return (
    <div>
      <div className="dashboardContainer">
        <Box component="div" sx={{ display: { xs: "none", md: "block" } }}>
          <DrawerSlide />
        </Box>

        <div className="dashboardContent">
          <Container>
            <Grid className="barContainer">
              <Link to="/addstock">
                <Button size="large" color="primary" variant="contained">
                  <PersonAddAlt1OutlinedIcon />
                  <span className="btnText">Add New Stock</span>
                </Button>
              </Link>
            </Grid>
          </Container>
          <Container>
            <Routes>
              <Route path="/addstock" element={<AddStock />} />
              <Route path="/" element={<DataTable />} />
              <Route path="/editstock" element={<EditStock />} />
              <Route path="/viewstock/:id" element={<ViewStock />} />
            </Routes>
          </Container>
        </div>
      </div>
    </div>
  );
}
