import LikeI from "./More/LikeI";
import CommentI from "./More/CommentI";
import ShareI from "./More/ShareI";
import AfterShareI from "./More/AfterShareI";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export default function Influencer() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");
  const navigate = useNavigate();

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      {userId && shortname && partnername && name ? (
        <>
          <div className="back-btn">
            <button onClick={() => navigate(-1)}>Retour</button>
          </div>
        </>
      ) : (
        <>
          <div className="back-btn">
            <NavLink to="/signup">
              <button>Retour</button>
            </NavLink>
          </div>
        </>
      )}

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
