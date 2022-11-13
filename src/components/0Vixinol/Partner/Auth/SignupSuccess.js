import { NavLink } from "react-router-dom";

export default function SignupSuccessPartnerVI() {
  return (
    <>
      <div className="signup-vi">
        <div className="signup-vi-border">
          <div className="title">
            <p>Inscription réussi !</p>
          </div>

          <p>Cliquer sur Continuer pour aller sur la page de connexion</p>

          <NavLink to="/login-partner-vi">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
