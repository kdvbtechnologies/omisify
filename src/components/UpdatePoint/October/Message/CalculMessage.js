import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function CalculMessage() {
  const suggestgdb = "10";
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [newnumber, setNewnumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const statusmessage = localStorage.getItem(
    "https://omisify.com/statusmessage"
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

          const pointtmessagelife = res.data.pointtmessagelife;
          if (pointtmessagelife) {
            localStorage.setItem(
              "https://omisify.com/pointtmessagelife",
              pointtmessagelife
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

          const statusmessage = res.data.statusmessage;
          if (statusmessage) {
            localStorage.setItem(
              "https://omisify.com/statusmessage",
              statusmessage
            );
          }

          const numbermessageenteradmin = res.data.numbermessageenteradmin;
          if (numbermessageenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numbermessageenteradmin",
              numbermessageenteradmin
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
  const oldpointtmessagelife = localStorage.getItem(
    "https://omisify.com/pointtmessagelife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const oldgenerositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  const calculpointtmessagelife =
    parseInt(newnumber) * 0.3 * gdb + parseFloat(oldpointtmessagelife);

  const calculpointtlife =
    parseInt(newnumber) * 0.3 * gdb + parseFloat(oldpointtlife);

  const calculgaintlife =
    parseInt(newnumber) * 0.0003 * gdb + parseFloat(oldgaintlife);

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
      "https://omisify.com/resultpointtmessagelife",
      calculpointtmessagelife
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-message";
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
          <p>Message</p>
        </div>

        <div className="a">
          <p>
            L'option Message concerne un message publicitaire envoyé par un
            Partenaire Omisify avec la partie présentation et le lien
            publicitaire à ses amis ou à des inconnus sur les réseaux sociaux
          </p>
          <p>1 Message : 0.3 point = 0.0003€</p>

          <div className="b">
            <p>Calcul du résultat de votre travail</p>
          </div>

          <div className="status-comment">
            <p>{date}</p>
            {statusmessage && <p>Validation automatique : {statusmessage}</p>}
          </div>

          <p style={{ fontSize: "14px" }}>
            ATP Message : {oldpointtmessagelife} point(s)
          </p>

          {newnumber && oldpointtmessagelife && (
            <p>
              ({newnumber} x 0.3 ) + {oldpointtmessagelife} ={" "}
              {calculpointtmessagelife} point(s)
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
            <p>Entrer le nombre de nouveau(x) message(s)</p>
            <input
              type="number"
              value={newnumber}
              onChange={(e) => setNewnumber(e.target.value)}
              name="newnumber"
              placeholder="Nombre de message(s)"
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
