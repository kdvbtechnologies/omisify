import { NavLink } from "react-router-dom";

export default function WilfriedFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Commentaires : 25 point(s)</li>
          <li>Publications : 1 point(s)</li>
          <li>Messages & PCA : 7 point(s)</li>
          <li>Code Bonus : 2 point(s)</li>
          <li>Total des Points : 35 point(s)</li>
          <li>Valeur des Points : 0.035€</li>
          <li>Likes : 0.0231€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0.0581€</p>
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
