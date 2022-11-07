import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Back from "../Back/Back";

export default function LogoutAl() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function nowLogout() {
    localStorage.removeItem("https://alrani.com/userId");
    localStorage.removeItem("https://alrani.com/shortname");

    window.location = "/secure-logout-confirm-ja";
  }

  return (
    <>
      <div className="stats-big-title-al">
        <p>Déconnexion</p>
      </div>

      <div onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div className="logout-question-al">
        <p>Se déconnecter ?</p>
      </div>

      <div className="logout-al">
        <div className="a">
          <button onClick={togglePopup}>Oui</button>
        </div>

        <div className="b">
          <NavLink to="/profil">
            <button>Non</button>
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="popup-main">
            <div className="popup">
              <span onClick={togglePopup} className="close-popup">
                &times;
              </span>
              <div className="e">
                <p>Êtes-vous sûr(e) de vouloir vous déconnecter ?</p>
                <div className="display">
                  <div className="no">
                    <button>Non</button>
                  </div>

                  <div className="yes">
                    <button>Oui</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
