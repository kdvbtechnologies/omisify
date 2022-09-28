import { NavLink } from "react-router-dom";

export default function AkouaNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/akoua-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/akoua">
            <li>Akoua</li>
          </NavLink>
          <NavLink className="navlink" to="/akoua-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
