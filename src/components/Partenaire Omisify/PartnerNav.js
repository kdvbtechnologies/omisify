import { NavLink } from "react-router-dom";

export default function PartnerNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/partner-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/partner">
            <li> _ _ _</li>
          </NavLink>
          <NavLink className="navlink" to="/partner-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
