import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <>
      <div className="settings-nav-b">
        <div className="title">
          <p>Paramètres</p>
        </div>

        <div onClick={() => navigate(-1)}>
          <Back />
        </div>

        <div className="a">
          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/settings-infos">
            <p>Informations de l'entreprise</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/geolocation">
            <p>Géolocalisation</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/logoutb">
            <p>Déconnexion</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
