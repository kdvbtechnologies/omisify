import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function AdMenu() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ad-menu">
        <div className="title">
          <p>Publicité</p>
        </div>

        <div onClick={() => navigate(-1)}>
          <Back />
        </div>

        <div className="a">
          <div className="hr">
            <hr />
          </div>
          <NavLink className="navlink" to="/create-a-ad">
            <p>Créer une Publicité</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/choose-a-ad">
            <p>Gérer les publicités</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
