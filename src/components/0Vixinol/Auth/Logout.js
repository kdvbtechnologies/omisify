import { NavLink, useNavigate } from "react-router-dom";
import Back from "../Back/Back";

export default function LogoutVi() {
  const navigate = useNavigate();

  return (
    <>
      <div className="stats-big-title-vi">
        <p>Déconnexion</p>
      </div>

      <div onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div className="logout-question-vi">
        <p>Voulez-vous vous déconnecter ?</p>
      </div>
      <div className="logout-vi">
        <div className="a">
          <NavLink to="/profil">
            <button>Annuler</button>
          </NavLink>
        </div>

        <div className="b">
          <NavLink to="/logout-confirm-vi">
            <button>Se déconnecter</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
