import { NavLink } from "react-router-dom";
import LoginNav from "../Auth/LoginNav";

export default function LogoutConfirm() {
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  function Yes() {
    localStorage.removeItem("https://omisify.com/userId");
    localStorage.removeItem("https://omisify.com/shortname");
    localStorage.removeItem("https://omisify.com/welcomebonus");
    localStorage.removeItem("https://omisify.com/pointtcommentlife");
    window.location = "/after-logout";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <div className="logout-confirm">
        <p>Partenaire {shortname}, Souhaitez-vous vraiment quitter Omisify ?</p>
        <div className="button">
          <div className="no">
            <NavLink to="/partner">
              <button>Non, je suis toujours là</button>
            </NavLink>
          </div>

          <div className="yes">
            <button onClick={Yes}>Oui, je reviens bientot</button>
          </div>
        </div>
      </div>
    </div>
  );
}
