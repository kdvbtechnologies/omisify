import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: null,
  },
  reducers: {
    addComment: (state, { payload }) => {
      state.comment.push(payload);
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
