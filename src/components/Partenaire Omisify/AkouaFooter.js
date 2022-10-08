import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 points</li>
          <li>Commentaires : 315 point(s)</li>
          <li>Publications : 12 point(s)</li>
          <li>Messages & PCA : 1388 point(s)</li>
          <li>Code Bonus : 2 point(s)</li>
          <li>Total des Points : 1818 point(s)</li>
          <li>Valeur des Points : 1.818€</li>
          <li>Likes : 0.00029€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 1.81829€</p>
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
