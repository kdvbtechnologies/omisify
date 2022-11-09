import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function NewPasswordVI() {
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
            <p>Créer un nouveau mot de passe</p>
          </div>

          <p>Entrer un nouveau mot de passe pour votre compte Vixinol Store</p>

          <div className="a">
            <p>Entrer un nouveau mot de passe</p>

            <input type="text" placeholder="Nouveau mot de passe" />
          </div>

          <NavLink to="/new-password-success-vi">
            <button>Créer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
