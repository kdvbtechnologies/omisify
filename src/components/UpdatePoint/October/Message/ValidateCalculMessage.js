import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function ValidateCalculMessage() {
  const statusmessage = "NO";
  const newnumbermessageenteradmin = "0";
  const [isLoading, setIsLoading] = useState(false);

  const userId = localStorage.getItem("https://omisify.com/userId");

  const getdate = new Date();
  const date = getdate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const pointtmessagelife = localStorage.getItem(
    "https://omisify.com/resultpointtmessagelife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");
  const pointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  const getnewnumber = localStorage.getItem("https://omisify.com/newnumber");
  const numbermessageenteradmin = localStorage.getItem(
    "https://omisify.com/numbermessageenteradmin"
  );

  const generositydaysbonus = localStorage.getItem(
    "https://omisify.com/resultgenerositydaysbonus"
  );

  const suggestgdb = localStorage.getItem("https://omisify.com/suggestgdb");
  const gdb = localStorage.getItem("https://omisify.com/gdb");

  async function Validate() {
    setIsLoading(true);
    if (numbermessageenteradmin === getnewnumber) {
      if (gdb === suggestgdb) {
        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatemessage/${userId}`,
          data: {
            pointtmessagelife,

            pointtlife,
            gaintlife,

            statusmessage,
            numbermessageenteradmin: newnumbermessageenteradmin,
            date,

            generositydaysbonus,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-message-success";
      } else {
        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatemessage/${userId}`,
          data: {
            pointtmessagelife,

            pointtlife,
            gaintlife,

            statusmessage,
            numbermessageenteradmin: newnumbermessageenteradmin,
            date,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-message-success";
      }
    } else {
      window.location = "/validate-message-error";
    }
  }

  return (
    <>
      <div className="back-btn">
        <NavLink to="/before-calcul-message">
          <button>Retour</button>
        </NavLink>
      </div>

      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>

      <div className="validate-calcul-comment">
        <div className="title">
          <p>R??sultats</p>
        </div>

        <div className="a">
          <div className="date">
            <p>Option : Message</p>
            <p>{date}</p>
          </div>

          <div className="shrink-border">
            <div className="border">
              {pointtmessagelife ? (
                <>
                  <p>Message : {pointtmessagelife} point(s)</p>
                  <p>Total des Points : {pointtlife} point(s)</p>
                  <p>Gains : {gaintlife}???</p>
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
                Avant de cliquer sur Valider, v??rifier que les r??sultats de
                votre travail affich??s sur cette page sont conformes ?? ce que
                vous avez calcul??s
              </i>
            </div>

            <div className="b">
              <i>
                Si les r??sultats ne sont pas correct, cliquer{" "}
                <NavLink className="navlink" to="/before-calcul-message">
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
              <p>Cliquer sur Valider pour actualiser vos points</p>
            </div>
            <button onClick={Validate}>Valider</button>
          </>
        )}
      </div>
    </>
  );
}
