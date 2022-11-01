import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function BeforeCalculE10k() {
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          const gdb = res.data.gdb;
          if (gdb) {
            localStorage.setItem("https://omisify.com/gdb", gdb);
          }

          const statuse10k = res.data.statuse10k;
          if (statuse10k) {
            localStorage.setItem("https://omisify.com/statuse10k", statuse10k);
          }

          const numbere10kenteradmin = res.data.numbere10kenteradmin;
          if (numbere10kenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numbere10kenteradmin",
              numbere10kenteradmin
            );
          }

          const pointte10klife = res.data.pointte10klife;
          if (pointte10klife) {
            localStorage.setItem(
              "https://omisify.com/pointte10klife",
              pointte10klife
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

      window.location = "/calcul-e10k";
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
          <p>E10k</p>
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
