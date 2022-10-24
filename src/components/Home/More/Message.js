import { NavLink } from "react-router-dom";

export default function Message() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

  return (
    <div className="email-shrink">
      <div className="email-a">
        <i>Message</i>
      </div>

      <div className="email-b">
        <p>Gagner de l'argent en envoyant des messages aux inconnus</p>
      </div>

      <div className="email-c">
        <p>
          Avec Omisify vous gagner de l'argent en envoyant des messages à
          n'importe qui sur les réseaux sociaux
        </p>

        <p>Commencer maintenant et gagner de l'argent avec Omisify</p>

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
  );
}
