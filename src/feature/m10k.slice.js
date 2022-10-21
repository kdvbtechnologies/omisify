import { createSlice } from "@reduxjs/toolkit";

export const m10kSlice = createSlice({
  name: "m10k",
  initialState: {
    m10k: null,
  },
  reducers: {
    addm10k: (state, { payload }) => {
      state.m10k.push(payload);
    },
  },
});

export const { addm10k } = m10kSlice.actions;
export default m10kSlice.reducer;
