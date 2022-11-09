import { NavLink } from "react-router-dom";

export default function SignupAl() {
  return (
    <>
      <div className="signup-al">
        <div className="a">
          <p>
            Inscrivez-vous sur{" "}
            <NavLink className="navlink" to="/">
              Alrani
            </NavLink>{" "}
            pour télécharger gratuitement les PDF de vos auteurs préférés
          </p>
        </div>

        <div className="b">
          <div className="title">
            <p>Inscription</p>
          </div>

          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Mot de passe" />
          <button>S'inscrire gratuitement</button>

          <div className="c">
            <p>J'ai déjà un compte.</p>
            <NavLink className="navlink" to="/login-al">
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
