import { NavLink } from "react-router-dom";
import KarimNav from "./KarimNav";

export default function KarimNavMenu() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <KarimNav />
      <div className="menu-navigation">
        <div className="menu-navigation-title">
          <p>Menu</p>
        </div>
        <NavLink className="li" to="/program">
          <li>Programme</li>
        </NavLink>
        <NavLink className="li" to="/karim-historical">
          <li>Historique</li>
        </NavLink>
        <NavLink className="li" to="/karim-trans">
          <li>Transparence</li>
        </NavLink>
        <NavLink className="li" to="/karim-contact">
          <li>Contact</li>
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
