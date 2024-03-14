import { Box, Grid } from "@mui/material";
import React from "react";
import LiveDataTable from "../../Components/liveSale/LiveDataTable";
import FbLive from "../../Components/liveSale/FbLiveContainer";

function LiveSale() {
  return (
    <div style={{ width: "100%" }}>
      <Box>
        <Grid container sx={{ padding: "0 3px" }}>
          <Grid item xs={12} md={8}>
            <LiveDataTable />
          </Grid>
          <Grid item xs={12} md={4}>
            <FbLive />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default LiveSale;
