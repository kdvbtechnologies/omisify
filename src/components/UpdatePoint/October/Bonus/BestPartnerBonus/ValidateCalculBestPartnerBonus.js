import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../../Partenaire Omisify/Loader";

export default function ValidateCalculBestPartnerBonus() {
  const [isLoading, setIsLoading] = useState(false);
  const statusbestpartnerbonus = "NO";
  const getnumberdaysbestpartnerbonusenteradmin = "0";

  const numberdaysbestpartnerbonusenteradmin = localStorage.getItem(
    "https://omisify.com/numberdaysbestpartnerbonusenteradmin"
  );

  const numberdaysbestpartnerbonusenteruser = localStorage.getItem(
    "https://omisify.com/numberdaysbestpartnerbonusenteruser"
  );

  const bestpartnerbonus = localStorage.getItem(
    "https://omisify.com/resultbestpartnerbonus"
  );

  const getdate = new Date();
  const date = getdate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const pointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");

  const userId = localStorage.getItem("https://omisify.com/userId");

  async function Validate() {
    setIsLoading(true);

    if (
      numberdaysbestpartnerbonusenteradmin ===
      numberdaysbestpartnerbonusenteruser
    ) {
      console.log("success bestpartnerbonus");

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
        data: {
          bestpartnerbonus,
          pointtlife,
          gaintlife,

          statusbestpartnerbonus,
          numberdaysbestpartnerbonusenteradmin:
            getnumberdaysbestpartnerbonusenteradmin,

          date,
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      window.location = "/validate-best-partner-bonus-success";
    } else {
      console.log("error bestpartnerbonus");
      window.location = "/validate-best-partner-bonus-error";
    }
  }

  return (
    <>
      <div className="back-btn">
        <NavLink to="/before-calcul-best-partner-bonus">
          <button>Retour</button>
        </NavLink>
      </div>

      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>

      <div className="validate-calcul-comment">
        <div className="title">
          <p>Résultats</p>
        </div>

        <div className="a">
          <div className="date">
            <p>Option : Bonus EP</p>
            <p>{date}</p>
          </div>

          <div className="shrink-border">
            <div className="border">
              {bestpartnerbonus ? (
                <>
                  <p>Bonus EP : {bestpartnerbonus} point(s)</p>
                  <p>Total des Points : {pointtlife} point(s)</p>
                  <p>Gains : {gaintlife}€</p>
                </>
              ) : (
                <>
                  <p></p>
                </>
              )}
            </div>
          </div>

          <div className="go-down-i">
            <div className="b">
              <i>
                Avant de cliquer sur Valider, vérifier que les résultats de
                votre travail affichés sur cette page sont conformes à ce que
                vous avez calculés
              </i>
            </div>

            <div className="b">
              <i>
                Si les résultats ne sont pas correct, cliquer{" "}
                <NavLink
                  className="navlink"
                  to="/before-calcul-best-partner-bonus"
                >
                  ici
                </NavLink>{" "}
                pour reprendre les calculs ou{" "}
                <NavLink className="navlink" to="/partner-contact">
                  contacter
                </NavLink>{" "}
                le service partenaire pour obtenir de l'aide
              </i>
            </div>
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="c">
              <p>Cliquer sur valider pour actualiser vos points</p>
            </div>
            <button onClick={Validate}>Valider</button>
          </>
        )}
      </div>
    </>
  );
}
