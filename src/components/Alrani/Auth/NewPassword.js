import { NavLink, useNavigate } from "react-router-dom";
import Back from "../Back/Back";

export default function NewPasswordAl() {
  const navigate = useNavigate();

  return (
    <>
      <div className="signup-al">
        <div className="b">
          <i>Compte Alrani</i>

          <div onClick={() => navigate(-1)}>
            <Back />
          </div>

          <div className="title">
            <p style={{ margin: "0px 20px" }}>Créer un nouveau mot de passe</p>
          </div>

          <p style={{ margin: "0px 20px" }}>
            Entrer un nouveau mot de passe pour votre Compte Alrani
          </p>
          <input type="text" placeholder="Nouveau mot de passe" />

          <NavLink to="/new-password-success-al">
            <button>Créer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
