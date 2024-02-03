import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { Box, Button, Grid } from "@mui/material";
import "./../Styles/dashboard.css";
import DataTable from "../Components/DataTable";
import DrawerSlide from "../Components/DrawerSlide";
import AddStock from "../Components/AddStock";
import EditStock from "../Components/EditStock";
import ViewStock from "../Components/ViewStock";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "./../redux/features/productdeleteSlice";
import SuccessBox from "../Components/successBox";
import AlertBox from "../Components/AlertBox";

export default function AdminDashBoard() {
  const dispatch = useDispatch();
  const deletes = useSelector((state) => state.deleteproduct);
  const [DeleteData, setDeleteData] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  console.log(process.env.REACT_APP_API_BASE_URL);

  const handleDataFromTable = (data) => {
    setDeleteData(data);
    DeleteData.length > 0 ? setIsDisabled(true) : setIsDisabled(false);
  };

  function deleteHandleClick() {
    const data = {
      productIds: DeleteData,
    };
    dispatch(deleteProduct(data));
    setIsDisabled(true);
  }

  return (
    <div>
      <div className="dashboardContainer">
        <Box component="div" sx={{ display: { xs: "none", md: "block" } }}>
          <DrawerSlide />
        </Box>

        <div className="dashboardContent">
          {/* nav bar */}
          <Box>
            <Grid className="barContainer">
              <Link to="/addstock">
                <Button size="large" color="primary" variant="contained">
                  <PersonAddAlt1OutlinedIcon />
                  <span className="btnText">Add New Stock</span>
                </Button>
              </Link>
              <Button
                size="large"
                color="primary"
                variant="contained"
                sx={{ marginLeft: "10px" }}
                disabled={isDisabled}
                onClick={deleteHandleClick}
              >
                <PersonAddAlt1OutlinedIcon />
                <span className="btnText">Remove Stock</span>
              </Button>
            </Grid>
          </Box>
          {/* content area  */}
          <Box>
            <Routes>
              <Route path="/addstock" element={<AddStock />} />
              <Route
                path="/"
                element={
                  <DataTable sendDataToDashboard={handleDataFromTable} />
                }
              />
              <Route path="/editstock/:id" element={<EditStock />} />
              <Route path="/viewstock/:id" element={<ViewStock />} />
            </Routes>
          </Box>
          {!deletes.loading && deletes.deletes.status === "success" ? (
            <SuccessBox message={deletes.deletes.message} />
          ) : null}
          {!deletes.loading && deletes.error ? (
            <AlertBox message={deletes.error} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
