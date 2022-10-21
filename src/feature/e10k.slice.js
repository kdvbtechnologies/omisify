import { createSlice } from "@reduxjs/toolkit";

export const e10kSlice = createSlice({
  name: "e10k",
  initialState: {
    e10k: null,
  },
  reducers: {
    adde10k: (state, { payload }) => {
      state.e10k.push(payload);
    },
  },
});

export const { adde10k } = e10kSlice.actions;
export default e10kSlice.reducer;
