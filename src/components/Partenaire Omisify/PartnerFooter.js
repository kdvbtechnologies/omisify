import { useState } from "react";
import PopupMaintenance from "../Home Omisify/Maintenance/PopupMaintenance";

export default function PartnerFooter() {
  /*
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
*/

  /*
  // comment
  const getoldpointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );

 
  // e10k
  const getoldpointte10klife = localStorage.getItem(
    "https://omisify.com/pointte10klife"
  );

  // email
  const getoldpointtemaillife = localStorage.getItem(
    "https://omisify.com/pointtemaillife"
  );

  // likescomment
  const getoldpointtlikescommentlife = localStorage.getItem(
    "https://omisify.com/pointtlikescommentlife"
  );

  // likespublication
  const getoldpointtlikespublicationlife = localStorage.getItem(
    "https://omisify.com/pointtlikespublicationlife"
  );

  // m10k
  const getoldpointtm10klife = localStorage.getItem(
    "https://omisify.com/pointtm10klife"
  );
*/

  /*
  // message
  const getoldpointtmessagelife = localStorage.getItem(
    "https://omisify.com/pointtmessagelife"
  );

 
  // mwi
  const getoldpointtmwilife = localStorage.getItem(
    "https://omisify.com/pointtmwilife"
  );
 

  // publication
  const getoldpointtpublicationlife = localStorage.getItem(
    "https://omisify.com/pointtpublicationlife"
  );
 */

  /*
  // pwi
  const getoldpointtpwilife = localStorage.getItem(
    "https://omisify.com/pointtpwilife"
  );

  // pwp
  const getoldpointtpwplife = localStorage.getItem(
    "https://omisify.com/pointtpwplife"
  );
  */

  // points total
  const getoldpointtlife = localStorage.getItem(
    "https://omisify.com/pointtlife"
  );

  // gain total
  const getoldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  /* {aa ? (<></>) : (<></>)} */

  const [popupMaintenance, setPopupMaintenance] = useState(false);
  function Maintenance() {
    setPopupMaintenance(!popupMaintenance);
  }

  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          {/*

          {welcomebonus ? (
            <>
              <li>Bonus B : {welcomebonus} point(s)</li>
            </>
          ) : (
            <>
              <li>Bonus B : 0 point(s)</li>
            </>
          )}

          {codewelcomebonus ? (
            <>
              <li>Bonus CB : {codewelcomebonus} point(s)</li>
            </>
          ) : (
            <>
              <li>Bonus CB : 0 point(s)</li>
            </>
          )}

          {bestpartnerbonus ? (
            <>
              <li>Bonus EP : {bestpartnerbonus} point(s)</li>
            </>
          ) : (
            <>
              <li>Bonus EP : 0 point(s)</li>
            </>
          )}

          {generositydaysbonus ? (
            <>
              <li>Bonus JG : {generositydaysbonus} point(s)</li>
            </>
          ) : (
            <>
              <li>Bonus JG : 0 point(s)</li>
            </>
          )}
          

          {getoldpointtcommentlife ? (
            <>
              <li>Commentaires : {getoldpointtcommentlife} point(s)</li>
            </>
          ) : (
            <>
              <li>Commentaires : 0 point(s)</li>
            </>
          )}
          */}

          {/*
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

          {getoldpointtlikescommentlife ? (
            <>
              <li>Likes C : {getoldpointtlikescommentlife} point(s)</li>
            </>
          ) : (
            <>
              <li>Likes C : 0 point(s)</li>
            </>
          )}

          {getoldpointtlikespublicationlife ? (
            <>
              <li>Likes P : {getoldpointtlikespublicationlife} point(s)</li>
            </>
          ) : (
            <>
              <li>Likes P : 0 point(s)</li>
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
           */}

          {/*
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
          */}

          {/*
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
          */}

          {getoldpointtlife ? (
            <>
              <li>Total des Points : {getoldpointtlife} point(s)</li>
            </>
          ) : (
            <>
              <li>Total des Points : 0 point(s)</li>
            </>
          )}

          {getoldgaintlife && (
            <>
              <li>Valeur des points : {getoldgaintlife}€</li>
            </>
          )}
        </div>

        <p align="center" onClick={Maintenance}>
          ..
        </p>

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
        {/* 
         <NavLink to="/partner-contact">
          <button>Demander ma rémunération</button>
        </NavLink>
        */}

        <button onClick={Maintenance}>..</button>
      </div>

      {popupMaintenance && (
        <div onClick={Maintenance}>
          <PopupMaintenance />
        </div>
      )}
    </>
  );
}
