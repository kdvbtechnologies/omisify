import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PartnerFooter() {
  const userId = localStorage.getItem("https://omisify.com/userId");

  const getoldpointtlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlife"
  );

  const getoldnumbertemaillife = localStorage.getItem(
    "https://omisify.com/getoldnumbertemaillife"
  );

  const getoldnumbertmwilife = localStorage.getItem(
    "https://omisify.com/getoldnumbertmwilife"
  );

  const getoldnumbertmessagelife = localStorage.getItem(
    "https://omisify.com/getoldnumbertmessagelife"
  );

  const getoldnumbertpwilife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwilife"
  );

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
          const getoldpointtlife = res.data.pointtlife;
          if (getoldpointtlife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlife",
              getoldpointtlife
            );
          }

          const getoldnumbertemaillife = res.data.numbertemaillife;
          if (getoldnumbertemaillife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertemaillife",
              getoldnumbertemaillife
            );
          }

          const getoldnumbertmwilife = res.data.numbertmwilife;
          if (getoldnumbertmwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmwilife",
              getoldnumbertmwilife
            );
          }

          const getoldnumbertmessagelife = res.data.numbertmessagelife;
          if (getoldnumbertmessagelife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmessagelife",
              getoldnumbertmessagelife
            );
          }

          const getoldnumbertpwilife = res.data.numbertpwilife;
          if (getoldnumbertpwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwilife",
              getoldnumbertpwilife
            );
          }

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

          {getoldnumbertpwilife ? (
            <>
              <li>PWI : {getoldnumbertpwilife} point(s)</li>
            </>
          ) : (
            <>
              <li>PWI : 0 point(s)</li>
            </>
          )}

          {getoldnumbertmessagelife ? (
            <>
              <li>Messages : {getoldnumbertmessagelife} point(s)</li>
            </>
          ) : (
            <>
              <li>Messages : 0 point(s)</li>
            </>
          )}

          {getoldnumbertmwilife ? (
            <>
              <li>MWI : {getoldnumbertmwilife} point(s)</li>
            </>
          ) : (
            <>
              <li>MWI : 0 point(s)</li>
            </>
          )}

          {getoldnumbertemaillife ? (
            <>
              <li>E-mail : {getoldnumbertemaillife} point(s)</li>
            </>
          ) : (
            <>
              <li>E-mail : 0 point(s)</li>
            </>
          )}

          <li>Code Bonus : _ _ _</li>

          {getoldpointtlife ? (
            <>
              <li>Total des Points : {getoldpointtlife} point(s)</li>
            </>
          ) : (
            <>
              <li>Total des Points : 0 point(s)</li>
            </>
          )}
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
