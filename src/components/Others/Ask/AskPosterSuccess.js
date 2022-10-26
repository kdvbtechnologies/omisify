import { NavLink } from "react-router-dom";

export default function AskPosterSuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family} className="ask-poster-success">
      <div className="title">
        <p>Demande Validé !</p>
      </div>
      <div className="a">
        <p>
          Contacter le{" "}
          <NavLink to="/partner-contact">Service Partenaire</NavLink> pour le
          retrait de vos affiches
        </p>
      </div>
      <NavLink to="/partner-contact">
        <button>Terminer</button>
      </NavLink>
    </div>
  );
}
