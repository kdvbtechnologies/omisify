import { NavLink } from "react-router-dom";

export default function GbetindeFooter() {
  return (
    <>
      <div>
        <div className="partner-stats">
          <p>Statistiques </p>
          <li>Commentaires : 0 point(s)</li>
          <li>Messages : 1 point(s)</li>
          <li>Publications : 0 point(s)</li>
          <li>Total des Points : 1 point(s)</li>
          <li>Valeur des Points : 0.001€</li>
          <li>Likes : 0€</li>
        </div>
        <div className="partner-money">
          <p>Gains : 0.001€</p>
        </div>
      </div>
      <div className="request-money">
        <NavLink to="/gbetinde-contact">
          <button>Demander ma rémunération</button>
        </NavLink>
      </div>
    </>
  );
}
