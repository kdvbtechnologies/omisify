import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 points</li>
          <li>Commentaires : 190 point(s)</li>
          <li>Publications : 5 point(s)</li>
          <li>Messages & PCA : 187 point(s)</li>
          <li>Code Bonus : 2 point(s)</li>
          <li>Total des Points : 484 point(s)</li>
          <li>Valeur des Points : 0.484€</li>
          <li>Likes : 0.0007€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0.4847€</p>
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
