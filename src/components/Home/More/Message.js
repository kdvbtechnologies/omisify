import { NavLink } from "react-router-dom";

export default function Message() {
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
          <NavLink to="/signup">
            <button>Devenir Partenaire Omisify</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
