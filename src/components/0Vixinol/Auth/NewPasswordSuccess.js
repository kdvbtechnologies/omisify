import { NavLink } from "react-router-dom";

export default function NewPasswordSuccessVI() {
  return (
    <>
      <div className="signup-vi">
        <div className="signup-vi-border">
          <div className="title">
            <p>Modification réussi !</p>
          </div>

          <p>
            Continuer sur la page de connexion pour vous connecter avec votre
            nouveau mot de passe
          </p>

          <NavLink to="/login-vi">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
