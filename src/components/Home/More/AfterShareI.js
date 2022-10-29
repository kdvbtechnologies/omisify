import { NavLink } from "react-router-dom";

export default function AfterShareI() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

  return (
    <>
      <div className="email-shrink">
        <div className="email-c">
          <p>
            Omisify à réunie toutes les conditions pour vous permettre de gagner
            de l'argent avec vos abonnés. Commencer maintenant et gagner de
            l'argent avec vos abonnés, Utilisez-les à votre avantage et gagnez
            de l'argent avec Omisify
          </p>
          <div className="align-button">
            {userId && shortname && partnername && name ? (
              <>
                <NavLink to="/partner">
                  <button>Devenir Partenaire Omisify</button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/signup">
                  <button>Devenir Partenaire Omisify</button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="see-more">
        <NavLink to="/no-influencer">
          <button>Voir plus</button>
        </NavLink>
      </div>
    </>
  );
}
