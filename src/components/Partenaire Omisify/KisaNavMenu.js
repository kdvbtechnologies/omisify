import { NavLink } from "react-router-dom";
import KisaNav from "./KisaNav";

export default function KisaNavMenu() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <KisaNav />
      <div className="menu-navigation">
        <div className="menu-navigation-title">
          <p>Menu</p>
        </div>
        <NavLink className="li" to="/program">
          <li>Programme</li>
        </NavLink>
        <NavLink className="li" to="/kisa-historical">
          <li>Historique</li>
        </NavLink>
        <NavLink className="li" to="/kisa-trans">
          <li>Transparence</li>
        </NavLink>
        <NavLink className="li" to="/kisa-contact">
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
