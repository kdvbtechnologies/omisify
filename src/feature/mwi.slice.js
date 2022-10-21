import { createSlice } from "@reduxjs/toolkit";

export const mwiSlice = createSlice({
  name: "mwi",
  initialState: {
    mwi: null,
  },
  reducers: {
    addmwi: (state, { payload }) => {
      state.mwi.push(payload);
    },
  },
});

export const { addmwi } = mwiSlice.actions;
export default mwiSlice.reducer;
