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

      <NavLink to="/complete">
        <p>Fonctionnalités Complètes</p>
      </NavLink>

      <NavLink to="/incomplete">
        <p>Fonctionnalités Incomplètes</p>
      </NavLink>
    </div>
  );
}
