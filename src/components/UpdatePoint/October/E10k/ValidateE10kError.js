import { NavLink } from "react-router-dom";

export default function ValidateE10kError() {
  return (
    <>
      <div className="validate-comment-error">
        <div className="title">
          <p>Validation Impossible !</p>
        </div>

        <NavLink to="/before-calcul-e10k">
          <button>Réessayer</button>
        </NavLink>
      </div>
    </>
  );
}
