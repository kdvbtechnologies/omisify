import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function LoginVI() {
  return (
    <>
      <Helmet>
        <body className="signup-vi-body-background-color"></body>
      </Helmet>

      <div className="signup-vi">
        <div className="signup-vi-border">
          <div className="title">
            <p>Se connecter sur Vixinol Store</p>
          </div>

          <div className="a">
            <p>Entrer votre e-mail</p>
            <input type="text" placeholder="E-mail" />
          </div>

          <div className="a">
            <p>Entrer votre mot de passe</p>
            <input type="text" placeholder="Mot de passe" />
          </div>

          <button>Se connecter</button>

          <div className="display">
            <p>Je n'ai pas de compte.</p>
            <NavLink className="navlink" to="/signup-vi">
              <p>S'inscrire</p>
            </NavLink>
          </div>

          <NavLink
            className="navlink-forgot-password-partner-vi"
            to="/forgot-password-vi"
          >
            <p
              style={{
                padding: "20px 20px",
                marginTop: "20px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "#444",
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
