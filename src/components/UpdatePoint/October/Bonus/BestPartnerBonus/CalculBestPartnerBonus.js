import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../../Partenaire Omisify/Loader";
import { NavLink } from "react-router-dom";

export default function CalculBestPartnerBonus() {
  const [isLoading, setIsLoading] = useState(false);
  const getnumberdaysbestpartnerbonusenteruser = "1";
  const userId = localStorage.getItem("https://omisify.com/userId");

  const statusbestpartnerbonus = localStorage.getItem(
    "https://omisify.com/statusbestpartnerbonus"
  );

  const [
    numberdaysbestpartnerbonusenteruser,
    setnumberdaysbestpartnerbonusenteruser,
  ] = useState(getnumberdaysbestpartnerbonusenteruser);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);

          const numberdaysbestpartnerbonusenteradmin =
            res.data.numberdaysbestpartnerbonusenteradmin;
          if (numberdaysbestpartnerbonusenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numberdaysbestpartnerbonusenteradmin",
              numberdaysbestpartnerbonusenteradmin
            );
          }

          const statusbestpartnerbonus = res.data.statusbestpartnerbonus;
          if (statusbestpartnerbonus) {
            localStorage.setItem(
              "https://omisify.com/statusbestpartnerbonus",
              statusbestpartnerbonus
            );
          }

          const bestpartnerbonus = res.data.bestpartnerbonus;
          if (bestpartnerbonus) {
            localStorage.setItem(
              "https://omisify.com/bestpartnerbonus",
              bestpartnerbonus
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
        })
        .catch((err) => console.log(err));
    }
    get();
  }, [userId]);

  // 2e etape
  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const oldbestpartnerbonus = localStorage.getItem(
    "https://omisify.com/bestpartnerbonus"
  );

  const calculbestpartnerbonus =
    parseInt(numberdaysbestpartnerbonusenteruser) * 30 +
    parseFloat(oldbestpartnerbonus);

  const calculpointtlife =
    parseInt(numberdaysbestpartnerbonusenteruser) * 30 +
    parseFloat(oldpointtlife);

  const calculgaintlife =
    parseInt(numberdaysbestpartnerbonusenteruser) * 0.03 +
    parseFloat(oldgaintlife);

  function Save(e) {
    setIsLoading(true);
    e.preventDefault();

    if (numberdaysbestpartnerbonusenteruser) {
      localStorage.setItem(
        "https://omisify.com/numberdaysbestpartnerbonusenteruser",
        numberdaysbestpartnerbonusenteruser
      );
    }

    localStorage.setItem(
      "https://omisify.com/resultbestpartnerbonus",
      calculbestpartnerbonus
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-best-partner-bonus";
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
          <p>Bonus EP</p>
        </div>

        <div className="a">
          <p>
            Les M10k (Message aux 10k) concerne les messages envoyés aux comptes
            ayant entre 10000 abonnés et moins de 1 millions d'abonnés
          </p>
          <p>1 jour de Bonus EP : 30 points = 0.03€</p>

          <div className="b">
            <p>Calcul de votre Bonus d'Excellent(e) Partenaire</p>
          </div>

          <div className="status-comment">
            <p>{date}</p>
            {statusbestpartnerbonus && (
              <p>Validation automatique : {statusbestpartnerbonus}</p>
            )}
          </div>

          <p style={{ fontSize: "14px" }}>
            Ancien total des points du Bonus EP : {oldbestpartnerbonus} point(s)
          </p>

          {numberdaysbestpartnerbonusenteruser && oldbestpartnerbonus && (
            <p>
              ({numberdaysbestpartnerbonusenteruser} x 30 ) +{" "}
              {oldbestpartnerbonus} = {calculbestpartnerbonus} point(s)
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
            <p>Entrer le nombre de jour(s) travaillé(s)</p>

            <select
              value={numberdaysbestpartnerbonusenteruser}
              onChange={(e) =>
                setnumberdaysbestpartnerbonusenteruser(e.target.value)
              }
              name="numberdaysbestpartnerbonusenteruser"
            >
              <option value="1">1 jour</option>
              <option value="2">2 jours</option>
              <option value="3">3 jours</option>
              <option value="4">4 jours</option>
              <option value="5">5 jours</option>
              <option value="6">6 jours</option>
              <option value="7">7 jours</option>
            </select>
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
