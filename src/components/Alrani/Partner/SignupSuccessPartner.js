import { NavLink } from "react-router-dom";

export default function SignupSuccessPartnerAl() {
  return (
    <>
      <div className="signup-al">
        <div className="b">
          <div className="title">
            <p style={{ margin: "0px 20px" }}>Inscription réussi !</p>
          </div>

          <p style={{ margin: "0px 20px" }}>
            Cliquer sur Continuer pour aller sur la page de connexion
          </p>

          <NavLink to="/login-partner-al">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
