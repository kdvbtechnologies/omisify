import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";

export default function BeforeCalculComment() {
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);

          const statuscomment = res.data.statuscomment;
          if (statuscomment) {
            localStorage.setItem(
              "https://omisify.com/statuscomment",
              statuscomment
            );
          }
        })
        .catch((err) => console.log(err));
      window.location = "/calcul-comment";
      setIsLoading(true);
    }
    get();
  }, [userId]);

  async function Refresh() {
    window.location.reload();
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>
      <div className="update-comment">
        <div className="title">
          <p>Commentaire</p>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="a">
              <div className="b">
                <p>
                  Impossible d'accéder à la page d'actualisation des
                  Commentaires. Actualiser la page pourrait aider à résoudre ce
                  problème. Si le problème persiste, vérifier votre connexion
                  internet ou contacter le Service Partenaire pour obtenir de
                  l'aide
                </p>
                <p>Cliquer sur le bouton Actualiser</p>
              </div>
            </div>
            <button onClick={Refresh}>Actualiser </button>
          </>
        )}
      </div>
    </div>
  );
}
