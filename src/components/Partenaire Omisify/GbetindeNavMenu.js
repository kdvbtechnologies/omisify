import { NavLink } from "react-router-dom";
import GbetindeNav from "./GbetindeNav";

export default function GbetindeNavMenu() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <GbetindeNav />
      <div className="menu-navigation">
        <div className="menu-navigation-title">
          <p>Menu</p>
        </div>
        <NavLink className="li" to="/program">
          <li>Programme</li>
        </NavLink>
        <NavLink className="li" to="/gbetinde-historical">
          <li>Historique</li>
        </NavLink>
        <NavLink className="li" to="/gbetinde-trans">
          <li>Transparence</li>
        </NavLink>
        <NavLink className="li" to="/gbetinde-contact">
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
