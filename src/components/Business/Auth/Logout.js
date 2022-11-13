import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function LogoutJA() {
  const navigate = useNavigate();

  return (
    <>
      <div className="stats-big-titleb">
        <p>Déconnexion</p>
      </div>

      <div onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div className="logout-question">
        <p>Se déconnecter ?</p>
      </div>
      <div className="logout-b">
        <div className="a">
          <NavLink to="/profil">
            <button>Annuler</button>
          </NavLink>
        </div>

        <div className="b">
          <NavLink to="/logout-confirmb">
            <button>Se déconnecter</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
