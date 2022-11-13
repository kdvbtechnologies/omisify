import { NavLink } from "react-router-dom";

export default function LogoutConfirmJA() {
  function nowLogout() {
    localStorage.removeItem("https://jamelfase.com/userId");
    localStorage.removeItem("https://jamelfase.com/shortname");

    window.location = "/secure-logout-confirm-ja";
  }

  return (
    <>
      <div className="stats-big-titleb">
        <p>Déconnexion</p>
      </div>

      <div className="logout-questionb">
        <p>Êtes-vous sûr(e) de vouloir vous déconnecter ?</p>
      </div>

      <div className="logout-confirmb">
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
