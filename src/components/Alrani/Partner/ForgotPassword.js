import { NavLink, useNavigate } from "react-router-dom";
import Back from "../Back/Back";

export default function ForgotPasswordPartnerAl() {
  const navigate = useNavigate();

  return (
    <>
      <div className="signup-al">
        <div className="b">
          <i>Compte d'Auteur</i>

          <div onClick={() => navigate(-1)}>
            <Back />
          </div>

          <div className="title">
            <p style={{ margin: "0px 20px" }}>
              Réinitialisation du mot de passe
            </p>
          </div>

          <p>Entrer votre adresse e-mail ou votre id</p>
          <input type="text" placeholder="E-mail ou Id" />

          <NavLink to="/new-password-partner-al">
            <button>Valider</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
