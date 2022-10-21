import { createSlice } from "@reduxjs/toolkit";

export const pwpSlice = createSlice({
  name: "pwp",
  initialState: {
    pwp: null,
  },
  reducers: {
    addpwp: (state, { payload }) => {
      state.pwp.push(payload);
    },
  },
});

export const { addpwp } = pwpSlice.actions;
export default pwpSlice.reducer;
