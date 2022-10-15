import { NavLink } from "react-router-dom";

export default function PartnerNavigation() {
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
            <li>Connexion</li>
          </NavLink>
          <NavLink className="navlink" to="/menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
