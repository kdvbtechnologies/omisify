import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function PartnerNav() {
  const [user, setUser] = useState([]);

  async function User() {
    await axios
      .get(`https://famous-peplum-dove.cyclic.app/api/user/`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }
  User();

  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/partner-home">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          <NavLink className="navlink" to="/partner">
            <li>{user.shortname}</li>
          </NavLink>
          <NavLink className="navlink" to="/partner-menu">
            <li>Menu</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
