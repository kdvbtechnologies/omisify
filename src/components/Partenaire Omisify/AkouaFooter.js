import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 point(s)</li>
          <li>Commentaires : 363 point(s)</li>
          <li>Likes (commentaire) : 0 point(s)</li>
          <li>Publications : 23 point(s)</li>
          <li>Likes (publication) : 0.00029€</li>
          <li>PWI : 0 point(s)</li>
          <li>Messages : 1400.7 point(s)</li>
          <li>MWI : 125 point(s)</li>
          <li>M10k : 10 point(s)</li>
          <li>E-mail : 1 point(s)</li>
          <li>Code Bonus : 2 point(s)</li>
          <li>Total des Points : 2095.9 point(s)</li>
          <li>Valeur des Points : 2.0959€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 2.0959€</p>
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
