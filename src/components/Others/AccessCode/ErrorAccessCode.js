import { NavLink } from "react-router-dom";

export default function ErrorAccessCode() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
  };

  return (
    <div style={family}>
      <div className="error-access-code">
        <div className="title">
          <p>Impossible de créé le Code d'accès !</p>
        </div>

        <NavLink to="/secure-access-code">
          <button>Rééssayer</button>
        </NavLink>
      </div>
    </div>
  );
}
