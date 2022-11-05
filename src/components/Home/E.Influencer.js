import CommentI from "./More/CommentI";
import ShareI from "./More/ShareI";
import AfterShareI from "./More/AfterShareI";
import Footer from "../Footer";
import LikeI from "./More/LikeI";

export default function Influencer() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      <div className="home" style={family}>
        <LikeI />
        <CommentI />
        <ShareI />
        <AfterShareI />
        <Footer />
      </div>
    </>
  );
}
