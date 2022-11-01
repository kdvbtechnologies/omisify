import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function ValidateCalculE10k() {
  const [isLoading, setIsLoading] = useState(false);
  const statuse10k = "NO";
  const getnumbere10kenteradmin = "0";
  const suggestgdb = "10";
  const generositydaysbonus = localStorage.getItem(
    "https://omisify.com/resultgenerositydaysbonus"
  );
  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const newnumber = localStorage.getItem("https://omisify.com/newnumber");
  const numbere10kenteradmin = localStorage.getItem(
    "https://omisify.com/numbere10kenteradmin"
  );

  const pointte10klife = localStorage.getItem(
    "https://omisify.com/resultpointte10klife"
  );

  const pointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");

  const userId = localStorage.getItem("https://omisify.com/userId");

  async function Validate() {
    setIsLoading(true);

    if (numbere10kenteradmin === newnumber) {
      console.log("e10k success");

      if (gdb === suggestgdb) {
        console.log("yes gdb");

        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatee10k/${userId}`,
          data: {
            pointte10klife,
            pointtlife,
            gaintlife,

            statuse10k,
            numbere10kenteradmin: getnumbere10kenteradmin,
            generositydaysbonus,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-e10k-success";
      } else {
        console.log("no gdb");

        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatee10k/${userId}`,
          data: {
            pointte10klife,
            pointtlife,
            gaintlife,

            statuse10k,
            numbere10kenteradmin: getnumbere10kenteradmin,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-e10k-success";
      }
    } else {
      console.log("error e10k");
      window.location = "/validate-e10k-error";
    }
  }

  const getdate = new Date();
  const date = getdate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <>
      <div className="back-btn">
        <NavLink to="/before-calcul-e10k">
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
            <p>Option : E10k</p>
            <p>{date}</p>
          </div>

          <div className="shrink-border">
            <div className="border">
              {pointte10klife ? (
                <>
                  <p>E10k : {pointte10klife} point(s)</p>
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
                <NavLink className="navlink" to="/before-calcul-e10k">
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
