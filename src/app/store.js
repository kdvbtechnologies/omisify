import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/posts.slice";
import infosReducer from "../feature/infos.slice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    infos: infosReducer,
  },
});
