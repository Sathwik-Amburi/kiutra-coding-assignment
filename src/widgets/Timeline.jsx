import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Typography, Box, Button, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useSelector } from "react-redux";
import moment from "moment";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function TimelineComponent() {
  const { taskItems } = useSelector((state) => state.tasks);
  const handleTaskClick = (task) => {
    console.log(task);
  };
  return (
    <>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="h4" align="center">
          Task Timeline
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {taskItems.map((task) => (
            <TimelineItem key={task.id}>
              <TimelineOppositeContent>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                  onClick={() => handleTaskClick(task)}
                >
                  <b>Date: </b> {moment(task.id).format("MMMM Do, YYYY")}
                </Box>
                {task.status === "Not Started" ? (
                  <NotStartedIcon sx={{ color: "red", fontSize: 40 }} />
                ) : task.status === "In Progress" ? (
                  <QueryBuilderIcon sx={{ color: "orange", fontSize: 40 }} />
                ) : (
                  <TaskAltIcon sx={{ color: "green", fontSize: 40 }} />
                )}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <AccessTimeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid #ccc",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                  onClick={() => handleTaskClick(task)}
                >
                  <Typography variant="h6" component="h3">
                    {task.Task}
                  </Typography>
                  <Typography variant="body1">{task.description}</Typography>
                  <Typography variant="body2">{task.status}</Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </>
  );
}
