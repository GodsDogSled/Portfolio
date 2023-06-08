import { createSlice } from '@reduxjs/toolkit'

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState: {
    value: "default",
  },
  reducers: {
    changeCursor: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeCursor } = cursorSlice.actions

const cursorTypeReducer = cursorSlice.reducer
export default cursorTypeReducer