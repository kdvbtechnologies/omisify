import { NavLink } from "react-router-dom";

export default function LoginSuccessPartnerAl() {
  return (
    <>
      <div className="signup-al">
        <div className="b">
          <div className="title">
            <p style={{ margin: "0px 20px" }}>Connexion réussi !</p>
          </div>

          <NavLink to="/profil-partner-al">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
