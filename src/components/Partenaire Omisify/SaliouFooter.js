import { NavLink } from "react-router-dom";

export default function SaliouFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Commentaires : 0 point(s)</li>
          <li>Messages : 0 point(s)</li>
          <li>Publications : 0 point(s)</li>
          <li>Points : 0 point(s)</li>
          <li>Likes : 0€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0€</p>
        </div>
      </div>
      <div className="request-money">
        <NavLink to="/sialou-contact">
          <button>Demander ma rémunération</button>
        </NavLink>
      </div>
    </>
  );
}
