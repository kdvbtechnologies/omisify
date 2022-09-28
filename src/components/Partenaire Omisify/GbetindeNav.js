import { NavLink } from "react-router-dom";

export default function GbetindeNav() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/gbetinde-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/gbetinde">
            <li>Gbetinde</li>
          </NavLink>
          <NavLink className="navlink" to="/gbetinde-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
