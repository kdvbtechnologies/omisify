import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../../Partenaire Omisify/Loader";

export default function BeforeCalculBestPartnerBonus() {
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
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

      window.location = "/calcul-best-partner-bonus";
      setIsLoading(true);
    }
    get();
  }, [userId]);

  return (
    <>
      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>

      <div className="update-comment">
        <div className="title">
          <p>Bonus EP</p>
        </div>

        {isLoading && (
          <>
            <p>Chargement des données..</p>
            <Loader />
          </>
        )}
      </div>
    </>
  );
}
