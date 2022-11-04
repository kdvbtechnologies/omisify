import { NavLink } from "react-router-dom";

export default function ValidateMessageError() {
  return (
    <>
      <div className="validate-comment-error">
        <div className="title">
          <p>Validation Impossible !</p>
        </div>
        <NavLink to="/before-calcul-message">
          <button>Réessayer</button>
        </NavLink>
      </div>
    </>
  );
}
