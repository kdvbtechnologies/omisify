import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";

export default function BeforeCalculM10k() {
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);

          const statusm10k = res.data.statusm10k;
          if (statusm10k) {
            localStorage.setItem("https://omisify.com/statusm10k", statusm10k);
          }
        })
        .catch((err) => console.log(err));
      window.location = "/calcul-m10k";
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
          <p>M10k</p>
        </div>

        {isLoading ? (
          <>
            <p>Chargement des données..</p>
            <Loader />
          </>
        ) : (
          <>
            <div className="a">
              <div className="b">
                <p>Impossible d'accéder à la page d'actualisation des M10k</p>
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
