import { createSlice } from "@reduxjs/toolkit";

export const pwiSlice = createSlice({
  name: "pwi",
  initialState: {
    pwi: null,
  },
  reducers: {
    addpwi: (state, { payload }) => {
      state.pwi.push(payload);
    },
  },
});

export const { addpwi } = pwiSlice.actions;
export default pwiSlice.reducer;
