import { NavLink } from "react-router-dom";

export default function LoginJA() {
  return (
    <>
      <div className="signup-ja">
        <div className="input">
          <div className="before-title">
            <p>Connectez-vous et gérer vos publicités</p>
          </div>

          <div className="title">
            <p>Connexion</p>
          </div>

          <div className="a">
            <p>E-mail de l'entreprise</p>
            <input type="text" placeholder="E-mail de l'entreprise" />
          </div>

          <div className="a">
            <p>Mot de passe</p>
            <input type="text" placeholder="Mot de passe" />
          </div>

          <NavLink to="/login-success-ja">
            <button>Se connecter</button>
          </NavLink>

          <div className="display">
            <p>Je n'ai pas de compte.</p>
            <NavLink className="navlink" to="/signup-ja">
              <p>S'inscrire</p>
            </NavLink>
          </div>

          <NavLink
            className="navlink-forgot-password-ja"
            to="/forgot-password-ja"
          >
            <p
              style={{
                padding: "20px 20px",
                marginTop: "20px",
                cursor: "pointer",
              }}
            >
              Mot de passe oublié
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
