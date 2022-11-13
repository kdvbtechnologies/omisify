import { NavLink } from "react-router-dom";

export default function SignupPartnerAl() {
  return (
    <>
      <div className="signup-al">
        <div className="a">
          <p>
            Inscrivez-vous sur{" "}
            <NavLink className="navlink" to="/">
              Alrani
            </NavLink>{" "}
            pour publier gratuitement les PDF de vos ouvrages
          </p>
        </div>

        <div className="b">
          <div className="title">
            <p>Inscription</p>
          </div>

          <input type="text" placeholder="Nom de l'Auteur" />
          <input type="text" placeholder="E-mail de l'Auteur" />
          <input type="text" placeholder="Mot de passe" />

          <NavLink to="/signup-success-partner-al">
            <button>S'inscrire gratuitement</button>
          </NavLink>

          <div className="c">
            <p>J'ai déjà un compte.</p>
            <NavLink className="navlink" to="/login-partner-al">
              <p style={{ color: "#00cc00" }}>Se connecter</p>
            </NavLink>
          </div>

          <div className="d">
            <p>
              En vous inscrivant, vous acceptez les{" "}
              <NavLink className="navlink" to="/">
                Conditions d'Utilisation
              </NavLink>{" "}
              et la{" "}
              <NavLink className="navlink" to="/">
                Politique de Confidentialité
              </NavLink>{" "}
              d'Alrani.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
