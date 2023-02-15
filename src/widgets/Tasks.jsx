import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fab,
} from "@mui/material";
import TaskControls from "./TaskControls";
import { useSelector, useDispatch } from "react-redux";
import { editTask, deleteTask } from "../features/tasks/taskSlice";
import ClearIcon from "@mui/icons-material/Clear";

export default function Tasks() {
  const dispatch = useDispatch();
  const { taskItems } = useSelector((state) => state.tasks);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskId, setTaskId] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setTaskName(task.Task);
    setTaskDescription(task.description);
    setTaskStatus(task.status);
    setTaskId(task.id);
    setOpen(true);
  };

  const handleSaveTask = () => {
    dispatch(
      editTask({
        id: taskId,
        Task: taskName,
        description: taskDescription,
        status: taskStatus,
      })
    );

    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <TaskControls />

      {taskItems.length === 0 ? (
        <Box
          sx={{
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 4,
            textAlign: "center",
            mt: 2,
          }}
        >
          <Typography variant="body1">Please Add a Task</Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {taskItems.map((task) => (
            <Grid item key={task.id} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 2,
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    color="error"
                    aria-label="delete"
                    sx={{
                      position: "absolute", // add absolute positioning to the Fab component
                      top: "-25px", // adjust top position to move the Fab up
                      right: "-25px", // adjust right position to move the Fab to the right
                    }}
                    onClick={() => dispatch(deleteTask(task.id))}
                  >
                    <ClearIcon />
                  </Fab>
                </Box>

                <Box onClick={() => handleTaskClick(task)}>
                  <Box sx={{ borderBottom: "1px solid #ccc", mb: 1, pb: 1 }}>
                    <Typography variant="h6" component="h3">
                      {task.Task}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body1">
                      <b>Description:</b> {task.description}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">{task.status}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
      {selectedTask && (
        <Dialog open={open} onClose={handleCancel}>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please edit the details of the task below:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Task Name"
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="description"
              label="Task Description"
              type="text"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                value={taskStatus}
                label="Status"
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <MenuItem value={"Not Started"}>Not Started</MenuItem>
                <MenuItem value={"In Progress"}>In Progress</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleSaveTask}>Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
