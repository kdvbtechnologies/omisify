import { NavLink } from "react-router-dom";

export default function LaminouNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/laminou-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/laminou">
            <li>Laminou</li>
          </NavLink>
          <NavLink className="navlink" to="/laminou-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
