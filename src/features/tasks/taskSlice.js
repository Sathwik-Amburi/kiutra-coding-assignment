import { createSlice } from "@reduxjs/toolkit";

const tasks = [
  {
    id: Date.now(),
    Task: "Complete Progress Monitor",
    description: "Implment the Progress Monitor",
    status: "Completed",
  },
];

const initialState = {
  taskItems: tasks,
  isLoading: true,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deleteAllTasks: (state) => {
      state.taskItems = [];
    },
    addTask: (state, action) => {
      state.taskItems.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.taskItems = state.taskItems.filter(
        (task) => task.id !== action.payload
      );
    },
    editTask: (state, action) => {
      state.taskItems = state.taskItems.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        } else {
          return task;
        }
      });
    },
  },
});

export default taskSlice.reducer;
export const { deleteAllTasks, addTask, deleteTask, editTask } =
  taskSlice.actions;
