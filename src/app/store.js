import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/posts.slice";
import infosReducer from "../feature/infos.slice";
import commentReducer from "../feature/comment.slice";
import panelcommentReducer from "../feature/panel/panelcomment.slice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    infos: infosReducer,
    comment: commentReducer,

    // panel
    panelcomment: panelcommentReducer,
  },
});
