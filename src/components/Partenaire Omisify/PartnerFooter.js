import { NavLink } from "react-router-dom";

export default function PartnerFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Bonus de Bienvenue : _ _ _</li>
          <li>Commentaires : _ _ _</li>
          <li>Likes (commentaire) : _ _ _</li>
          <li>Publications : _ _ _</li>
          <li>Likes (publication) : _ _ _</li>
          <li>PWI : _ _ _</li>
          <li>Messages : _ _ _</li>
          <li>MWI : _ _ _</li>
          <li>E-mail : _ _ _</li>
          <li>Code Bonus : _ _ _</li>
          <li>Total des Points : _ _ _</li>
          <li>Valeur des Points : _ _ _</li>
        </div>
        <div className="partner-money">
          <p>Gains : _ _ _</p>
        </div>
      </div>
      <div className="request-money">
        <NavLink to="/partner-contact">
          <button>Demander ma rémunération</button>
        </NavLink>
      </div>
    </>
  );
}
