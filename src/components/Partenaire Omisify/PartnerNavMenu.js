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
        <NavLink className="li" to="/program">
          <li>Programme</li>
        </NavLink>
        <NavLink className="li" to="/partner-historical">
          <li>Historique</li>
        </NavLink>
        <NavLink className="li" to="/partner-trans">
          <li>Transparence</li>
        </NavLink>
        <NavLink className="li" to="/partner-contact">
          <li>Contact</li>
        </NavLink>
        <NavLink className="li" to="/settings">
          <li>Paramètres</li>
        </NavLink>
        <NavLink className="li" to="/stats">
          <li>Statistiques</li>
        </NavLink>
        <NavLink className="li" to="/update">
          <li>Actualiser</li>
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
