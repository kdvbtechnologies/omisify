import { NavLink } from "react-router-dom";

export default function SignupJA() {
  return (
    <>
      <div className="signup-ja">
        <div className="input">
          <div className="before-title">
            <p>Inscrivez votre entreprise rapidement et créer vos publicités</p>
          </div>

          <div className="title">
            <p>Inscription</p>
          </div>

          <div className="a">
            <p>Nom de l'entreprise</p>
            <input type="text" placeholder="Nom de l'entreprise" />
          </div>

          <div className="a">
            <p>E-mail de l'entreprise</p>
            <input type="text" placeholder="E-mail de l'entreprise" />
          </div>

          <div className="a">
            <p>Mot de passe</p>
            <input type="text" placeholder="Mot de passe" />
          </div>

          <NavLink to="/signup-success-ja">
            <button>S'inscrire gratuitement</button>
          </NavLink>

          <div className="display">
            <p>J'ai déjà un compte.</p>
            <NavLink className="navlink" to="/login-ja">
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
              de Jamelfase.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
