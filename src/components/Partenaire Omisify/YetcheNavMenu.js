import { NavLink } from "react-router-dom";
import YetcheNav from "./YetcheNav";

export default function YetcheNavMenu() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <YetcheNav />
      <div className="menu-navigation">
        <div className="menu-navigation-title">
          <p>Menu</p>
        </div>
        <NavLink className="li" to="/program">
          <li>Programme</li>
        </NavLink>
        <NavLink className="li" to="/yetche-historical">
          <li>Historique</li>
        </NavLink>
        <NavLink className="li" to="/yetche-trans">
          <li>Transparence</li>
        </NavLink>
        <NavLink className="li" to="/yetche-contact">
          <li>Contact</li>
        </NavLink>
        <NavLink className="li" to="/stats">
          <li>Statistiques Détaillés</li>
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
