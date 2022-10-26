import { NavLink } from "react-router-dom";

export default function PartnerNavigation() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");
  const welcomebonus = localStorage.getItem("https://omisify.com/welcomebonus");

  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          {userId && shortname && partnername && name ? (
            <>
              <NavLink className="navlink" to="/partner">
                <li>{shortname}</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="navlink" to="/partner">
                <li>Connexion</li>
              </NavLink>
            </>
          )}

          {userId && shortname && partnername && name ? (
            <>
              {welcomebonus ? (
                <>
                  <NavLink className="navlink" to="/secure-menu">
                    <li>Menu</li>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="navlink" to="/guides">
                    <li>Menu</li>
                  </NavLink>
                </>
              )}
            </>
          ) : (
            <>
              <NavLink className="navlink" to="/menu">
                <li>Menu</li>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}
