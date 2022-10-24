import ShareI from "./More/ShareI";
import CommentI from "./More/CommentI";
import CommentN from "./More/CommentN";
import E10k from "./More/E10k";
import Email from "./More/Email";
import LikeI from "./More/LikeI";
import LikesC from "./More/LikesC";
import LikesP from "./More/LikesP";
import M10k from "./More/M10k";
import Message from "./More/Message";
import MWI from "./More/MWI";
import Publication from "./More/Publication";
import PWI from "./More/PWI.js";
import PWP from "./More/PWP.js";
import Finish from "./More/Finish";
import ShareN from "./More/ShareN";
import AfterShareI from "./More/AfterShareI";

export default function E() {
  return (
    <>
      <LikeI />
      <CommentI />
      <ShareI />
      <AfterShareI />
      <CommentN />
      <E10k />
      <Email />
      <LikesC />
      <LikesP />
      <M10k />
      <Message />
      <MWI />
      <Publication />
      <PWI />
      <PWP />
      <ShareN />

      <Finish />
    </>
  );
}
