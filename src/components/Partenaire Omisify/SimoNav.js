import { NavLink } from "react-router-dom";

export default function SimoNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/simo-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/simo">
            <li>Simo</li>
          </NavLink>
          <NavLink className="navlink" to="/simo-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
