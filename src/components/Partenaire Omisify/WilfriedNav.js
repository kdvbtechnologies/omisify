import { NavLink } from "react-router-dom";

export default function WilfriedNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/wilfried-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/wilfried">
            <li>Wilfried</li>
          </NavLink>
          <NavLink className="navlink" to="/wilfried-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
