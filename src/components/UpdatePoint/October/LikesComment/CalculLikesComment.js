import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CalculLikesComment() {
  const suggestgdb = "10";
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(false);
  const [newnumber, setNewnumber] = useState("");

  const statuslikescomment = localStorage.getItem(
    "https://omisify.com/statuslikescomment"
  );

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);

          const gdb = res.data.gdb;
          if (gdb) {
            localStorage.setItem("https://omisify.com/gdb", gdb);
          }

          const statuslikescomment = res.data.statuslikescomment;
          if (statuslikescomment) {
            localStorage.setItem(
              "https://omisify.com/statuslikescomment",
              statuslikescomment
            );
          }

          const numberlikescommententeradmin =
            res.data.numberlikescommententeradmin;
          if (numberlikescommententeradmin) {
            localStorage.setItem(
              "https://omisify.com/numberlikescommententeradmin",
              numberlikescommententeradmin
            );
          }

          /*  les trucs ci-dessous d'abord ensuite ceux d'en haut
          les trucs ci-dessous en recuperent chez l'utilisateur et 
          ceux d'en haut on recupere chez le moderateur
          */
          const pointtlikescomment = res.data.pointtlikescomment;
          if (pointtlikescomment) {
            localStorage.setItem(
              "https://omisify.com/pointtlikescomment",
              pointtlikescomment
            );
          }

          const pointtlife = res.data.pointtlife;
          if (pointtlife) {
            localStorage.setItem("https://omisify.com/pointtlife", pointtlife);
          }

          const gaintlife = res.data.gaintlife;
          if (gaintlife) {
            localStorage.setItem("https://omisify.com/gaintlife", gaintlife);
          }

          const generositydaysbonus = res.data.generositydaysbonus;
          if (generositydaysbonus) {
            localStorage.setItem(
              "https://omisify.com/generositydaysbonus",
              generositydaysbonus
            );
          }
        })
        .catch((err) => console.log(err));
    }
    get();
  });

  // 2e etape
  const oldpointtlikescommentlife = localStorage.getItem(
    "https://omisify.com/pointtlikescommentlife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const oldgenerositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  const calculpointtlikescommentlife =
    parseInt(newnumber) * 0.01 * gdb + parseFloat(oldpointtlikescommentlife);

  const calculpointtlife =
    parseInt(newnumber) * 0.01 * gdb + parseFloat(oldpointtlife);

  const calculgaintlife =
    parseInt(newnumber) * 0.00001 * gdb + parseFloat(oldgaintlife);

  if (gdb === suggestgdb) {
    const calculgenerositydaysbonus =
      parseInt(newnumber) * 1 * gdb + parseFloat(oldgenerositydaysbonus);

    localStorage.setItem(
      "https://omisify.com/resultgenerositydaysbonus",
      calculgenerositydaysbonus
    );
  }

  function Save(e) {
    setIsLoading(true);
    e.preventDefault();

    localStorage.setItem("https://omisify.com/newnumber", newnumber);

    localStorage.setItem(
      "https://omisify.com/resultpointtlikescommentlife",
      calculpointtlikescommentlife
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-likes-comment";
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
        <NavLink to="/complete">
          <button>Retour</button>
        </NavLink>
      </div>

      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>

      <div className="calcul-comment">
        <div className="title">
          <p>Likes C</p>
        </div>

        <div className="a">
          <p>
            L'option Likes (commentaire) abrégé en Likes C concerne les likes
            que des personnes ont laissés sur le commentaire publicitaire d'un
            Partenaire Omisify ou d'un Partenaire Omisify Influent
          </p>
          <p>1 Like C : 0.01 point = 0.00001€</p>

          <div className="b">
            <p>Calcul du résultat de votre travail</p>
          </div>

          <div className="status-comment">
            <p>{date}</p>
            {statuslikescomment && (
              <p>Validation automatique : {statuslikescomment}</p>
            )}
          </div>

          <p style={{ fontSize: "14px" }}>
            ATP Likes C : {oldpointtlikescommentlife} point(s)
          </p>

          {newnumber && oldpointtlikescommentlife && (
            <p>
              ({newnumber} x 0.01) + {oldpointtlikescommentlife} ={" "}
              {calculpointtlikescommentlife} point(s)
            </p>
          )}

          {calculgaintlife ? (
            <div className="c">
              <i>Total des Points : {calculpointtlife} point(s)</i>
              <i>Gains : {calculgaintlife}€</i>
            </div>
          ) : (
            <>
              <p></p>
            </>
          )}

          <div className="d">
            <p>Entrer le nombre de Likes C</p>
            <input
              type="number"
              value={newnumber}
              onChange={(e) => setNewnumber(e.target.value)}
              name="newnumber"
              placeholder="Nombre de Likes C"
            />
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              {" "}
              <button onClick={Save}>Calcul terminé</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
