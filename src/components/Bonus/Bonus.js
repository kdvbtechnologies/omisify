import { NavLink } from "react-router-dom";

export default function Bonus() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <NavLink to="/secure-menu">
          <button>Retour</button>
        </NavLink>
      </div>

      <div className="bonus-title">
        <p>Différents types de Bonus</p>
      </div>

      <div className="bonus">
        <NavLink className="li" to="/welcome-bonus">
          <li>Bonus de Bienvenue</li>
        </NavLink>

        <NavLink className="li" to="/secure-days-of-generosity">
          <li>Journées de générosité</li>
        </NavLink>
      </div>
    </div>
  );
}
