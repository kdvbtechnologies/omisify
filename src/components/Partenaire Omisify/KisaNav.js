import { NavLink } from "react-router-dom";

export default function KisaNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/kisa-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/kisa">
            <li>Kisa</li>
          </NavLink>
          <NavLink className="navlink" to="/kisa-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
