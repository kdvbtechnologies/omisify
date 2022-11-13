import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function SignupVI() {
  return (
    <>
      <Helmet>
        <body className="signup-vi-body-background-color"></body>
      </Helmet>

      <div className="signup-vi">
        <div className="signup-vi-border">
          <div className="title">
            <p>S'inscrire sur Vixinol Store</p>
          </div>

          <div className="a">
            <p>Nom d'utilisateur</p>
            <input type="text" placeholder="Nom d'utilisateur" />
          </div>

          <div className="a">
            <p>E-mail</p>
            <input type="text" placeholder="E-mail" />
          </div>

          <div className="a">
            <p>Mot de passe</p>
            <input type="text" placeholder="Mot de passe" />
          </div>

          <NavLink to="/signup-success-vi">
            <button>S'inscrire gratuitement</button>
          </NavLink>

          <div className="display">
            <p>J'ai déjà un compte.</p>
            <NavLink className="navlink" to="/login-vi">
              <p>Se connecter</p>
            </NavLink>
          </div>

          <div className="b">
            <p>
              En vous inscrivant, vous acceptez les{" "}
              <NavLink className="navlink" to="/">
                Conditions d'Utilisation
              </NavLink>{" "}
              et la{" "}
              <NavLink className="navlink" to="/">
                Politique de Confidentialité
              </NavLink>{" "}
              de Vixinol Store.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
