import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Commentaires : 12 point(s)</li>
          <li>Publications : 2 point(s)</li>
          <li>Messages & PCA : 80 point(s)</li>
          <li>Code Bonus : 0 point(s)</li>
          <li>Total des Points : 194 point(s)</li>
          <li>Valeur des Points : 0.194€</li>
          <li>Likes : 0.0002€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0.1942€</p>
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
