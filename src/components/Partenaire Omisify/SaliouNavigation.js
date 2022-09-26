import { NavLink } from "react-router-dom";

export default function SaliouNavigation() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/sialou-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/sialou">
            <li>Sialou</li>
          </NavLink>
          <NavLink className="navlink" to="/sialou-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
