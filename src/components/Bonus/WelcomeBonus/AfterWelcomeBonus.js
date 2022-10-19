import { NavLink } from "react-router-dom";

export default function WelcomeBonusSuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="welcome-bonus">
        <div className="title">
          <p>Demande envoyé !</p>
        </div>

        <NavLink to="/secure-menu">
          <button>Terminé</button>
        </NavLink>
      </div>
    </div>
  );
}
