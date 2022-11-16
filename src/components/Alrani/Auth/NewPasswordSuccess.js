import { NavLink } from "react-router-dom";

export default function NewPasswordSuccessAl() {
  return (
    <>
      <div className="signup-al">
        <div className="b">
          <div className="title">
            <p style={{ margin: "0px 20px" }}>Modification réussi !</p>
          </div>

          <p style={{ margin: "0px 20px" }}>
            Continuer sur la page de connexion pour vous connecter avec votre
            nouveau mot de passe
          </p>

          <NavLink to="/login-al">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
