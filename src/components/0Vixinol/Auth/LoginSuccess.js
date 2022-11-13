import { NavLink } from "react-router-dom";

export default function LoginSuccessVI() {
  return (
    <>
      <div className="signup-vi">
        <div className="signup-vi-border">
          <div className="title">
            <p style={{ textAlign: "center" }}>Connexion réussi !</p>
          </div>

          <NavLink to="/profil-vi">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
