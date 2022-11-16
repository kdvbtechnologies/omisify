import { NavLink } from "react-router-dom";

export default function NewPasswordSuccessJA() {
  return (
    <>
      <div className="signup-ja">
        <div className="input">
          <div className="title">
            <p style={{ marginTop: "100px" }}>Modification réussi !</p>
          </div>

          <p
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            Continuer sur la page de connexion pour vous connecter avec votre
            nouveau mot de passe
          </p>

          <NavLink to="/login-ja">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
