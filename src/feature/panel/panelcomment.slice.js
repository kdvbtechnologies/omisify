import { createSlice } from "@reduxjs/toolkit";

export const panelcommentSlice = createSlice({
  name: "panelcomment",
  initialState: {
    panelcomment: null,
  },
  reducers: {
    setApi: (state, { payload }) => {
      state.panelcomment = payload;
    },
  },
});

export const { setApi } = panelcommentSlice.actions;
export default panelcommentSlice.reducer;
