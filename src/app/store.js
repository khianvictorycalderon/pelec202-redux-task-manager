import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../feature/taskSlice';

const store = configureStore({
    reducer: {
        task: taskReducer
    }
});

export default store;