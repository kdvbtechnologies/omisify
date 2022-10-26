import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";

export default function BestPartnerBonus() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const navigate = useNavigate();
  const [bestpartnerbonus, setbestpartnerbonus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Ask() {
    setIsLoading(true);
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/panel/add`,
      data: {
        bestpartnerbonus,
        userId,
        shortname,
        partnername,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location = "/best-partner-bonus-success";
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
          <li>Bonus d'Excellent Partenaire</li>
        </div>

        <div className="a">
          <p>
            Le Bonus d'Excellent Partenaire de 30 points est offert chaque jour
            à chaque partenaire après avoir terminé sa journée de travail
          </p>

          <p>
            Choisissez la date au cours duquel vous voulez faire la demande du
            Bonus d'Excellent Partenaire
          </p>
          <select
            id="bestpartnerbonus"
            value={bestpartnerbonus}
            onChange={(e) => setbestpartnerbonus(e.target.value)}
          >
            <option value="">Choisir la date</option>
            <option value="26/10/2022">26/10/2022</option>
            <option value="27/10/2022">27/10/2022</option>
            <option value="28/10/2022">28/10/2022</option>
            <option value="29/10/2022">29/10/2022</option>
            <option value="30/10/2022">30/10/2022</option>
            <option value="31/10/2022">31/10/2022</option>
            <option value="01/11/2022">01/11/2022</option>
            <option value="02/11/2022">02/11/2022</option>
            <option value="03/11/2022">03/11/2022</option>
            <option value="04/11/2022">04/11/2022</option>
            <option value="05/11/2022">05/11/2022</option>
            <option value="06/11/2022">06/11/2022</option>
            <option value="07/11/2022">07/11/2022</option>
            <option value="08/11/2022">08/11/2022</option>
            <option value="09/11/2022">09/11/2022</option>
            <option value="10/11/2022">10/11/2022</option>
            <option value="12/11/2022">12/11/2022</option>
            <option value="13/11/2022">13/11/2022</option>
          </select>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button onClick={Ask}>Demander</button>
          </>
        )}
      </div>
    </div>
  );
}
