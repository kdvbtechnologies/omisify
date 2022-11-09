import { NavLink } from "react-router-dom";

export default function NewPasswordSuccessPartnerVI() {
  return (
    <>
      <div className="signup-vi">
        <div className="signup-vi-border">
          <div className="title">
            <p>Modification réussi !</p>
          </div>

          <p>
            Continuez sur la page de connexion pour vous connecter avec votre
            nouveau mot de passe
          </p>

          <NavLink to="/login-partner-vi">
            <button>Continuez</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
