import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function NewPasswordJA() {
  const navigate = useNavigate();

  return (
    <>
      <div className="signup-ja">
        <div className="input">
          <div onClick={() => navigate(-1)}>
            <Back />
          </div>

          <div className="before-title">
            <p>
              Créer sur cette page un nouveau mot de passe pour votre Compte
              Jamelfase
            </p>
          </div>

          <div className="title">
            <p style={{ marginLeft: "20px", marginRight: "20px" }}>
              Création d'un nouveau mot de passe
            </p>
          </div>

          <div className="a">
            <p>Entrer un nouveau mot de passe</p>
            <input type="text" placeholder="Nouveau mot de passe" />
          </div>

          <NavLink to="/new-password-success-ja">
            <button>Créer</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
