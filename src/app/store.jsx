import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../toolkit/taskSlice";
import modalReducer from "../toolkit/modalSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    modal: modalReducer,
  },
});
