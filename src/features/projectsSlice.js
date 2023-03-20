import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: false,
  loaded: false,
}

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectData: (state, action) => {
      state.projects = action.payload;
    },
    setLoaded: (state, action) => {
      state.loaded = action.payload;
    }
  }
})


export const { setProjectData, setLoaded } = projectSlice.actions;

const projectDataReducer = projectSlice.reducer;
export default projectDataReducer;