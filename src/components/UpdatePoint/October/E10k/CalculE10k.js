import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CalculE10k() {
  const suggestgdb = "10";
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(false);
  const [newnumber, setNewnumber] = useState("");

  const statuse10k = localStorage.getItem("https://omisify.com/statuse10k");

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

          const statuse10k = res.data.statuse10k;
          if (statuse10k) {
            localStorage.setItem("https://omisify.com/statuse10k", statuse10k);
          }

          const numbere10kenteradmin = res.data.numbere10kenteradmin;
          if (numbere10kenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numbere10kenteradmin",
              numbere10kenteradmin
            );
          }

          /*  les trucs ci-dessous d'abord ensuite ceux d'en haut
          les trucs ci-dessous en recuperent chez l'utilisateur et 
          ceux d'en haut on recupere chez le moderateur
          */
          const pointte10klife = res.data.pointte10klife;
          if (pointte10klife) {
            localStorage.setItem(
              "https://omisify.com/pointte10klife",
              pointte10klife
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
  }, [userId]);

  // 2e etape
  const oldpointte10klife = localStorage.getItem(
    "https://omisify.com/pointte10klife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const oldgenerositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  const calculpointte10klife =
    parseInt(newnumber) * 0.7 * gdb + parseFloat(oldpointte10klife);

  const calculpointtlife =
    parseInt(newnumber) * 0.7 * gdb + parseFloat(oldpointtlife);

  const calculgaintlife =
    parseInt(newnumber) * 0.0007 * gdb + parseFloat(oldgaintlife);

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

    if (newnumber) {
      localStorage.setItem("https://omisify.com/newnumber", newnumber);
    }

    if (calculpointte10klife) {
      localStorage.setItem(
        "https://omisify.com/resultpointte10klife",
        calculpointte10klife
      );
    }

    if (calculpointtlife) {
      localStorage.setItem(
        "https://omisify.com/resultpointtlife",
        calculpointtlife
      );
    }

    if (calculgaintlife) {
      localStorage.setItem(
        "https://omisify.com/resultgaintlife",
        calculgaintlife
      );
    }

    window.location = "/validate-calcul-e10k";
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
          <p>E10k</p>
        </div>

        <div className="a">
          <p>
            Les E10k (E-mails aux 10k) concerne les e-mails envoyés aux comptes
            ayant entre 10000 abonnés et moins d'1 million d'abonnés
          </p>
          <p>1 E10k : 0.7 point = 0.0007€</p>

          <div className="b">
            <p>Calcul du résultat de votre travail</p>
          </div>

          <div className="status-comment">
            <p>{date}</p>
            {statuse10k && <p>Validation automatique : {statuse10k}</p>}
          </div>

          <p style={{ fontSize: "14px" }}>
            Ancien total des points des E10k : {oldpointte10klife} point(s)
          </p>

          {newnumber && oldpointte10klife && (
            <p>
              ({newnumber} x 0.7) + {oldpointte10klife} = {calculpointte10klife}{" "}
              point(s)
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
            <p>Entrer le nombre de E10k</p>
            <input
              type="number"
              value={newnumber}
              onChange={(e) => setNewnumber(e.target.value)}
              name="newnumber"
              placeholder="Nombre de E10k"
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
