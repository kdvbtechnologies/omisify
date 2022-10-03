import { NavLink } from "react-router-dom";
import ClaudiaNav from "./ClaudiaNav";

export default function ClaudiaNavMenu() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <ClaudiaNav />
      <div className="menu-navigation">
        <div className="menu-navigation-title">
          <p>Menu</p>
        </div>
        <NavLink className="li" to="/program">
          <li>Programme</li>
        </NavLink>
        <NavLink className="li" to="/claudia-all-histo">
          <li>Historique</li>
        </NavLink>
        <NavLink className="li" to="/claudia-trans">
          <li>Transparence</li>
        </NavLink>
        <NavLink className="li" to="/claudia-contact">
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
