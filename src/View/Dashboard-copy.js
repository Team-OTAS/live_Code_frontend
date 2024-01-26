import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { Box, Button, Container, Grid } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
import "./../Styles/dashboard.css";
// import CreateShop from "../Components/CreateShop";
import DataTable from "../Components/DataTable";
import DrawerSlide from "../Components/DrawerSlide";
import AddStock from "../Components/AddStock";
import EditStock from "../Components/EditStock";
// import CreateComplete from "../Components/CompleteCreateShop";
// import AlertMessage from "../Components/AlertMessage";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(1),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

export default function AdminDashBoardCopy() {
  // const dispatch = useDispatch();
  // const isModalOpen = useSelector((state) => state.modal);
  // const alert = useSelector((state) => state.alert);
  // console.log("alert", alert.isOpen);
  // console.log(isModalOpen.modalA);

  // const handleClickOpen = () => {
  //   dispatch(openModalA());
  // };
  // const handleClose = () => {
  //   dispatch(closeModalA());
  // };
  return (
    <div>
      <div className="dashboardContainer">
        <Box component="div" sx={{ display: { xs: "none", md: "block" } }}>
          <DrawerSlide />
        </Box>
        <div className="dashboardContent">
          <Container>
            <Grid className="barContainer">
              {/* <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Shop"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Button
              size="large"
              color="primary"
              variant="contained"
              sx={{ marginX: "10px" }}
            >
              <TuneOutlinedIcon />
              <span className="btnText">Life Span Filter</span>
            </Button> */}
              <Button size="large" color="primary" variant="contained">
                <PersonAddAlt1OutlinedIcon />
                <span className="btnText">Add New Shop</span>
              </Button>
            </Grid>
          </Container>
          {/* <DataTable /> */}
          {/* <AddStock /> */}
          <EditStock />
        </div>
      </div>
    </div>
  );
}
