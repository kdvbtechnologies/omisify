import { NavLink } from "react-router-dom";

export default function LogoutConfirmVI() {
  function nowLogout() {
    localStorage.removeItem("https://vixinol.com/userId");
    localStorage.removeItem("https://vixinol.com/shortname");

    window.location = "/secure-logout-confirm-vi";
  }

  return (
    <>
      <div className="stats-big-title-vi">
        <p>Déconnexion</p>
      </div>

      <div className="logout-question-vi">
        <p>Êtes-vous sûr(e) de vouloir vous déconnecter ?</p>
      </div>

      <div className="logout-confirm-vi">
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
