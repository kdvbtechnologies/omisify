import { NavLink } from "react-router-dom";

export default function UpdatePointSuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <>
      <div style={family}>
        <div className="welcome-bonus">
          <div className="title">
            <p>Résultat(s) Envoyé !</p>
          </div>
          <p>(En attente de validation)</p>

          <NavLink to="/update-point">
            <button>Terminé</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
