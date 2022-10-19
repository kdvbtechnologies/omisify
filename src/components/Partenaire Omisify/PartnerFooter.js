import { NavLink } from "react-router-dom";

export default function PartnerFooter() {
  const welcomebonus = localStorage.getItem("https://omisify.com/welcomebonus");

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

  /* {aa ? (<></>) : (<></>)} */
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>

          {welcomebonus ? (
            <>
              <li>Bonus de Bienvenue : {welcomebonus} points</li>
            </>
          ) : (
            <>
              <li>Bonus de Bienvenue : 0 point(s)</li>
            </>
          )}

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
