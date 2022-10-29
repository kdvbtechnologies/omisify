import LikeI from "./More/LikeI";
import CommentI from "./More/CommentI";
import ShareI from "./More/ShareI";
import AfterShareI from "./More/AfterShareI";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";

export default function Influencer() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      <div className="back-btn">
        <NavLink to="/signup">
          <button>Retour</button>
        </NavLink>
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
