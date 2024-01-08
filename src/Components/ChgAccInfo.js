import React from "react";
import Grid from "@mui/material/Grid";
import LiveCodeLogo from "./../assets/images/logo.png";
import ChangeAccInfo from "./../assets/images/change_account_info.png";
import { Box } from "@mui/material";
import "./../Styles/auth.css";

export default function ChgAccInfo() {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <img src={LiveCodeLogo} alt="live_code_logo" className="logo" />
        </Grid>
        <Grid item xs={2}>
          <img
            src={ChangeAccInfo}
            alt="live_code_logo"
            className="changeAccInfo"
          />
        </Grid>
        <Grid item xs={2}>
          <p className="textheader">Change User Name & Password</p>
        </Grid>
        <Grid item xs={12}>
          <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
            <p className="textbody">
              You can change your user name & password as you prefer.
              <br /> Or if you dont want to change now , it perfectly fine..
              <br />
              You can later change it in your {""}
              <span style={{ fontWeight: "bold" }}>
                profile setting &gt; security feature
              </span>
            </p>
          </Box>
          <Box component="div" sx={{ display: { xs: "block", sm: "none" } }}>
            <p className="textbody">
              You can change your user name &<br /> password as you prefer.
              <br /> Or if you dont want to change now ,<br /> it perfectly
              fine..
              <br />
              You can later change it in your <br />
              <span style={{ fontWeight: "bold" }}>
                profile setting &gt; security feature
              </span>
            </p>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
