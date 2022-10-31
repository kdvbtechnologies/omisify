import { NavLink } from "react-router-dom";

export default function Incomplete() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <NavLink to="/after-dev">
          <button>Retour</button>
        </NavLink>
      </div>
      <p>Attention !</p>
      <p>
        Toutes les Fonctionnalités présentes sur cette page sont en cours de
        développement et de test. Ne les utilisez pas
      </p>

      <NavLink>
        <p>E10k</p>
      </NavLink>
    </div>
  );
}
