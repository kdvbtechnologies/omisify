import { NavLink } from "react-router-dom";
import PartnerNav from "./PartnerNav";

export default function PartnerNavMenu() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <PartnerNav />
      <div className="menu-navigation">
        <div className="menu-navigation-title">
          <p>Menu</p>
        </div>

        <NavLink className="li" to="/update">
          <li>Mise à jour</li>
        </NavLink>

        <NavLink className="li" to="/program">
          <li>Programme</li>
        </NavLink>

        <NavLink className="li" to="/partner-contact">
          <li>Service</li>
        </NavLink>

        <NavLink className="li" to="/infos">
          <li>Informations</li>
        </NavLink>

        <NavLink className="li" to="/update-point">
          <li>Actualisation</li>
        </NavLink>

        <NavLink className="li" to="/bonus">
          <li>Bonus</li>
        </NavLink>

        <NavLink className="li" to="/logout">
          <li>Déconnexion</li>
        </NavLink>

        <div className="omisify-copy">
          <div className="omisify-copyright">
            <p>© 2022 Omisify</p>
          </div>
        </div>
      </div>
    </div>
  );
}
