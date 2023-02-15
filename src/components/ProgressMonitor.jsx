import React from "react";
import { Grid, Box } from "@mui/material";
import Tasks from "../widgets/Tasks";
import AddTasks from "../widgets/TaskControls";

export default function ProgressMonitor() {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tasks />
        </Grid>
      </Grid>
    </Box>
  );
}
