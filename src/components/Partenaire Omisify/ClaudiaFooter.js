import { NavLink } from "react-router-dom";

export default function ClaudiaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 points</li>
          <li>Commentaires : 0 point(s)</li>
          <li>Publications : 0 point(s)</li>
          <li>Messages & PCA : 0 point(s)</li>
          <li>Code Bonus : 0 point(s)</li>
          <li>Total des Points : 100 point(s)</li>
          <li>Valeur des Points : 0.1€</li>
          <li>Likes : 0€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0.1€</p>
        </div>
      </div>
      <div className="request-money">
        <NavLink to="/claudia-contact">
          <button>Demander ma rémunération</button>
        </NavLink>
      </div>
    </>
  );
}
