import { NavLink } from "react-router-dom";

export default function NavbarB() {
  const family = {
    fontFamily:
      ' "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif ',
  };
  return (
    <div style={family}>
      <div className="navbarb">
        <div className="left-navigation">
          <NavLink className="navlinkb" to="/business">
            <li>Omisify B</li>
          </NavLink>
        </div>

        <div className="right-navigation">
          <NavLink className="navlinkb" to="/ads">
            <li>Publicité</li>
          </NavLink>

          <NavLink className="navlinkb" to="/omisify-b-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
