import { NavLink } from "react-router-dom";

export default function SaliouNavigation() {
  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/saliou-partner">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/saliou">
            <li>Saliou</li>
          </NavLink>
          <NavLink className="navlink" to="/saliou-contact">
            <li>Contact</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
