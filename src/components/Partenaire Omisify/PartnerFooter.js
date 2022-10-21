import { NavLink } from "react-router-dom";

export default function PartnerFooter() {
  // welcome bonus
  const welcomebonus = localStorage.getItem("https://omisify.com/welcomebonus");

  // codewelcomebonus
  const codewelcomebonus = localStorage.getItem(
    "https://omisify.com/codewelcomebonus"
  );

  // best partner bonus
  const bestpartnerbonus = localStorage.getItem(
    "https://omisify.com/bestpartnerbonus"
  );

  // generosity days bonus
  const generositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  // comment
  const getoldpointtcommentlife = localStorage.getItem(
    "https://omisify.com/getoldpointtcommentlife"
  );

  // e10k
  const getoldpointte10klife = localStorage.getItem(
    "https://omisify.com/getoldpointte10klife"
  );

  // email
  const getoldpointtemaillife = localStorage.getItem(
    "https://omisify.com/getoldpointtemaillife"
  );

  // likescomment
  const getoldpointtlikecommentlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlikecommentlife"
  );

  // likespublication
  const getoldpointtlikepublicationlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlikepublicationlife"
  );

  // m10k
  const getoldpointtm10klife = localStorage.getItem(
    "https://omisify.com/getoldpointtm10klife"
  );

  // message
  const getoldpointtmessagelife = localStorage.getItem(
    "https://omisify.com/getoldpointtmessagelife"
  );

  // mwi
  const getoldpointtmwilife = localStorage.getItem(
    "https://omisify.com/getoldpointtmwilife"
  );

  // publication
  const getoldpointtpublicationlife = localStorage.getItem(
    "https://omisify.com/getoldpointtpublicationlife"
  );

  // pwi
  const getoldpointtpwilife = localStorage.getItem(
    "https://omisify.com/getoldpointtpwilife"
  );

  // pwp
  const getoldpointtpwplife = localStorage.getItem(
    "https://omisify.com/getoldpointtpwplife"
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

          {welcomebonus ? (
            <>
              <li>Bonus de Bienvenue : {welcomebonus} points</li>
            </>
          ) : (
            <>
              <li>Bonus de Bienvenue : 0 point(s)</li>
            </>
          )}

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

          {generositydaysbonus ? (
            <>
              <li>
                Bonus des journées de générosité : {generositydaysbonus} points
              </li>
            </>
          ) : (
            <>
              <li>Bonus des journées de générosité : 0 point(s)</li>
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

          {getoldpointtcommentlife ? (
            <>
              <li>Commentaires : {getoldpointtcommentlife} points</li>
            </>
          ) : (
            <>
              <li>Commentaires : 0 point(s)</li>
            </>
          )}

          {getoldpointte10klife ? (
            <>
              <li>E10k : {getoldpointte10klife} point(s)</li>
            </>
          ) : (
            <>
              <li>E10k : 0 point(s)</li>
            </>
          )}

          {getoldpointtemaillife ? (
            <>
              <li>E-mail : {getoldpointtemaillife} point(s)</li>
            </>
          ) : (
            <>
              <li>E-mail : 0 point(s)</li>
            </>
          )}

          {getoldpointtlikecommentlife ? (
            <>
              <li>
                Likes (commentaire) : {getoldpointtlikecommentlife} point(s)
              </li>
            </>
          ) : (
            <>
              <li>Likes (commentaire) : 0 point(s)</li>
            </>
          )}

          {getoldpointtlikepublicationlife ? (
            <>
              <li>
                Likes (publication) : {getoldpointtlikepublicationlife} point(s)
              </li>
            </>
          ) : (
            <>
              <li>Likes (publication) : 0 point(s)</li>
            </>
          )}

          {getoldpointtm10klife ? (
            <>
              <li>M10k : {getoldpointtm10klife} point(s)</li>
            </>
          ) : (
            <>
              <li>M10k : 0 point(s)</li>
            </>
          )}

          {getoldpointtmessagelife ? (
            <>
              <li>Messages : {getoldpointtmessagelife} point(s)</li>
            </>
          ) : (
            <>
              <li>Messages : 0 point(s)</li>
            </>
          )}

          {getoldpointtmwilife ? (
            <>
              <li>MWI : {getoldpointtmwilife} point(s)</li>
            </>
          ) : (
            <>
              <li>MWI : 0 point(s)</li>
            </>
          )}

          {getoldpointtpublicationlife ? (
            <>
              <li>Publications : {getoldpointtpublicationlife} point(s)</li>
            </>
          ) : (
            <>
              <li>Publications : 0 point(s)</li>
            </>
          )}

          {getoldpointtpwilife ? (
            <>
              <li>PWI : {getoldpointtpwilife} point(s)</li>
            </>
          ) : (
            <>
              <li>PWI : 0 point(s)</li>
            </>
          )}

          {getoldpointtpwplife ? (
            <>
              <li>PWP : {getoldpointtpwplife} point(s)</li>
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
