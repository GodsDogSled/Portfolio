import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shownProjectImage: false,
}

export const hoverImageSlice = createSlice({
  name: "hoverImage",
  initialState,
  reducers: {
    setHoverImage: (state, action) => {
      state.shownProjectImage = action.payload;
    },
  }
})


export const { setHoverImage } = hoverImageSlice.actions;

const hoverImageReducer = hoverImageSlice.reducer;
export default hoverImageReducer;