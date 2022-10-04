import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 points</li>
          <li>Commentaires : 196 point(s)</li>
          <li>Publications : 5 point(s)</li>
          <li>Messages & PCA : 232 point(s)</li>
          <li>Code Bonus : 2 point(s)</li>
          <li>Total des Points : 535 point(s)</li>
          <li>Valeur des Points : 0.535€</li>
          <li>Likes : 0.0007€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0.5357€</p>
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
