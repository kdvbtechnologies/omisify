import { NavLink } from "react-router-dom";

export default function LoginAl() {
  return (
    <>
      <div className="signup-al">
        <div className="a">
          <p>
            Connectez-vous à votre compte{" "}
            <NavLink className="navlink" to="/">
              Alrani
            </NavLink>{" "}
            pour télécharger gratuitement les PDF de vos auteurs préférés
          </p>
        </div>

        <div className="b">
          <div className="title">
            <p>Connexion</p>
          </div>

          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Mot de passe" />

          <NavLink to="/login-success-al">
            <button>Se connecter</button>
          </NavLink>

          <div className="c">
            <p>Je n'ai pas de compte.</p>
            <NavLink className="navlink" to="/signup-al">
              <p style={{ color: "#00cc00" }}>S'inscrire</p>
            </NavLink>
          </div>

          <NavLink
            className="navlink-forgot-password-partner-vi"
            to="/forgot-password-al"
          >
            <p
              style={{
                padding: "20px 0px",
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
