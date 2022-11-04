import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";

export default function BeforeCalculMessage() {
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          const pointtmessagelife = res.data.pointtmessagelife;
          if (pointtmessagelife) {
            localStorage.setItem(
              "https://omisify.com/pointtmessagelife",
              pointtmessagelife
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

          const statusmessage = res.data.statusmessage;
          if (statusmessage) {
            localStorage.setItem(
              "https://omisify.com/statusmessage",
              statusmessage
            );
          }

          const numbermessageenteradmin = res.data.numbermessageenteradmin;
          if (numbermessageenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numbermessageenteradmin",
              numbermessageenteradmin
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
      window.location = "/calcul-message";
      setIsLoading(true);
    }
    get();
  }, [userId]);

  async function TryAgain() {
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
          <p>Message</p>
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
                <p>Impossible de charger les données</p>
                <p>Cliquer sur le bouton Rééssayer</p>
              </div>
            </div>
            <button onClick={TryAgain}>Rééssayer</button>
          </>
        )}
      </div>
    </div>
  );
}
