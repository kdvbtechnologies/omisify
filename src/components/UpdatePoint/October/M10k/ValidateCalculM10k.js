import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function ValidateCalculM10k() {
  const statusm10k = "NO";
  const newnumberm10kenteradmin = "0";
  const [isLoading, setIsLoading] = useState(false);

  const userId = localStorage.getItem("https://omisify.com/userId");

  const resultpointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  const getdate = new Date();
  const date = getdate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  /*
  const getdate
  const dateseenbyuser
*/

  const pointtm10klife = localStorage.getItem(
    "https://omisify.com/resultpointtm10klife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");
  const pointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  const getnewnumber = localStorage.getItem("https://omisify.com/newnumber");
  const numberm10kenteradmin = localStorage.getItem(
    "https://omisify.com/numberm10kenteradmin"
  );

  const generositydaysbonus = localStorage.getItem(
    "https://omisify.com/resultgenerositydaysbonus"
  );

  const suggestgdb = localStorage.getItem("https://omisify.com/suggestgdb");
  const gdb = localStorage.getItem("https://omisify.com/gdb");

  async function Validate() {
    setIsLoading(true);
    if (numberm10kenteradmin === getnewnumber) {
      console.log("m10k success");

      if (gdb === suggestgdb) {
        console.log("yes gdb");

        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatem10k/${userId}`,
          data: {
            pointtm10klife,

            pointtlife,
            gaintlife,

            statusm10k,
            numberm10kenteradmin: newnumberm10kenteradmin,
            date,

            generositydaysbonus,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-m10k-success";
      } else {
        console.log("not gdb");

        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatem10k/634c8ab0f59d4e9994f83884`,
          data: {
            pointtm10klife,

            pointtlife,
            gaintlife,

            statusm10k,
            numberm10kenteradmin: newnumberm10kenteradmin,
            date,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-m10k-success";
      }
    } else {
      console.log("m10k error");
      window.location = "/validate-m10k-error";
    }
  }

  return (
    <>
      <div className="back-btn">
        <NavLink to="/before-calcul-m10k">
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
            <p>Option : M10k</p>
            <p>{date}</p>
          </div>

          <div className="shrink-border">
            <div className="border">
              {pointtm10klife ? (
                <>
                  <p>M10k : {pointtm10klife} point(s)</p>
                  <p>Total des Points : {resultpointtlife} point(s)</p>
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
                <NavLink className="navlink" to="/before-calcul-m10k">
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
