import { Button } from "@mui/material";
import React from "react";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import { NavLink } from "react-router-dom";

import "./../Styles/drawer.css";

export default function DrawerSlide({ Title }) {
  const navTitle = ["Stock Management", "Live Sale"];

  function changeTitle(title) {
    console.log(title);
    Title(title);
  }

  return (
    <div className="DrawContainer">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "slidebtn active" : "slidebtn"
        }
        onClick={() => changeTitle(navTitle[0])}
      >
        <ManageAccountsOutlinedIcon />
        <span className="btnText">{navTitle[0]}</span>
      </NavLink>

      <NavLink
        to="/live"
        className={({ isActive }) =>
          isActive ? "slidebtn active" : "slidebtn"
        }
        onClick={() => changeTitle(navTitle[1])}
      >
        <ManageAccountsOutlinedIcon />
        <span className="btnText">{navTitle[1]}</span>
      </NavLink>
    </div>
  );
}
