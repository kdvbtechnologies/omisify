import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PartnerFooter() {
  const getoldnumbertcommentlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertcommentlife"
  );
  const userId = localStorage.getItem("https://omisify.com/userId");
  const getoldgaintlife = localStorage.getItem(
    "https://omisify.com/getoldgaintlife"
  );

  useEffect(() => {
    async function get() {
      axios
        .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
        .then((res) => {
          const getoldnumbertcommentlife = res.data.numbertcommentlife;
          if (getoldnumbertcommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertcommentlife",
              getoldnumbertcommentlife
            );
          }

          const getoldgaintlife = res.data.gaintlife;
          if (getoldgaintlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlife",
              getoldgaintlife
            );
          }
        })
        .catch((err) => console.log(err));
    }
    get();
  });

  /* {getoldnumbertcommentlife ? (<></>) : (<></>)} */
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : _ _ _</li>

          {getoldnumbertcommentlife ? (
            <>
              <li>Commentaires : {getoldnumbertcommentlife} points</li>
            </>
          ) : (
            <>
              <li>Commentaires : _ _ _</li>
            </>
          )}

          <li>Likes (commentaire) : _ _ _</li>
          <li>Publications : _ _ _</li>
          <li>Likes (publication) : _ _ _</li>
          <li>PWI : _ _ _</li>
          <li>Messages : _ _ _</li>
          <li>MWI : _ _ _</li>
          <li>E-mail : _ _ _</li>
          <li>Code Bonus : _ _ _</li>
          <li>Total des Points : _ _ _</li>
          <li>Valeur des Points : _ _ _</li>
        </div>
        <div className="partner-money">
          <p>Gains : {getoldgaintlife}€</p>
        </div>
      </div>
      <div className="request-money">
        <NavLink to="/partner-contact">
          <button>Demander ma rémunération</button>
        </NavLink>
      </div>
    </>
  );
}
