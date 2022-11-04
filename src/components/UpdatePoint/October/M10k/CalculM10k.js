import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function CalculM10k() {
  const suggestgdb = "10";
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [newnumber, setNewnumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const statusm10k = localStorage.getItem("https://omisify.com/statusm10k");

  // 1ere etape
  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);

          const suggestgdb = 10;
          localStorage.setItem("https://omisify.com/suggestgdb", suggestgdb);

          const pointtm10klife = res.data.pointtm10klife;
          if (pointtm10klife) {
            localStorage.setItem(
              "https://omisify.com/pointtm10klife",
              pointtm10klife
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

          const statusm10k = res.data.statusm10k;
          if (statusm10k) {
            localStorage.setItem("https://omisify.com/statusm10k", statusm10k);
          }

          const numberm10kenteradmin = res.data.numberm10kenteradmin;
          if (numberm10kenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numberm10kenteradmin",
              numberm10kenteradmin
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
  const oldpointtm10klife = localStorage.getItem(
    "https://omisify.com/pointtm10klife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const oldgenerositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  const calculpointtm10klife =
    parseInt(newnumber) * 0.7 * gdb + parseFloat(oldpointtm10klife);

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

    localStorage.setItem("https://omisify.com/newnumber", newnumber);

    localStorage.setItem(
      "https://omisify.com/resultpointtm10klife",
      calculpointtm10klife
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-m10k";
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
          <p>M10k</p>
        </div>

        <div className="a">
          <p>
            Les Messages aux 10k abrégé en M10k concerne les messages
            publicitaires envoyés par un Partenaire Omisify aux comptes ayant
            entre 10000 abonnés et moins d'un millions d'abonnés
          </p>
          <p>1 M10k : 0.7 point = 0.0007€</p>

          <div className="b">
            <p>Calcul du résultat de votre travail</p>
          </div>

          <div className="status-comment">
            <p>{date}</p>
            {statusm10k && <p>Validation automatique : {statusm10k}</p>}
          </div>

          <p style={{ fontSize: "14px" }}>
            ATP M10k : {oldpointtm10klife} point(s)
          </p>

          {newnumber && oldpointtm10klife && (
            <p>
              ({newnumber} x 0.7 ) + {oldpointtm10klife} ={" "}
              {calculpointtm10klife} point(s)
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
            <p>Entrer le nombre de M10k</p>
            <input
              type="number"
              value={newnumber}
              onChange={(e) => setNewnumber(e.target.value)}
              name="newnumber"
              placeholder="Nombre de M10k"
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
