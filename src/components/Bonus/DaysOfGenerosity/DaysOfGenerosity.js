import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";

export default function DaysOfGenerosity() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const navigate = useNavigate();
  const [generositydays, setGenerosityDays] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Save() {
    setIsLoading(true);
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        generositydays,
      },
    })
      .then((res) => {
        console.log(res);
        const generositydays = res.data.generositydays;
        if (generositydays) {
          localStorage.setItem(
            "https://omisify.com/generositydays",
            generositydays
          );
        }
      })
      .catch((err) => console.log(err));
    //window.location = "/days-of-generosity-success";
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
          <li>Journées de Générosité</li>
        </div>

        <div className="a">
          <p>
            Les journées de générosité sont une forme de bonus qui concernent 2
            jours dans la semaine. Les points que le Partenaire gagnent pendant
            les journées de générosité sont multipliés par 10
          </p>
          <p>Choisissez vos journées de générosité</p>
          <select
            id="generosity-days"
            value={generositydays}
            onChange={(e) => setGenerosityDays(e.target.value)}
          >
            <option value="Lundi et Jeudi">Lundi et Jeudi</option>
            <option value="Mardi et Vendredi">Mardi et Vendredi</option>
            <option value="Mercredi et Samedi">Mercredi et Samedi</option>
            <option value="Jeudi et Dimanche">Jeudi et Dimanche</option>
            <option value="Vendredi et Lundi">Vendredi et Lundi</option>
            <option value="Samedi et Mardi">Samedi et Mardi</option>
            <option value="Dimanche et Mercredi">Dimanche et Mercredi</option>
          </select>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button onClick={Save}>Sauvegarder</button>
          </>
        )}
      </div>
    </div>
  );
}
