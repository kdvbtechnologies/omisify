import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
  },
  reducers: {
    setPosts: (state, { payload }) => {
      state.posts = payload;
    },

    addPosts: (state, { payload }) => {
      state.posts.push(payload);
    },
  },
});

export const { setPosts, addPosts } = postsSlice.actions;
export default postsSlice.reducer;
