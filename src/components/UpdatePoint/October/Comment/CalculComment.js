import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function CalculComment() {
  const [isLoading, setIsLoading] = useState(false);

  const resultgaintlife = localStorage.getItem(
    "https://omisify.com/resultgaintlife"
  );

  const resultpointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  /* 
  N.B : il faut commencer à lire la ou c'est ecrit premierement

  on recupere le statutcomment pour savoir si la validation automatique est OPEN (ouverte)
  ou CLOSE (fermer) 

  lorsque lui il fera un put, il va modifier le statut a CLOSE
  lorsque que nous on fera un put, on va modifier le Statut a OPEN (ouverte)
  */

  const statuscomment = localStorage.getItem(
    "https://omisify.com/statuscomment"
  );

  /* premierement on recupere le pointtcommentlife, pointtlife, le gaintlife, 
  statuscomment, numbercommententeradmin puis on sauvegarde dans le localStorage  */
  useEffect(() => {
    async function get() {
      await axios
        .get(
          "https://famous-peplum-dove.cyclic.app/api/user/634c8ab0f59d4e9994f83884"
        )
        .then((res) => {
          console.log(res);

          const suggestgdb = 10;
          localStorage.setItem("https://omisify.com/suggestgdb", suggestgdb);

          const pointtcommentlife = res.data.pointtcommentlife;
          if (pointtcommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtcommentlife",
              pointtcommentlife
            );
          }

          const numbercommententeradmin = res.data.numbercommententeradmin;
          if (numbercommententeradmin) {
            localStorage.setItem(
              "https://omisify.com/numbercommententeradmin",
              numbercommententeradmin
            );
          }

          const statuscomment = res.data.statuscomment;
          if (statuscomment) {
            localStorage.setItem(
              "https://omisify.com/statuscomment",
              statuscomment
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
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  const [newnumber, setNewnumber] = useState("");

  /* deuxiemement on recupere le pointtcommentlife (et les autres elements) qu'on a 
  sauvegarder dans le localStorage */

  const oldpointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const oldgenerositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  /* 

  troisiemement on effectue le calcul avec le pointtcommentlife qu'on
  a recuperer.

  Calcul a effectuer :

  on prends le nombre de comment (newnumber) multiplié par la valeur
  de 1 comment * gdb
  1 comment = 1 point
  

  apres avoir multiplié, on additionne le tout par le pointtcommentlife qu'on avait
  recuperer dans le localStorage 
  
  et ensuite le resultat de notre calcul est dans calculpointtcommentlife


  pour les gains
  1 comment = 0.001€
  on prend le nombre de comment (newnumber) multiplié par le gain de 1 comment * gdb
  on additionne le tout par le gaintlife qu'on avait recuperer dans le localStorage 
  */

  // ici on recupere le gdb qu'on avait sauvegarder dans le localstorage
  // bonus de generosité - gdb = generosity days bonus
  const gdb = localStorage.getItem("https://omisify.com/gdb");
  const suggestgdb = localStorage.getItem("https://omisify.com/suggestgdb");
  console.log(gdb);

  const calculpointtcommentlife =
    parseInt(newnumber) * 1 * gdb + parseInt(oldpointtcommentlife);
  console.log(calculpointtcommentlife);

  const calculpointtlife =
    parseInt(calculpointtcommentlife) + parseInt(oldpointtlife);

  const calculgaintlife =
    parseFloat(oldgaintlife) + parseInt(newnumber) * 0.001 * gdb;

  console.log(calculgaintlife);

  if (gdb === suggestgdb) {
    const calculgenerositydaysbonus =
      parseInt(newnumber) * 1 * gdb + parseFloat(oldgenerositydaysbonus);

    localStorage.setItem(
      "https://omisify.com/resultgenerositydaysbonus",
      calculgenerositydaysbonus
    );
  }

  /* quatriemement on sauvegarde calculpointtcommentlife (et les autres) dans le 
  localStorage, ensuite on sauvegarde aussi le nombre de comment (newnumber)

  newnumber
  calculpointtcommentlife

  -- autres --
  calculgaintlife

  Apres la sauvegarde des elements, la page recharge et on est rediriger sur 
  la page /validate-calcul-comment, cette page nous permet de put ( ou d'envoyer) le 
  resultat total qui est sauvegarder dans le localStorage
  */

  function Save(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.setItem("https://omisify.com/newnumber", newnumber);

    localStorage.setItem(
      "https://omisify.com/resultpointtcommentlife",
      calculpointtcommentlife
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-comment";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <NavLink to="/incomplete">
          <button>Retour</button>
        </NavLink>
      </div>

      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>

      <div className="calcul-comment">
        <div className="title">
          <p>Commentaire</p>
        </div>

        <div className="a">
          <p>
            L'option Commentaire s'agit d'un commentaire concernant un produit
            ou une entreprise que le Partenaire a publié sur la publication
            d'une personne ou sur sa propre publication
          </p>
          <p>1 commentaire : 1 point = 0.001€</p>

          <div className="b">
            <p>Calcul du résultat de votre travail</p>
          </div>

          <div className="status-comment">
            {statuscomment && <p>Validation automatique : {statuscomment}</p>}
          </div>

          <p>Ancien Total C : {oldpointtcommentlife} point(s)</p>

          {newnumber && oldpointtcommentlife && (
            <p>
              ({newnumber} x 1 ) + {oldpointtcommentlife} ={" "}
              {calculpointtcommentlife} point(s)
            </p>
          )}

          {resultgaintlife && (
            <div className="c">
              <i>Total des Points : {resultpointtlife} point(s)</i>
              <i>Gains : {resultgaintlife}€</i>
            </div>
          )}

          <div className="d">
            <p>Entrer le nombre de commentaire(s)</p>
            <input
              type="number"
              value={newnumber}
              onChange={(e) => setNewnumber(e.target.value)}
              name="newnumber"
              placeholder="Nombre de commentaire(s)"
            />
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Save}>Calcul terminé</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
