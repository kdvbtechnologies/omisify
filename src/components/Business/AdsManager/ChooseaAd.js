import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function ChooseaAd() {
  const navigate = useNavigate();

  return (
    <>
      <div className="ad-menu">
        <div className="title">
          <p>Choisissez une publicité</p>
        </div>

        <div onClick={() => navigate(-1)}>
          <Back />
        </div>

        <div className="a">
          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/real-time-results">
            <p>Chaussure à vendre à Bon Prix</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink">
            <p>John Foster à vendre</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
