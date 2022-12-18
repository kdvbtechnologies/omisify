import { NavLink } from "react-router-dom";

export default function LogoutConfirm() {
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  function Yes() {
    localStorage.removeItem("https://omisify.com/userId");
    localStorage.removeItem("https://omisify.com/shortname");
    localStorage.removeItem("https://omisify.com/welcomebonus");
    localStorage.removeItem("https://omisify.com/pointtcommentlife");
    localStorage.removeItem("https://omisify.com/generositydays");
    window.location = "/after-logout";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="title-logout">
        <div className="display">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="30px"
            fill="red"
            version="1.1"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
          >
            <g>
              <path d="M52.45 28.768l-5-5a.968.968 0 00-1.367 1.368l3.317 3.316H35.267v2h14.132l-3.316 3.317a.966.966 0 101.367 1.367l5-5.001a.967.967 0 000-1.367z"></path>
              <path d="M40.267 39.452a1 1 0 00-1 1v10.79c0 1.043-.831 2.21-1.944 2.21h-6.056V9.868l-1.248-.534-15.942-6.77-.261-.112h23.507c1.217 0 1.944.993 1.944 1.952v15.048a1 1 0 102 0V4.404A3.951 3.951 0 0037.323.452H12.267a.99.99 0 00-.983.913l-.017-.008v53.677l17.185 7.306 2.815 1.208v-8.096h6.056c2.359 0 3.944-2.176 3.944-4.21v-10.79a1 1 0 00-1-1zm-11-28.213v49.213l-16-6.776V4.452l15.99 6.773.01.004v.01z"></path>
            </g>
          </svg>
          <p>Déconnexion</p>
        </div>
        {/* display */}
      </div>
      {/* title logout */}

      <div className="logout-confirm">
        <p>
          Partenaire {shortname}, Souhaitez-vous vraiment vous déconnecter
          d'Omisify ?
        </p>
        <div className="button">
          <div className="no">
            <NavLink to="/partner">
              <button>Non, je suis toujours là</button>
            </NavLink>
          </div>

          <div className="yes">
            <button onClick={Yes}>Oui, je reviens bientôt</button>
          </div>
        </div>
      </div>
    </div>
  );
}
