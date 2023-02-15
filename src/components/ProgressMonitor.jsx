import React from "react";
import { Grid, Box } from "@mui/material";
import Tasks from "../widgets/Tasks";
import TimeLine from "../widgets/Timeline";

export default function ProgressMonitor() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tasks />
        </Grid>
        <Grid item xs={12}>
          <TimeLine />
        </Grid>
      </Grid>
    </Box>
  );
}
