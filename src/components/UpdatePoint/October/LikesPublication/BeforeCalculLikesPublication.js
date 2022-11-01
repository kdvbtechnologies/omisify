import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../Partenaire Omisify/Loader";

export default function BeforeCalculLikesPublication() {
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

      window.location = "/calcul-likes-publication";
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
          <p>Likes P</p>
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
