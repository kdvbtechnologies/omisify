import CommentI from "./More/CommentI";
import ShareI from "./More/ShareI";
import AfterShareI from "./More/AfterShareI";
import Footer from "../Footer";
import LikeI from "./More/LikeI";
import { useNavigate } from "react-router-dom";

export default function Influencer() {
  const navigate = useNavigate();

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>

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
