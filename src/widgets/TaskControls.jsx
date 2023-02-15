import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fab,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteAllTasks, addTask } from "../features/tasks/taskSlice";

export default function TaskControls() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTask("");
    setDescription("");
  };

  const handleAddTask = () => {
    // TODO: dispatch an action to add the task to the Redux store
    dispatch(
      addTask({
        id: Date.now(),
        Task: task,
        description: description,
        status: status,
      })
    );

    console.log(`Adding task: ${task} - ${description}`);
    handleClose();
  };

  return (
    <>
      <Box
        sx={{
          p: 2,
          cursor: "pointer",
        }}
      >
        <Fab variant="extended" color="secondary" onClick={handleOpen}>
          <AddIcon sx={{ mr: 1 }} />
          Add Task
        </Fab>{" "}
        <Fab
          variant="extended"
          color="secondary"
          onClick={() => dispatch(deleteAllTasks())}
        >
          <DeleteIcon sx={{ mr: 1 }} />
          Delete All Tasks
        </Fab>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            id="task"
            label="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            id="description"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              id="status"
              value={status}
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={"Not Started"}>Not Started</MenuItem>
              <MenuItem value={"In Progress"}>In Progress</MenuItem>
              <MenuItem value={"Completed"}>Completed</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddTask}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
