import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import LiveCodeLogo from "./../assets/images/logo.png";
import ChangeAccInfo from "./../assets/images/change_account_info.png";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import Link from "@mui/material/Link";
import "./../Styles/auth.css";
import { useNavigate } from "react-router-dom";

export default function ChgAccInfoPage() {

  const navigate = useNavigate();

  const handleDoitLater = () =>{
    navigate('/setupshopstepperpage');
    console.log("navigation to fb login work");
  }

  return (
    <>
      <Box sx={{ py: 5 }}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ py: { xs: 3, sm: 0 } }}
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
          {/* ---------Form Start  --------------------------------------------------------*/}
          <Grid item xs={12}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch" },
              }}
            >
              <div className="input-field">
                <TextField
                  id="outlined-error-helper-text"
                  label={
                    <div className="input-field-label">
                      <Person2OutlinedIcon color="primary" />
                      <span>Username</span>
                    </div>
                  }
                  color="primary"
                  size="small"
                />
              </div>
              <div className="input-field">
                <TextField
                  id="outlined-error-helper-text"
                  label={
                    <div className="input-field-label">
                      <PasswordOutlinedIcon color="primary" />
                      <span>Password</span>
                    </div>
                  }
                  color="primary"
                  size="small"
                />
              </div>
            </Box>
          </Grid>
          {/* ---------Form End  --------------------------------------------------------*/}
          <Grid
            item
            xs={2}
            sx={{
              display: { xs: "flex", sm: "block" },
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Button variant="contained" color="primary">
              Change information
            </Button>
            <Button onClick={handleDoitLater}>
              <Link >Do it Later</Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
