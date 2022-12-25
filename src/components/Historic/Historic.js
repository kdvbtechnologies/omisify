import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Historic() {
  const [popupHistoric, setPopupHistoric] = useState(false);
  function PopupHistoric() {
    setPopupHistoric(!popupHistoric);
  }

  return (
    <>
      <div className="historic">
        <div className="title">
          <NavLink to="/partner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="20px"
              cursor="pointer"
              enableBackground="new 0 0 486.975 486.975"
              version="1.1"
              viewBox="0 0 486.975 486.975"
              xmlSpace="preserve"
            >
              <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
            </svg>
          </NavLink>

          <svg
            style={{ paddingRight: "7px", fill: "black" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            viewBox="0 -1 16 16"
          >
            <path
              d="M-5 8a7.008 7.008 0 01-7 7 .5.5 0 01-.5-.5.5.5 0 01.5-.5 6.006 6.006 0 006-6 6.006 6.006 0 00-6-6 6.006 6.006 0 00-6 6v.293l1.146-1.147a.5.5 0 01.708 0 .5.5 0 010 .708l-2 2a.518.518 0 01-.163.109.5.5 0 01-.191.037.5.5 0 01-.191-.038.518.518 0 01-.163-.109l-2-2a.5.5 0 010-.708.5.5 0 01.708 0L-19 8.293V8a7.008 7.008 0 017-7 7.008 7.008 0 017 7zm-7-4a.5.5 0 00-.5.5V8a.5.5 0 00.5.5h3.5A.5.5 0 00-8 8a.5.5 0 00-.5-.5h-3v-3A.5.5 0 00-12 4z"
              data-name="Path 89"
              transform="translate(21 -1)"
            ></path>
          </svg>
          <p>Historique</p>
        </div>
        {/* title */}

        <div className="hr">
          <hr />
        </div>

        <div onClick={PopupHistoric} className="new">
          <p>
            12/10/2022 - Vous avez reçu 100 points juste pour avoir ajouter le
            logo de la marque Omisify à votre photo de profil
          </p>
        </div>
        <div className="hr">
          <hr />
        </div>

        <div className="a">
          <p>
            12/10/2022 - Vous avez reçu 100 points juste pour avoir ajouter le
            logo de la marque Omisify à votre photo de profil
          </p>
        </div>
        <div className="hr">
          <hr />
        </div>
      </div>

      {popupHistoric && (
        <>
          <div onClick={PopupHistoric} className="popup-historic-opacity">
            <div className="align">
              <div className="card">
                <p>
                  Vous avez reçu 100 points juste pour avoir ajouter le logo de
                  la marque Omisify à votre photo de profil
                </p>
                <div className="a">
                  <p>12/10/2022</p>
                </div>
                {/* a */}

                <div className="b">
                  <p>Omisify la marque préférée des influenceurs</p>
                </div>
                {/* b */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-historic-opacity */}
        </>
      )}
    </>
  );
}
