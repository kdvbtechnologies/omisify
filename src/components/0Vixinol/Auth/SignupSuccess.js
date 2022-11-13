import { NavLink } from "react-router-dom";

export default function SignupSuccessVI() {
  return (
    <>
      <div className="signup-vi">
        <div className="signup-vi-border">
          <div className="title">
            <p>Inscription réussi !</p>
          </div>

          <p>Cliquer sur Continuer pour aller sur la page de connexion</p>

          <NavLink to="/login-vi">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
