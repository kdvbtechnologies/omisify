import { NavLink } from "react-router-dom";

export default function PartnerNavigation() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/partner">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/partner">
            <li>Partenaire</li>
          </NavLink>

          <NavLink className="navlink" to="/contact">
            <li>Contact</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
