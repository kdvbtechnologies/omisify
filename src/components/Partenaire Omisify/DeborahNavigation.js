import { NavLink } from "react-router-dom";

export default function DeborahNavigation() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/deborah-partner">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/deborah">
            <li>Deborah</li>
          </NavLink>
          <NavLink className="navlink" to="/deborah-contact">
            <li>Contact</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
