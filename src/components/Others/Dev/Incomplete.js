import { NavLink, useNavigate } from "react-router-dom";

export default function Incomplete() {
  const navigate = useNavigate();

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <p>Attention !</p>
      <p>
        Toutes les Fonctionnalités présentes sur cette page sont en cours de
        développement et de test. Ne les utilisez pas
      </p>

      <NavLink>
        <p>M10k</p>
      </NavLink>
    </div>
  );
}
