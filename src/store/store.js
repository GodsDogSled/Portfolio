import { configureStore } from "@reduxjs/toolkit";

import projectDataReducer from "../features/projectsSlice";

export const store = configureStore({
  reducer: {
    project: projectDataReducer,
  }
})