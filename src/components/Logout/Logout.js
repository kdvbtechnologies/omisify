import { NavLink } from "react-router-dom";
import LoginNav from "../Auth/LoginNav";

export default function Logout() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <div className="logout">
        <p>Voulez-vous vous déconnectez d'Omisify ?</p>

        <div className="button">
          <div className="yes">
            <NavLink to="/secure-logout-confirm">
              <button>Oui</button>
            </NavLink>
          </div>

          <div className="no">
            <NavLink to="/partner">
              <button>Non</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
