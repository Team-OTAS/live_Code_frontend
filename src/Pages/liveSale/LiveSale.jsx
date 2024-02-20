import { Box, Grid } from "@mui/material";
import React from "react";
import LiveDataTable from "../../Components/liveSale/LiveDataTable";
import FbLive from "../../Components/liveSale/FbLive";

function LiveSale() {
  return (
    <div>
      <Box>
        <Grid container sx={{ padding: "0 3px" }}>
          <Grid item xs={12} md={9}>
            <LiveDataTable />
          </Grid>
          <Grid item xs={12} md={3}>
            <FbLive />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default LiveSale;
