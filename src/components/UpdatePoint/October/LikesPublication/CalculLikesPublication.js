import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";
import { NavLink } from "react-router-dom";

export default function CalculLikesPublication() {
  const suggestgdb = "10";
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(false);
  const [newnumber, setNewnumber] = useState("");

  const statuslikespublication = localStorage.getItem(
    "https://omisify.com/statuslikespublication"
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

          const statuslikespublication = res.data.statuslikespublication;
          if (statuslikespublication) {
            localStorage.setItem(
              "https://omisify.com/statuslikespublication",
              statuslikespublication
            );
          }

          const numberlikespublicationenteradmin =
            res.data.numberlikespublicationenteradmin;
          if (numberlikespublicationenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numberlikespublicationenteradmin",
              numberlikespublicationenteradmin
            );
          }

          /* les trucs ci-dessous d'abord ensuite ceux d'en haut
          les trucs ci-dessous en recuperent chez l'utilisateur et 
          ceux d'en haut on recupere chez le moderateur
          */
          const pointtlikespublication = res.data.pointtlikespublication;
          if (pointtlikespublication) {
            localStorage.setItem(
              "https://omisify.com/pointtlikespublication",
              pointtlikespublication
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
  const oldpointtlikespublicationlife = localStorage.getItem(
    "https://omisify.com/pointtlikespublicationlife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const oldgenerositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  const calculpointtlikespublicationlife =
    parseInt(newnumber) * 0.01 * gdb +
    parseFloat(oldpointtlikespublicationlife);

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
      "https://omisify.com/resultpointtlikespublicationlife",
      calculpointtlikespublicationlife
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-likes-publication";
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
          <p>Likes P</p>
        </div>

        <div className="a">
          <p>
            L'option Likes (publication) concerne les likes que des personnes
            ont laissés sur la publication du Partenaire. Les Likes de tout les
            types de publication sont prises en compte
          </p>
          <p>1 Like P : 0.01 point = 0.00001€</p>

          <div className="b">
            <p>Calcul du résultat de votre travail</p>
          </div>

          <div className="status-comment">
            <p>{date}</p>
            {statuslikespublication && (
              <p>Validation automatique : {statuslikespublication}</p>
            )}
          </div>

          <p style={{ fontSize: "14px" }}>
            Ancien total des points des Likes P :{" "}
            {oldpointtlikespublicationlife} point(s)
          </p>

          {newnumber && oldpointtlikespublicationlife && (
            <p>
              ({newnumber} x 0.01) + {oldpointtlikespublicationlife} ={" "}
              {calculpointtlikespublicationlife} point(s)
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
            <p>Entrer le nombre de Likes P</p>
            <input
              type="number"
              value={newnumber}
              onChange={(e) => setNewnumber(e.target.value)}
              name="newnumber"
              placeholder="Nombre de Likes P"
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
