import { createSlice } from "@reduxjs/toolkit";

export const likescommentSlice = createSlice({
  name: "likescomment",
  initialState: {
    likescomment: null,
  },
  reducers: {
    addlikescomment: (state, { payload }) => {
      state.likescomment.push(payload);
    },
  },
});

export const { addlikescomment } = likescommentSlice.actions;
export default likescommentSlice.reducer;
