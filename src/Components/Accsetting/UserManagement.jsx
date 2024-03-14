import React from "react";
import { Box } from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AccUserTable from "./AccUserTable";

function UserManagement() {
  return (
    <Box>
      <div className="buttonContainer">
        <button className="adduser">
          <span>Add User</span>
          <PersonAddAltOutlinedIcon className="adduserIcon" />
        </button>
      </div>
      <AccUserTable />
    </Box>
  );
}

export default UserManagement;
