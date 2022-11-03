import { NavLink } from "react-router-dom";

export default function NavbarB() {
  const family = {
    fontFamily:
      ' "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif ',
  };

  /*
  
  <NavLink className="navlinkb" to="/ads">
            <li>Publicité</li>
          </NavLink>
          
  */
  return (
    <div style={family}>
      <div className="navbarb">
        <div className="left-navigation">
          <NavLink className="navlinkb" to="/business">
            <li>Omisify B</li>
          </NavLink>
        </div>

        <div className="right-navigation">
          <NavLink className="navlinkb" to="/create-a-ads">
            <li>Créer une publicité</li>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
