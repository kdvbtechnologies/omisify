import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function ForgotPasswordJA() {
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
              Si vous avez oublié votre mot de passe, réinitialiser votre mot de
              passe sur cette page
            </p>
          </div>

          <div className="title">
            <p style={{ paddingRight: "20px", paddingLeft: "20px" }}>
              Réinitialisation du mot de passe
            </p>
          </div>

          <div className="a">
            <p>Entrer votre E-mail ou Id</p>
            <input type="text" placeholder="E-mail ou Id" />
          </div>

          <NavLink className="navlink-forgot-password-ja" to="/new-password-ja">
            <button>Valider</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
