import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function ForgotPasswordPartnerVI() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <body className="signup-vi-body-background-color"></body>
      </Helmet>

      <div className="signup-vi">
        <div className="signup-vi-border">
          <div onClick={() => navigate(-1)}>
            <Back />
          </div>

          <div className="title">
            <p>Mot de passe oublié ?</p>
          </div>

          <p>
            Réinitialiser le mot de passe de votre compte Vixinol Store for
            Developers en entrant votre adresse e-mail ou votre id
          </p>

          <div className="a">
            <p>Entrer votre adresse e-mail ou votre id</p>
            <input type="text" placeholder="E-mail ou Id" />
          </div>

          <NavLink to="/new-password-partner-vi">
            <button>Valider</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
