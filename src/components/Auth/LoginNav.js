import { NavLink } from "react-router-dom";
import logo from "../../images/omisify-login.png";

export default function LoginNav() {
  return (
    <>
      <div className="navigation-login-nav">
        <div className="left-navigation">
          <NavLink className="navlink" to="/">
            <li>
              <img src={logo} alt="omisify logo" />
            </li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
