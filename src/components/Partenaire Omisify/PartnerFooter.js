import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PartnerFooter() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const getoldnumbertpublicationlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpublicationlife"
  );

  const getoldnumbertlikepublicationlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikepublicationlife"
  );

  const getoldnumbertlikecommentlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikecommentlife"
  );

  const getoldnumbertcommentlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertcommentlife"
  );
  const getoldgaintlife = localStorage.getItem(
    "https://omisify.com/getoldgaintlife"
  );

  useEffect(() => {
    async function get() {
      axios
        .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
        .then((res) => {
          const getoldnumbertpublicationlife = res.data.numbertpublicationlife;
          if (getoldnumbertpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpublicationlife",
              getoldnumbertpublicationlife
            );
          }

          const getoldnumbertlikepublicationlife =
            res.data.numbertlikepublicationlife;
          if (getoldnumbertlikepublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikepublicationlife",
              getoldnumbertlikepublicationlife
            );
          }

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

          const getoldnumbertlikecommentlife = res.data.numbertlikecommentlife;
          if (getoldnumbertlikecommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikecommentlife",
              getoldnumbertlikecommentlife
            );
          }
        })
        .catch((err) => console.log(err));
    }
    get();
  });

  /* {aa ? (<></>) : (<></>)} */
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
              <li>Commentaires : 0 point(s)</li>
            </>
          )}

          {getoldnumbertlikecommentlife ? (
            <>
              <li>
                Likes (commentaire) : {getoldnumbertlikecommentlife} point(s)
              </li>
            </>
          ) : (
            <>
              <li>Likes (commentaire) : 0 point(s)</li>
            </>
          )}

          {getoldnumbertpublicationlife ? (
            <>
              <li>Publications : {getoldnumbertpublicationlife} point(s)</li>
            </>
          ) : (
            <>
              <li>Publications : 0 point(s)</li>
            </>
          )}

          {getoldnumbertlikepublicationlife ? (
            <>
              <li>
                Likes (publication) : {getoldnumbertlikepublicationlife}{" "}
                point(s)
              </li>
            </>
          ) : (
            <>
              <li>Likes (publication) : 0 point(s)</li>
            </>
          )}

          <li>PWI : _ _ _</li>
          <li>Messages : _ _ _</li>
          <li>MWI : _ _ _</li>
          <li>E-mail : _ _ _</li>
          <li>Code Bonus : _ _ _</li>
          <li>Total des Points : _ _ _</li>
          <li>Valeur des Points : _ _ _</li>
        </div>

        <div className="partner-money">
          {getoldgaintlife ? (
            <>
              <p>Gains : {getoldgaintlife}€</p>
            </>
          ) : (
            <>
              <p>Gains : 0€</p>
            </>
          )}
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
