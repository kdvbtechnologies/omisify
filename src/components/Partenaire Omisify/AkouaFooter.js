import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 points</li>
          <li>Commentaires : 135 point(s)</li>
          <li>Publications : 3 point(s)</li>
          <li>Messages & PCA : 80 point(s)</li>
          <li>Code Bonus : 0 point(s)</li>
          <li>Total des Points : 318 point(s)</li>
          <li>Valeur des Points : 0.318€</li>
          <li>Likes : 0.0004€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0.3184€</p>
        </div>
      </div>
      <div className="request-money">
        <NavLink to="/akoua-contact">
          <button>Demander ma rémunération</button>
        </NavLink>
      </div>
    </>
  );
}
