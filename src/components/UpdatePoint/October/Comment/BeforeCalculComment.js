import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";

export default function BeforeCalculComment() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(
          "https://famous-peplum-dove.cyclic.app/api/user/634c8ab0f59d4e9994f83884"
        )
        .then((res) => {
          console.log(res);

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
      window.location = "/calcul-comment";
      setIsLoading(true);
    }
    get();
  }, []);

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
                  commentaires. Actualiser la page pourrait aider à résoudre ce
                  problème
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
