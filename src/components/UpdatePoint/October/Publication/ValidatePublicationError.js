import { NavLink } from "react-router-dom";

export default function ValidatePublicationError() {
  return (
    <>
      <div className="validate-comment-error">
        <div className="title">
          <p>Validation Impossible !</p>
        </div>
        <NavLink to="/before-calcul-publication">
          <button>Réessayer</button>
        </NavLink>
      </div>
    </>
  );
}
