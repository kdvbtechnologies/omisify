import { NavLink } from "react-router-dom";

export default function ClaudiaNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/claudia-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/claudia">
            <li>Claudia</li>
          </NavLink>
          <NavLink className="navlink" to="/claudia-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
