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
      <div className="others">
        <p style={{ padding: "0px 20px" }}>Attention !</p>
        <p style={{ padding: "20px" }}>
          Toutes les Fonctionnalités présentes sur cette page sont en cours de
          développement et de test. Ne les utilisez pas
        </p>

        <div className="a">
          <div className="hr">
            <hr />
          </div>
          <NavLink className="navlink">
            <p>Bonus de Condition Respecté</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
