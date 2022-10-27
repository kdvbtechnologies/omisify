import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";
import { useState } from "react";

export default function ValidateCalculComment() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const newnumbercommententeradmin = 0;
  const statuscomment = "NO";

  const date = new Date();
  console.log(date);

  //const userId = localStorage.getItem("https://omisify.com/userId");

  /* premierement on recupere le pointtcommentlife (et les autres) qu'on avait sauvegardé 
  dans le localStorage 

  ensuite pour le pointtcommentlife
  on effectue une verification, pour la validation automatique
  si le nombre de comment qu'il a rentrer correspond au nombre de comment que l'admin
  avait rentrer alors la validation sera reussie sinon la validation sera impossible
  
  validation reussie = total envoyé et mis a jour sur le profil de l'utilisateur

  pour le gaintlife
  on met directement gaintlife au niveau de data pour etre pret a envoyé

  */
  const pointtcommentlife = localStorage.getItem(
    "https://omisify.com/resultpointtcommentlife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();
    const numbercommententeradmin = localStorage.getItem(
      "https://omisify.com/numbercommententeradmin"
    );

    let getnewnumber = localStorage.getItem("https://omisify.com/newnumber");
    console.log(getnewnumber);

    if (getnewnumber === numbercommententeradmin) {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/634c8ab0f59d4e9994f83884`,
        data: {
          pointtcommentlife,
          numbercommententeradmin: newnumbercommententeradmin,
          statuscomment,

          gaintlife,
          date,
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      // validation reussie
      window.location = "/validate-comment-success";
    } else {
      // validation impossible
      window.location = "/validate-comment-error";
    }
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
      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>
      <div className="update-comment">
        <div className="title">
          <p>Résultats</p>
        </div>

        <div className="a">
          <div className="b">
            <p>Option : Commentaire</p>
            <p>Cliquer sur Valider pour actualiser vos points</p>
          </div>
        </div>
      </div>
      <div className="calcul-comment">
        <div className="a">
          {pointtcommentlife && (
            <p>Commentaire(s) : {pointtcommentlife} points</p>
          )}
        </div>

        <div className="c">
          <i>
            Avant de cliquer sur Valider, vérifier que les résultats de votre
            travail affichés sur cette page sont conformes à ce que vous avez
            calculés
          </i>
        </div>

        <div className="c">
          <i>
            Si les résultats ne sont pas correct, cliquer{" "}
            <NavLink className="navlink" to="/calcul-comment">
              ici
            </NavLink>{" "}
            pour reprendre les calculs ou{" "}
            <NavLink className="navlink" to="/partner-contact">
              contacter
            </NavLink>{" "}
            le service partenaire pour obtenir de l'aide
          </i>
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
  );
}
