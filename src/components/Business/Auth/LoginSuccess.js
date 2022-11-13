import { NavLink } from "react-router-dom";

export default function LoginSuccessJA() {
  return (
    <>
      <div className="signup-ja">
        <div className="input">
          <div className="title">
            <p style={{ marginTop: "100px", color: "black" }}>
              Connexion réussi !
            </p>
          </div>

          <NavLink to="/profil-ja">
            <button>Continuer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
