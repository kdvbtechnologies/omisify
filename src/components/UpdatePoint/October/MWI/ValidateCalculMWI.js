import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function ValidateCalculMWI() {
  const [isLoading, setIsLoading] = useState(false);
  const statusmwi = "NO";
  const getnumbermwienteradmin = "0";
  const suggestgdb = "10";
  const generositydaysbonus = localStorage.getItem(
    "https://omisify.com/resultgenerositydaysbonus"
  );
  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const getdate = new Date();
  const date = getdate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const newnumber = localStorage.getItem("https://omisify.com/newnumber");
  const numbermwienteradmin = localStorage.getItem(
    "https://omisify.com/numbermwienteradmin"
  );

  const pointtmwilife = localStorage.getItem(
    "https://omisify.com/resultpointtmwilife"
  );

  const pointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");

  const userId = localStorage.getItem("https://omisify.com/userId");

  async function Validate() {
    setIsLoading(true);

    if (numbermwienteradmin === newnumber) {
      console.log("mwi success");

      if (gdb === suggestgdb) {
        console.log("yes gdb");

        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatemwi/${userId}`,
          data: {
            pointtmwilife,
            pointtlife,
            gaintlife,

            statusmwi,
            numbermwienteradmin: getnumbermwienteradmin,
            generositydaysbonus,
            date,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-mwi-success";
      } else {
        console.log("no gdb");

        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatemwi/${userId}`,
          data: {
            pointtmwilife,
            pointtlife,
            gaintlife,
            date,

            statusmwi,
            numbermwienteradmin: getnumbermwienteradmin,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-mwi-success";
      }
    } else {
      console.log("error mwi");
      window.location = "/validate-mwi-error";
    }
  }

  return (
    <>
      <div className="back-btn">
        <NavLink to="/before-calcul-mwi">
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
            <p>Option : MWI</p>
            <p>{date}</p>
          </div>

          <div className="shrink-border">
            <div className="border">
              {pointtmwilife ? (
                <>
                  <p>MWI : {pointtmwilife} point(s)</p>
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
                <NavLink className="navlink" to="/before-calcul-mwi">
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
