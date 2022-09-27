import { NavLink } from "react-router-dom";

export default function OyonaNavigation() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/oyona-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/oyona">
            <li>Oyona</li>
          </NavLink>
          <NavLink className="navlink" to="/oyona-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
