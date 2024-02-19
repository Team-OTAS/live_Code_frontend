import { Box, Grid } from "@mui/material";
import React from "react";
import LiveDataTable from "../../Components/liveSale/LiveDataTable";
import FbLive from "../../Components/liveSale/FbLive";

function LiveSale() {
  return (
    <div>
      <Box>
        <Grid sx={{ padding: "0 10px" }}>
          <LiveDataTable />
          {/* <FbLive /> */}
        </Grid>
      </Box>
    </div>
  );
}

export default LiveSale;
