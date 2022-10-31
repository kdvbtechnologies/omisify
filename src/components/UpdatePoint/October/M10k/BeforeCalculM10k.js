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
