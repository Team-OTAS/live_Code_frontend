import { Button } from "@mui/material";
import React from "react";
import "./../Styles/drawer.css";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

export default function DrawerSlide() {
  return (
    <div className="DrawContainer">
      <Button size="large" color="primary" variant="contained">
        <ManageAccountsOutlinedIcon />
        <span className="btnText">Stock Management</span>
      </Button>
    </div>
  );
}
