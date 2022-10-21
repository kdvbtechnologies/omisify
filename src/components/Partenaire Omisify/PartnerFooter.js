import { NavLink } from "react-router-dom";

export default function PartnerFooter() {
  // welcome bonus
  const welcomebonus = localStorage.getItem("https://omisify.com/welcomebonus");

  // codewelcomebonus
  const codewelcomebonus = localStorage.getItem(
    "https://omisify.com/codewelcomebonus"
  );

  // bestpartnerbonus
  const bestpartnerbonus = localStorage.getItem(
    "https://omisify.com/bestpartnerbonus"
  );

  // comment
  const getoldnumbertcommentlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertcommentlife"
  );

  // e10k
  const getoldnumberte10klife = localStorage.getItem(
    "https://omisify.com/getoldnumberte10klife"
  );

  // email
  const getoldnumbertemaillife = localStorage.getItem(
    "https://omisify.com/getoldnumbertemaillife"
  );

  // likescomment
  const getoldnumbertlikecommentlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikecommentlife"
  );

  // likespublication
  const getoldnumbertlikepublicationlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikepublicationlife"
  );

  // m10k
  const getoldnumbertm10klife = localStorage.getItem(
    "https://omisify.com/getoldnumbertm10klife"
  );

  // message
  const getoldnumbertmessagelife = localStorage.getItem(
    "https://omisify.com/getoldnumbertmessagelife"
  );

  // mwi
  const getoldnumbertmwilife = localStorage.getItem(
    "https://omisify.com/getoldnumbertmwilife"
  );

  // publication
  const getoldnumbertpublicationlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpublicationlife"
  );

  // pwi
  const getoldnumbertpwilife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwilife"
  );

  // pwp
  const getoldnumbertpwplife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwplife"
  );

  // points total
  const getoldpointtlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlife"
  );

  // gain total
  const getoldgaintlife = localStorage.getItem(
    "https://omisify.com/getoldgaintlife"
  );

  /* {aa ? (<></>) : (<></>)} */
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>

          {bestpartnerbonus ? (
            <>
              <li>
                Bonus d'Excellent(e) Partenaire : {bestpartnerbonus} points
              </li>
            </>
          ) : (
            <>
              <li>Bonus d'Excellent(e) Partenaire : 0 point(s)</li>
            </>
          )}
          {welcomebonus ? (
            <>
              <li>Bonus de Bienvenue : {welcomebonus} points</li>
            </>
          ) : (
            <>
              <li>Bonus de Bienvenue : 0 point(s)</li>
            </>
          )}

          {codewelcomebonus ? (
            <>
              <li>Bonus du Code de Bienvenue : {codewelcomebonus} points</li>
            </>
          ) : (
            <>
              <li>Bonus du Code de Bienvenue : 0 point(s)</li>
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

          {getoldnumberte10klife ? (
            <>
              <li>E10k : {getoldnumberte10klife} point(s)</li>
            </>
          ) : (
            <>
              <li>E10k : 0 point(s)</li>
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

          {getoldnumbertm10klife ? (
            <>
              <li>M10k : {getoldnumbertm10klife} point(s)</li>
            </>
          ) : (
            <>
              <li>M10k : 0 point(s)</li>
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

          {getoldnumbertpublicationlife ? (
            <>
              <li>Publications : {getoldnumbertpublicationlife} point(s)</li>
            </>
          ) : (
            <>
              <li>Publications : 0 point(s)</li>
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

          {getoldnumbertpwplife ? (
            <>
              <li>PWP : {getoldnumbertpwplife} point(s)</li>
            </>
          ) : (
            <>
              <li>PWP : 0 point(s)</li>
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
