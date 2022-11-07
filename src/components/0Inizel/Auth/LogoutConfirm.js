import { NavLink } from "react-router-dom";

export default function LogoutConfirmIN() {
  function nowLogout() {
    localStorage.removeItem("https://inizel.com/userId");
    localStorage.removeItem("https://inizel.com/shortname");

    window.location = "/secure-logout-confirm-in";
  }

  return (
    <>
      <div className="stats-big-title-in">
        <p>Déconnexion</p>
      </div>

      <div className="logout-question-in">
        <p>Êtes-vous sûr(e) de vouloir vous déconnecter ?</p>
      </div>

      <div className="logout-confirm-in">
        <div className="b">
          <button onClick={nowLogout}>Oui</button>
        </div>

        <div className="a">
          <NavLink to="/profil">
            <button>Non</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
