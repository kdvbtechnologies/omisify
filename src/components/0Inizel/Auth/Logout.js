import { NavLink, useNavigate } from "react-router-dom";
import Back from "../Back/Back";

export default function LogoutIn() {
  const navigate = useNavigate();

  return (
    <>
      <div className="stats-big-title-in">
        <p>Déconnexion</p>
      </div>

      <div onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div className="logout-question-in">
        <p>Se déconnecter ?</p>
      </div>
      <div className="logout-in">
        <div className="a">
          <NavLink to="/profil">
            <button>Annuler</button>
          </NavLink>
        </div>

        <div className="b">
          <NavLink to="/logout-confirm-in">
            <button>Se déconnecter</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
