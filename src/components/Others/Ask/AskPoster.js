import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";

export default function AskPoster() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [askposter, setAskposter] = useState("");
  const userId = localStorage.getItem("https://omisify.com/userId");
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  async function Send(e) {
    setIsLoading(true);
    e.preventDefault();
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/panel/add`,
      data: {
        askposter,
        userId,
        name,
        partnername,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location = "/ask-poster-success";
  }

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="ask-poster">
        <div className="title">
          <p>Demande d'Affiches</p>
        </div>
        <div className="align-center">
          <p>
            Les affiches sont les images publicitaire des programmes
            d'affiliation utilisées par les Partenaires Omisify pendant leur
            travail
          </p>
          <p>
            Choisissez un programme d'affiliation et cliquer sur Envoyer pour
            faire la demande d'affiches
          </p>
          <select
            id="ask-poster"
            value={askposter}
            onChange={(e) => setAskposter(e.target.value)}
          >
            <option value="Devenir Partenaire Omisify">
              Devenir Partenaire Omisify
            </option>
            <option value="Création de Site internet">
              Création de Site internet
            </option>
          </select>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Send}>Envoyer</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
