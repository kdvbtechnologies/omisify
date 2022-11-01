import { NavLink } from "react-router-dom";

export default function ValidateLikesCommentError() {
  return (
    <>
      <div className="validate-comment-error">
        <div className="title">
          <p>Validation Impossible !</p>
        </div>

        <NavLink to="/before-calcul-likes-comment">
          <button>Réessayer</button>
        </NavLink>
      </div>
    </>
  );
}
