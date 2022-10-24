import { NavLink } from "react-router-dom";

export default function AfterShareI() {
  return (
    <div className="email-shrink">
      <div className="email-c">
        <p>
          Omisify à réunie toutes les conditions pour vous permettre de gagner
          de l'argent avec vos abonnés. Commencer maintenant et gagner de
          l'argent avec vos abonnés, Utilisez-les à votre avantage et gagnez de
          l'argent avec Omisify
        </p>
        <div className="align-button">
          <NavLink to="/signup">
            <button>Devenir Partenaire Omisify</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
