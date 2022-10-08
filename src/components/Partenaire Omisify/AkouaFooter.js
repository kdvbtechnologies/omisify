import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 points</li>
          <li>Commentaires : 310 point(s)</li>
          <li>Publications : 12 point(s)</li>
          <li>Messages & PCA : 1144 point(s)</li>
          <li>Code Bonus : 2 point(s)</li>
          <li>Total des Points : 1569 point(s)</li>
          <li>Valeur des Points : 1.569€</li>
          <li>Likes : 0.00029€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 1.56929€</p>
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
