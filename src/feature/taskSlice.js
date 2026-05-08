import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        // User may delete the task if it is done already
        deleteTask: (state, action) => {
            state.splice(action.payload, 1);
        }
    }
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;