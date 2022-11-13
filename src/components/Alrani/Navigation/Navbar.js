import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavbarAl() {
  const [activeColor, setActiveColor] = useState(true);

  function Color() {
    setActiveColor(!activeColor);
  }

  return (
    <>
      <div className="navbar-al">
        <div className="left">
          <NavLink className="navlink" to="">
            <p> Alrani</p>
          </NavLink>
        </div>

        <div className="right">
          <NavLink className="navlink" to="/home-al">
            <li>Accueil</li>
          </NavLink>

          <NavLink className="navlink" to="">
            <li>Service</li>
          </NavLink>

          <NavLink className="navlink" to="">
            <li>Tarifs</li>
          </NavLink>

          <NavLink className="navlink" to="">
            <li>Contact</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
