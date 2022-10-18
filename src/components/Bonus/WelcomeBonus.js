import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../../feature/posts.slice";
import Loader from "../Partenaire Omisify/Loader";

export default function WelcomeBonus() {
  const navigate = useNavigate();
  const [codewelcomementor, setcodewelcomementor] = useState("");
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();

    const data = {
      codewelcomementor,
      userId,
      shortname,
      partnername,
    };

    await axios
      .post(
        //`${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addPosts(data));
      })
      .catch((err) => console.log(err));
    window.location = "/after-welcome-bonus";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="welcome-bonus">
        <div className="title">
          <li>Bonus de Bienvenue</li>
        </div>
        <div className="a">
          <p>
            Le Bonus de Bienvenue de 100 points est offert une seule fois à
            chaque nouveau arivant après avoir entrer le Code de Bienvenue de
            son mentor
          </p>
          <p>Entrer le Code de Bienvenue de votre mentor</p>
          <input
            type="text"
            placeholder="Code du mentor"
            value={codewelcomementor}
            onChange={(e) => setcodewelcomementor(e.target.value)}
            name="codewelcomementor"
          />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button onClick={Validate}>Demander le Bonus de Bienvenue</button>
          </>
        )}
      </div>
    </div>
  );
}
