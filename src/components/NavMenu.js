import { NavLink } from "react-router-dom";
import PartnerNavigation from "./Partner-Navigation";

export default function NavMenu() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <PartnerNavigation />
      <div className="menu-navigation">
        <div className="menu-navigation-title">
          <p>Menu</p>
        </div>

        <NavLink className="li" to="/program">
          <li>Programme</li>
        </NavLink>

        <NavLink className="li" to="/contact">
          <li>Service</li>
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
