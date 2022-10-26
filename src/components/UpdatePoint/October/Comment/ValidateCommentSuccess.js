import { NavLink } from "react-router-dom";

export default function ValidateCommentSuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="validate-comment-success">
        <div className="title">
          <p>Validation Réussie !</p>
        </div>
        <NavLink to="/update-point">
          <button>Terminer</button>
        </NavLink>
      </div>
    </div>
  );
}
