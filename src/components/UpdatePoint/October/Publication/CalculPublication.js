import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function CalculPublication() {
  const suggestgdb = "10";
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [newnumber, setNewnumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const statuspublication = localStorage.getItem(
    "https://omisify.com/statuspublication"
  );

  // 1ere etape
  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);

          const suggestgdb = 10;
          localStorage.setItem("https://omisify.com/suggestgdb", suggestgdb);

          const pointtpublicationlife = res.data.pointtpublicationlife;
          if (pointtpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/pointtpublicationlife",
              pointtpublicationlife
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

          const statuspublication = res.data.statuspublication;
          if (statuspublication) {
            localStorage.setItem(
              "https://omisify.com/statuspublication",
              statuspublication
            );
          }

          const numberpublicationenteradmin =
            res.data.numberpublicationenteradmin;
          if (numberpublicationenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numberpublicationenteradmin",
              numberpublicationenteradmin
            );
          }

          const gdb = res.data.gdb;
          if (gdb) {
            localStorage.setItem("https://omisify.com/gdb", gdb);
          }

          const generositydaysbonus = res.data.generositydaysbonus;
          if (generositydaysbonus) {
            localStorage.setItem(
              "https://omisify.com/generositydaysbonus",
              generositydaysbonus
            );
          }
        });
    }
    get();
  });

  // 2e etape
  const oldpointtpublicationlife = localStorage.getItem(
    "https://omisify.com/pointtpublicationlife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const oldgenerositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  const calculpointtpublicationlife =
    parseInt(newnumber) * 1000 * gdb + parseFloat(oldpointtpublicationlife);

  const calculpointtlife =
    parseInt(newnumber) * 1000 * gdb + parseFloat(oldpointtlife);

  const calculgaintlife =
    parseInt(newnumber) * 0.000002 * gdb + parseFloat(oldgaintlife);

  if (gdb === suggestgdb) {
    const calculgenerositydaysbonus =
      parseInt(newnumber) * 1000 * gdb + parseFloat(oldgenerositydaysbonus);

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
      "https://omisify.com/resultpointtpublicationlife",
      calculpointtpublicationlife
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-publication";
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
          <p>Publication</p>
        </div>

        <div className="a">
          <p>
            L'option Publication concerne une publication publicitaire publiée
            par un Partenaire Omisify ou un Partenaire Omisify Influent avec la
            partie présentation, le lien publicitaire et l'affiche du produit ou
            de l'entreprise
          </p>
          <p>1 Publication : 1000 points = 0.000002€</p>

          <div className="b">
            <p>Calcul du résultat de votre travail</p>
          </div>

          <div className="status-comment">
            <p>{date}</p>
            {statuspublication && (
              <p>Validation automatique : {statuspublication}</p>
            )}
          </div>

          <p style={{ fontSize: "14px" }}>
            ATP Publication : {oldpointtpublicationlife} point(s)
          </p>

          {newnumber && oldpointtpublicationlife && (
            <p>
              ({newnumber} x 1000 ) + {oldpointtpublicationlife} ={" "}
              {calculpointtpublicationlife} point(s)
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
            <p>Entrer le nombre de nouvelle(s) publication(s)</p>
            <input
              type="number"
              value={newnumber}
              onChange={(e) => setNewnumber(e.target.value)}
              name="newnumber"
              placeholder="Nombre de publication"
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
