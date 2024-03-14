import React from "react";
import Grid from "@mui/material/Grid";
import LiveCodeLogo from "./../assets/images/logo.png";
import FBloginPhoto from "./../assets/images/FBlogin.png";
import { Box } from "@mui/material";
import "./../Styles/auth.css";
// import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";

export default function FBloginPage() {
  const componentClicked = (data) => {
    console.log("data", data);
  };
  const navigate = useNavigate();
  const responseFacebook = (response) => {
    console.log(response.accessToken);
    if (response.accessToken) {
      console.log("Facebook Access Token is get");
      navigate("/setupshopstepperpage");
    }
  };
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
              src={FBloginPhoto}
              alt="live_code_logo"
              className="changeAccInfo"
            />
          </Grid>
          <Grid item xs={2}>
            {/* for desktop users */}
            <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
              <p className="textheader">
                Connect With Facebook Admin Account <br />
                to Use Live Code
              </p>
            </Box>
            {/* for mobile users */}
            <Box component="div" sx={{ display: { xs: "block", sm: "none" } }}>
              <p className="textheader">
                Connect With Facebook
                <br /> Admin Account <br />
                to Use Live Code
              </p>
            </Box>
          </Grid>
          <Grid item xs={12}>
            {/* for desktop users */}
            <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
              <p className="textbody">
                Connect your Facebook admin account with live code to <br />{" "}
                access your Facebook page and manage your live sales.
              </p>
            </Box>
            {/* for mobile users */}
            <Box component="div" sx={{ display: { xs: "block", sm: "none" } }}>
              <p className="textbody">
                Connect your Facebook admin <br /> account with live code to
                access <br />
                your Facebook page and manage <br /> your live sales.
              </p>
            </Box>
          </Grid>
          {/* <Grid item xs={12}>
            <FacebookLogin
              appId="1361887051360574"
              size="medium"
              autoLoad={true}
              fields="name,email,picture"
              onClick={componentClicked}
              scope="public_profile,pages_show_list,pages_read_engagement"
              callback={responseFacebook}
            />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
}
