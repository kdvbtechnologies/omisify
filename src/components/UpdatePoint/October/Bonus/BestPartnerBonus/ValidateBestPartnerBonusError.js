import { NavLink } from "react-router-dom";

export default function ValidateBestPartnerBonusError() {
  return (
    <>
      <div className="validate-comment-error">
        <div className="title">
          <p>Validation Impossible !</p>
        </div>

        <NavLink to="/before-calcul-best-partner-bonus">
          <button>Réessayer</button>
        </NavLink>
      </div>
    </>
  );
}
