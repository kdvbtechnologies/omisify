import { NavLink } from "react-router-dom";

export default function PartnerNav() {
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/partner">
            <li>{shortname}</li>
          </NavLink>
          <NavLink className="navlink" to="/secure-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
