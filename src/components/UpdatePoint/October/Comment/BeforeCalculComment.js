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
      <div className="calcul-comment-title">
        <div className="display">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="25px"
            fill="white"
            enableBackground="new 0 0 489.999 489.999"
            version="1.1"
            viewBox="0 0 489.999 489.999"
            xmlSpace="preserve"
          >
            <path d="M398.125 0H91.875a7.656 7.656 0 00-7.656 7.656v474.687a7.656 7.656 0 007.656 7.656h306.25a7.656 7.656 0 007.656-7.656V7.656A7.656 7.656 0 00398.125 0zm-7.656 474.687H99.531V15.313h290.938v459.374z"></path>
            <path d="M130.156 229.687h229.687a7.656 7.656 0 007.656-7.656V45.937a7.656 7.656 0 00-7.656-7.656H130.156a7.656 7.656 0 00-7.656 7.656v176.094a7.656 7.656 0 007.656 7.656zm7.656-176.094h214.375v160.781H137.812V53.593zM359.843 390.469h-91.875a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656h91.875a7.656 7.656 0 007.656-7.656v-45.937a7.655 7.655 0 00-7.656-7.656zm-7.656 45.937h-76.563v-30.624h76.563v30.624zM359.843 321.562h-91.875a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656h91.875a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656zm-7.656 45.938h-76.563v-30.624h76.563V367.5zM359.843 252.656h-91.875a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656h91.875a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656zm-7.656 45.937h-76.563v-30.624h76.563v30.624zM130.156 451.718h45.938a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656zm7.656-45.937h30.625v30.624h-30.625v-30.624zM245 390.469h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656H245a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656zm-7.656 45.937h-30.625v-30.624h30.625v30.624zM130.156 382.812h45.938a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656zm7.656-45.937h30.625V367.5h-30.625v-30.625zM245 321.562h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656H245a7.656 7.656 0 007.656-7.656v-45.937a7.657 7.657 0 00-7.656-7.656zm-7.656 45.938h-30.625v-30.624h30.625V367.5zM130.156 313.906h45.938a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656zm7.656-45.937h30.625v30.624h-30.625v-30.624zM245 252.656h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656H245a7.656 7.656 0 007.656-7.656v-45.937a7.657 7.657 0 00-7.656-7.656zm-7.656 45.937h-30.625v-30.624h30.625v30.624z"></path>
            <path d="M283.281 122.499h-30.624V91.875a7.656 7.656 0 00-15.312 0v30.624H206.72a7.656 7.656 0 000 15.312h30.625v30.625a7.656 7.656 0 0015.312 0v-30.625h30.624a7.656 7.656 0 000-15.312zM329.219 183.749h-15.313a7.656 7.656 0 000 15.312h15.313a7.656 7.656 0 000-15.312zM176.094 183.749h-15.313a7.656 7.656 0 000 15.312h15.313a7.656 7.656 0 000-15.312z"></path>
          </svg>
          <p>Actualisation des points</p>
        </div>
        {/* display */}
      </div>
      {/* calcul-comment-title */}

      <div className="update-comment">
        <div className="title">
          <p>Commentaire</p>
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
