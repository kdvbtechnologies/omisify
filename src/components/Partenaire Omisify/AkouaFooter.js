import { NavLink } from "react-router-dom";

export default function AkouaFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : 100 points</li>
          <li>Commentaires : 321 point(s)</li>
          <li>Likes (commentaire) : 0 point(s)</li>
          <li>Publications : 20 point(s)</li>
          <li>Likes (publication) : 0.00029€</li>
          <li>PWI : 0 point(s)</li>
          <li>Messages : 1400 point(s)</li>
          <li>MWI : 40 point(s)</li>
          <li>E-mail : 0 point(s)</li>
          <li>Code Bonus : 2 point(s)</li>
          <li>Total des Points : 1989.2 point(s)</li>
          <li>Valeur des Points : 1.9892€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 1.98949€</p>
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
