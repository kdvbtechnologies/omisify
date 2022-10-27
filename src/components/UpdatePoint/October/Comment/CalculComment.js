import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function CalculComment() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
          const gaintlife = res.data.gaintlife;
          if (gaintlife) {
            localStorage.setItem("https://omisify.com/gaintlife", gaintlife);
          }

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
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  const [newnumber, setNewnumber] = useState("");

  /* deuxiemement on recupere le pointtcommentlife (et les autres elements) qu'on a 
  sauvegarder dans le localStorage */
  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const oldpointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );

  // const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  /* 

  troisiemement on effectue le calcul avec le pointtcommentlife qu'on
  a recuperer.

  Calcul a effectuer :

  on prends le nombre de comment (newnumber) multiplié par la valeur
  de 1 comment
  1 comment = 1 point
  

  apres avoir multiplié, on additionne le tout par le pointtcommentlife qu'on avait
  recuperer dans le localStorage 
  
  et ensuite le resultat de notre calcul est dans calculpointtcommentlife


  pour les gains
  1 comment = 0.001€
  on prend le nombre de comment (newnumber) multiplié par le gain de 1 comment
  on additionne le tout par le gaintlife qu'on avait recuperer dans le localStorage 
  */

  const calculgaintlife = parseInt(oldgaintlife) + +parseInt(newnumber) * 0.001;
  console.log(calculgaintlife);

  const calculpointtcommentlife =
    parseInt(newnumber) * 1 + parseInt(oldpointtcommentlife);
  console.log(calculpointtcommentlife);

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
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtcommentlife",
      calculpointtcommentlife
    );

    //window.location = "/validate-calcul-comment";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>
      <div className="update-comment">
        <div className="title">
          <p>Commentaire</p>
        </div>

        <div className="a">
          <div className="b">
            <p>
              L'option Commentaire s'agit d'un commentaire concernant un produit
              ou une entreprise que le Partenaire a publié sur la publication
              d'une personne ou sur sa propre publication
            </p>
            <p>1 commentaire : 1 point = 0.001€</p>
          </div>

          <div className="c">
            <p>Calculer le résultat de votre travail</p>
          </div>
          <div className="validation-automatic">
            {statuscomment && <p>Validation automatique : {statuscomment}</p>}
          </div>
        </div>
      </div>

      <div className="calcul-comment">
        <div className="a">
          <p>Ancien total : {oldpointtcommentlife} point(s)</p>
          {newnumber && oldpointtcommentlife && (
            <p>
              ({newnumber} x 1 ) + {oldpointtcommentlife} ={" "}
              {calculpointtcommentlife} point(s)
            </p>
          )}
        </div>

        <div className="a">
          <p>Entrer le nombre de commentaire(s)</p>
        </div>
        <input
          type="number"
          value={newnumber}
          onChange={(e) => setNewnumber(e.target.value)}
          name="newnumber"
          placeholder="Nombre de commentaire(s)"
        />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button onClick={Save}>Calcul terminé</button>
          </>
        )}
      </div>
    </div>
  );
}
