import { NavLink } from "react-router-dom";

export default function ValidationWelcomeBonus() {
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

        <div className="a">
          <p>
            La demande du Bonus de Bienvenue que vous avez faites est en attente
            de validation
          </p>
        </div>
        <NavLink to="/partner">
          <button>Terminé</button>
        </NavLink>
      </div>
    </div>
  );
}
