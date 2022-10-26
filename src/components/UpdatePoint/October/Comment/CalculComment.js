import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Partenaire Omisify/Loader";

export default function CalculComment() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function get() {
      await axios
        .get(
          "https://famous-peplum-dove.cyclic.app/api/user/634c8ab0f59d4e9994f83884"
        )
        .then((res) => {
          console.log(res);
          const getpointtcommentlife = res.data.pointtcommentlife;
          if (getpointtcommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtcommentlife",
              getpointtcommentlife
            );
          }

          const numbercommententeradmin = res.data.numbercommententeradmin;
          if (numbercommententeradmin) {
            localStorage.setItem(
              "https://omisify.com/numbercommententeradmin",
              numbercommententeradmin
            );
          }
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  const [newnumber, setNewnumber] = useState("");
  const oldpointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );

  const calculpointtcommentlife =
    parseInt(newnumber) * 0.01 + parseInt(oldpointtcommentlife);
  console.log(calculpointtcommentlife);

  function Save(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.setItem("https://omisify.com/newnumber", newnumber);

    localStorage.setItem(
      "https://omisify.com/resultpointtcommentlife",
      calculpointtcommentlife
    );
    console.log("resultat sauvegarder dans le localstorage");
    window.location = "/validate-calcul-comment";
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
        </div>
      </div>

      <div className="calcul-comment">
        <div className="a">
          <p>Ancien total : {oldpointtcommentlife} point(s)</p>
          {newnumber && oldpointtcommentlife && (
            <p>
              ({newnumber} x 0.01 ) + {oldpointtcommentlife} ={" "}
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
