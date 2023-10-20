import { configureStore } from "@reduxjs/toolkit";

import projectDataReducer from "../features/projectsSlice";
import cursorTypeReducer from "../features/cursorSlice";
import hoverImageReducer from "../features/hoverImageSlice"

export const store = configureStore({
  reducer: {
    project: projectDataReducer,
    cursor: cursorTypeReducer,
    hoverImage: hoverImageReducer,
  }

})