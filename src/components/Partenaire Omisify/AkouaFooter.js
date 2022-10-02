import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 points</li>
          <li>Commentaires : 186 point(s)</li>
          <li>Publications : 5 point(s)</li>
          <li>Messages & PCA : 88 point(s)</li>
          <li>Code Bonus : 0 point(s)</li>
          <li>Total des Points : 379 point(s)</li>
          <li>Valeur des Points : 0.379€</li>
          <li>Likes : 0.0006€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0.3796€</p>
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
