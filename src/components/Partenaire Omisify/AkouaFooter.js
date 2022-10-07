import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 points</li>
          <li>Commentaires : 282 point(s)</li>
          <li>Publications : 6 point(s)</li>
          <li>Messages & PCA : 910 point(s)</li>
          <li>Code Bonus : 2 point(s)</li>
          <li>Total des Points : 1301 point(s)</li>
          <li>Valeur des Points : 1.301€</li>
          <li>Likes : 0.00025€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 1.30125€</p>
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
