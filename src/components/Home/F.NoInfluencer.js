import CommentN from "./More/CommentN";
import E10k from "./More/E10k";
import Email from "./More/Email";
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
import Footer from "../Footer";
import Loader from "../Partenaire Omisify/Loader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NoInfluencer() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  async function Next(e) {
    setIsLoading(true);
    e.preventDefault();
    window.location = "/home-bonus";
  }

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

        <div className="see-more">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Next}>Voir plus</button>
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
