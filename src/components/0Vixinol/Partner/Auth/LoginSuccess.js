import { NavLink } from "react-router-dom";

export default function LoginSuccessPartnerVI() {
  return (
    <>
      <div className="signup-vi">
        <div className="signup-vi-border">
          <div className="title">
            <p style={{ textAlign: "center" }}>Connexion réussi !</p>
          </div>

          <NavLink to="/profil-partner-vs">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
