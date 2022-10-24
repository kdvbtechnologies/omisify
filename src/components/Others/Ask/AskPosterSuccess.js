import { NavLink } from "react-router-dom";

export default function AskPosterSuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family} className="ask-poster-success">
      <div className="title">
        <p>Demande Envoyé !</p>
      </div>
      <NavLink to="/others">
        <button>Terminé</button>
      </NavLink>
    </div>
  );
}
