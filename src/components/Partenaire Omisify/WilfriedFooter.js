import { NavLink } from "react-router-dom";

export default function WilfriedFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Commentaires : 12 point(s)</li>
          <li>Publications : 1 point(s)</li>
          <li>Messages & PCA : 7 point(s)</li>
          <li>Code Bonus : 2 point(s)</li>
          <li>Total des Points : 22 point(s)</li>
          <li>Valeur des Points : 0.012€</li>
          <li>Likes : 0.0228€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0.0348€</p>
        </div>
      </div>
      <div className="request-money">
        <NavLink to="/wilfried-contact">
          <button>Demander ma rémunération</button>
        </NavLink>
      </div>
    </>
  );
}
