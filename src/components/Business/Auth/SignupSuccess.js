import { NavLink } from "react-router-dom";

export default function SignupSuccessJA() {
  return (
    <>
      <div className="signup-ja">
        <div className="input">
          <div className="title">
            <p style={{ marginTop: "100px" }}>Inscription réussi !</p>
          </div>

          <p
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              marginTop: "10px",
            }}
          >
            Cliquer sur Continuer pour aller sur la page de connexion
          </p>

          <NavLink to="/login-ja">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
