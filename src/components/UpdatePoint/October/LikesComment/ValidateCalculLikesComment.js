import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function ValidateCalculLikesComment() {
  const [isLoading, setIsLoading] = useState(false);
  const statuslikescomment = "NO";
  const getnumberlikescommententeradmin = "0";
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
  const numberlikescommententeradmin = localStorage.getItem(
    "https://omisify.com/numberlikescommententeradmin"
  );

  const pointtlikescommentlife = localStorage.getItem(
    "https://omisify.com/resultpointtlikescommentlife"
  );

  const pointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");

  const userId = localStorage.getItem("https://omisify.com/userId");

  async function Validate() {
    setIsLoading(true);

    if (numberlikescommententeradmin === newnumber) {
      console.log("likescomment success");

      if (gdb === suggestgdb) {
        console.log("yes gdb");

        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatelikescomment/${userId}`,
          data: {
            pointtlikescommentlife,
            pointtlife,
            gaintlife,

            statuslikescomment,
            numberlikescommententeradmin: getnumberlikescommententeradmin,
            generositydaysbonus,

            date,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-likes-comment-success";
      } else {
        console.log("no gdb");

        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatelikescomment/${userId}`,
          data: {
            pointtlikescommentlife,
            pointtlife,
            gaintlife,

            statuslikescomment,
            numberlikescommententeradmin: getnumberlikescommententeradmin,

            date,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location = "/validate-likes-comment-success";
      }
    } else {
      console.log("error likescomment");
      window.location = "/validate-likes-comment-error";
    }
  }

  return (
    <>
      <div className="back-btn">
        <NavLink to="/before-calcul-likes-comment">
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
            <p>Option : Likes C</p>
            <p>{date}</p>
          </div>

          <div className="shrink-border">
            <div className="border">
              {pointtlikescommentlife ? (
                <>
                  <p>Likes C : {pointtlikescommentlife} point(s)</p>
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
                <NavLink className="navlink" to="/before-calcul-likes-comment">
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
