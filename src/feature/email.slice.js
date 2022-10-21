import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    email: null,
  },
  reducers: {
    addemail: (state, { payload }) => {
      state.email.push(payload);
    },
  },
});

export const { addemail } = emailSlice.actions;
export default emailSlice.reducer;
