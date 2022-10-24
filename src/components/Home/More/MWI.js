import { NavLink } from "react-router-dom";

export default function MWI() {
  return (
    <div className="email-shrink">
      <div className="email-a">
        <i>MWI</i>
      </div>

      <div className="email-b">
        <p>Laissez vos proches vous faire gagner de l'argent</p>
      </div>

      <div className="email-c">
        <p>Gagner de l'argent sur chaque message envoyés à votre entourage</p>
        <p>
          Omisify vous donne la possibilité de gagner de l'argent en parlant des
          entreprises ou en recommandant des produits lors de vos conversations
          avec vos proches
        </p>
        <p>
          Laissez vos proches vous faire gagner de l'argent, Utilisez-les à
          votre avantage et gagner de l'argent avec Omisify
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
