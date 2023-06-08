import { configureStore } from "@reduxjs/toolkit";

import projectDataReducer from "../features/projectsSlice";
import cursorTypeReducer from "../features/cursorSlice";

export const store = configureStore({
  reducer: {
    project: projectDataReducer,
    cursor: cursorTypeReducer,
  }

})