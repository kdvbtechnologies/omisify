import { NavLink } from "react-router-dom";

export default function AfterDev() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <NavLink to="/secure-menu">
          <button>Retour</button>
        </NavLink>
      </div>

      <div className="others">
        <div className="a">
          <div className="hr">
            <hr />
          </div>
          <NavLink className="navlink" to="/complete">
            <p>Fonctionnalités Complètes</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/incomplete">
            <p>Fonctionnalités Incomplètes</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
