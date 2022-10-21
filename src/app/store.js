import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/posts.slice";
import infosReducer from "../feature/infos.slice";
import commentReducer from "../feature/comment.slice";
import e10kReducer from "../feature/e10k.slice";
import emailReducer from "../feature/email.slice";
import likescommentReducer from "../feature/likescomment.slice";
import likespublicationReducer from "../feature/likespublication.slice";
import m10kReducer from "../feature/m10k.slice";
import messageReducer from "../feature/message.slice";
import mwiReducer from "../feature/mwi.slice";
import publicationReducer from "../feature/publication.slice";
import pwiReducer from "../feature/pwi.slice";
import pwpReducer from "../feature/pwp.slice";

// panel
import panelcommentReducer from "../feature/panel/panelcomment.slice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    infos: infosReducer,
    comment: commentReducer,
    e10k: e10kReducer,
    email: emailReducer,
    likescomment: likescommentReducer,
    likespublication: likespublicationReducer,
    m10k: m10kReducer,
    message: messageReducer,
    mwi: mwiReducer,
    publication: publicationReducer,
    pwi: pwiReducer,
    pwp: pwpReducer,

    // panel
    panelcomment: panelcommentReducer,
  },
});
