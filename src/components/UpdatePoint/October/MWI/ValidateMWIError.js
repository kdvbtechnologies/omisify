import { NavLink } from "react-router-dom";

export default function ValidateMWIError() {
  return (
    <>
      <div className="validate-comment-error">
        <div className="title">
          <p>Validation Impossible !</p>
        </div>

        <NavLink to="/before-calcul-mwi">
          <button>Réessayer</button>
        </NavLink>
      </div>
    </>
  );
}
