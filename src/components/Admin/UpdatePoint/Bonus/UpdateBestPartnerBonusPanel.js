import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UpdateBestPartnerBonusPanel() {
  const navigate = useNavigate();

  const getnumberdaysbestpartnerbonusenteradmin = "1";
  const statusbestpartnerbonus = "YES";

  const [
    numberdaysbestpartnerbonusenteradmin,
    setnumberdaysbestpartnerbonusenteradmin,
  ] = useState(getnumberdaysbestpartnerbonusenteradmin);

  const [userId, setUserId] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Validate() {
    setIsLoading(true);

    const save = localStorage.setItem(
      "https://omisify.com/numberdaysbestpartnerbonusenteradmin",
      numberdaysbestpartnerbonusenteradmin
    );
    console.log(save);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        statusbestpartnerbonus,
        numberdaysbestpartnerbonusenteradmin,
      },
    })
      .then((res) => {
        console.log(res);
        const getnumberdaysbestpartnerbonusenteradmin = localStorage.getItem(
          "https://omisify.com/numberdaysbestpartnerbonusenteradmin"
        );

        const name = res.data.name;
        if (name) {
          setSuccess(
            `${getnumberdaysbestpartnerbonusenteradmin} jour(s) de Bonus EP ajouté(s) avec succès à ${name}`
          );
        }
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }

  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="new-comment-panel">
        <div className="title">
          <p>Bonus d'Excellent Partenaire</p>
        </div>

        <div className="align">
          <div className="a">
            <p>Entrer le userId</p>
            <input
              type="text"
              placeholder="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              name="userId"
            />
          </div>

          <p>Entrer le nombre de jour(s) travaillé(s)</p>

          <select
            value={numberdaysbestpartnerbonusenteradmin}
            onChange={(e) =>
              setnumberdaysbestpartnerbonusenteradmin(e.target.value)
            }
            name="numberdaysbestpartnerbonusenteradmin"
          >
            <option value="1">1 jour</option>
            <option value="2">2 jours</option>
            <option value="3">3 jours</option>
            <option value="4">4 jours</option>
            <option value="5">5 jours</option>
            <option value="6">6 jours</option>
            <option value="7">7 jours</option>
          </select>

          <div className="success">
            <p>{success}</p>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Validate}>Valider</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
