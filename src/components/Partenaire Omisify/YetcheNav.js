import { NavLink } from "react-router-dom";

export default function YetcheNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/yetche-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/yetche">
            <li>Yetche</li>
          </NavLink>
          <NavLink className="navlink" to="/yetche-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
