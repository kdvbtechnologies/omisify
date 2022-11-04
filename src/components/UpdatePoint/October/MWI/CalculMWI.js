import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function CalculMWI() {
  const suggestgdb = "10";
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(false);
  const [newnumber, setNewnumber] = useState("");

  const statusmwi = localStorage.getItem("https://omisify.com/statusmwi");

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

          const statusmwi = res.data.statusmwi;
          if (statusmwi) {
            localStorage.setItem("https://omisify.com/statusmwi", statusmwi);
          }

          const numbermwienteradmin = res.data.numbermwienteradmin;
          if (numbermwienteradmin) {
            localStorage.setItem(
              "https://omisify.com/numbermwienteradmin",
              numbermwienteradmin
            );
          }

          /* les trucs ci-dessous d'abord ensuite ceux d'en haut
          les trucs ci-dessous en recuperent chez l'utilisateur et 
          ceux d'en haut on recupere chez le moderateur
          */
          const pointtmwi = res.data.pointtmwi;
          if (pointtmwi) {
            localStorage.setItem("https://omisify.com/pointtmwi", pointtmwi);
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
  const oldpointtmwilife = localStorage.getItem(
    "https://omisify.com/pointtmwilife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const oldgenerositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  const calculpointtmwilife =
    parseInt(newnumber) * 5 * gdb + parseFloat(oldpointtmwilife);

  const calculpointtlife =
    parseInt(newnumber) * 5 * gdb + parseFloat(oldpointtlife);

  const calculgaintlife =
    parseInt(newnumber) * 0.005 * gdb + parseFloat(oldgaintlife);

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
      "https://omisify.com/resultpointtmwilife",
      calculpointtmwilife
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-mwi";
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
          <p>MWI</p>
        </div>

        <div className="a">
          <p>
            Les Messages avec interaction abrégé en MWI concerne les messages
            publicitaires dans lesqueslles un Partenaire Omisify Influent, un
            Partenaire Omisify ou un Partenaire Omisify Vidéaste recommande un
            produit ou une entreprise lors de ses conversations avec ses
            Contacts de Confiance
          </p>
          <p>1 MWI : 5 points = 0.005€</p>

          <div className="b">
            <p>Calcul du résultat de votre travail</p>
          </div>

          <div className="status-comment">
            <p>{date}</p>
            {statusmwi && <p>Validation automatique : {statusmwi}</p>}
          </div>

          <p style={{ fontSize: "14px" }}>
            ATP MWI : {oldpointtmwilife} point(s)
          </p>

          {newnumber && oldpointtmwilife && (
            <p>
              ({newnumber} x 5) + {oldpointtmwilife} = {calculpointtmwilife}{" "}
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
            <p>Entrer le nombre de MWI</p>
            <input
              type="number"
              value={newnumber}
              onChange={(e) => setNewnumber(e.target.value)}
              name="newnumber"
              placeholder="Nombre de MWI"
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
