import { NavLink } from "react-router-dom";

export default function ValidateM10kError() {
  return (
    <>
      <div className="validate-comment-error">
        <div className="title">
          <p>Validation Impossible !</p>
        </div>
        <NavLink to="/before-calcul-m10k">
          <button>Réessayer</button>
        </NavLink>
      </div>
    </>
  );
}
