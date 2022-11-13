import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function LoginPartnerVI() {
  return (
    <>
      <Helmet>
        <body className="signup-vi-body-background-color"></body>
      </Helmet>

      <div className="signup-vi">
        <div className="signup-vi-border">
          <div className="title">
            <p>Connexion à votre compte Vixinol Store for Developers</p>
          </div>

          <div className="a">
            <p>E-mail</p>
            <input type="text" placeholder="E-mail" />
          </div>

          <div className="a">
            <p>Mot de passe</p>
            <input type="text" placeholder="Mot de passe" />
          </div>

          <NavLink to="/login-success-partner-vi">
            <button>Se connecter</button>
          </NavLink>

          <div className="display">
            <p>Je n'ai pas de compte.</p>
            <NavLink className="navlink" to="/signup-partner-vi">
              <p>S'inscrire</p>
            </NavLink>
          </div>

          <NavLink
            className="navlink-forgot-password-partner-vi"
            to="/forgot-password-partner-vi"
          >
            <p
              style={{
                padding: "20px 20px",
                marginTop: "20px",
                textDecoration: "underline",
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
