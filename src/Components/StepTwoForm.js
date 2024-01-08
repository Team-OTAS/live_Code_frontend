import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import "./../Styles/auth.css";
import { MultiStepContext } from "../StepContext";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

export default function StepTwoForm() {
  const { setStep } = useContext(MultiStepContext);
  return (
    <>
      <Box>
        <Grid item xs={12}>
          <p className="textheader">Set Up Your Auto Reply Message</p>
        </Grid>
        <Grid item xs={12}>
          {/* for desktop users */}
          <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
            <p className="textbody">
              Set up your page auto reply message <br /> to reply user in a
              minute.
              <br />
              <span style={{ fontSize: "12px" }}>
                (You can change the shop information later in the{" "}
                <span style={{ fontWeight: "bold" }}>
                  profile setting &gt; security feature
                </span>
                )
              </span>
            </p>
          </Box>
          {/* for mobile users */}
          <Box component="div" sx={{ display: { xs: "block", sm: "none" } }}>
            <p className="textbody">
              Set up your page auto reply <br /> message <br /> to reply user in
              a minute.
              <br />
              <span style={{ fontSize: "12px" }}>
                (You can change the shop information later in the <br />
                <span style={{ fontWeight: "bold" }}>
                  profile setting &gt; security feature
                </span>
                )
              </span>
            </p>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form>
            <TextField
              id="outlined-multiline-static"
              label={
                <div className="input-field-label">
                  <SendIcon color="primary" />
                  <span>Auto Reply Message</span>
                </div>
              }
              multiline
              rows={11}
              sx={{ width: "35ch" }}
              color="primary"
            />
          </form>
          <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
            <div className="smartphone">
              <div className="content"></div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setStep("3")}
            sx={{ marginTop: "5px" }}
          >
            Continue The Set Up
          </Button>
        </Grid>
      </Box>
    </>
  );
}