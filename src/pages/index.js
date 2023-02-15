import Head from "next/head";
import ProgressMonitor from "../components/ProgressMonitor";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Link,
  Fab,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kiutra Coding Assignment</title>
        <meta name="description" content="Progress Monitor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static" sx={{ backgroundColor: "#1c1c1c" }}>
        <Toolbar>
          <Typography variant="h6">
            Progress Monitor by Sathwik Amburi
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            href="https://github.com/Sathwik-Amburi/kiutra-coding-assignment"
            target="_blank"
            rel="noopener"
          >
            <GitHub />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h4" align="center">
          Progress Monitor
        </Typography>
      </Box>

      <div>
        <ProgressMonitor />
      </div>

      <Box sx={{ position: "fixed", bottom: "2rem", right: "2rem" }}>
        <Fab
          color="secondary"
          aria-label="GitHub Repo"
          href="https://github.com/Sathwik-Amburi/kiutra-coding-assignment"
          target="_blank"
          rel="noopener"
        >
          <GitHub />
        </Fab>
      </Box>
    </>
  );
}
