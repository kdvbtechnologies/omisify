import { NavLink } from "react-router-dom";

export default function KarimNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/karim-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/karim">
            <li>Karim</li>
          </NavLink>
          <NavLink className="navlink" to="/karim-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
