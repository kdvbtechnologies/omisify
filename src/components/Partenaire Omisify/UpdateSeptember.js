import { NavLink } from "react-router-dom";

export default function UpdateSeptember() {
  return (
    <>
      <h1>Choisissez :</h1>
      <NavLink to="/secure-comment">
        <p>Commentaire</p>
      </NavLink>
      <NavLink to="/secure-email">
        <p>Email</p>
      </NavLink>
      <NavLink to="/secure-like-comment">
        <p>Like (commentaire)</p>
      </NavLink>
      <NavLink to="/secure-like-publication">
        <p>Like (publication)</p>
      </NavLink>
      <NavLink to="/secure-m10k">
        <p>M10k</p>
      </NavLink>
      <NavLink to="/secure-message">
        <p>Message</p>
      </NavLink>
      <NavLink to="/secure-mwi">
        <p>MWI</p>
      </NavLink>
      <NavLink to="/secure-publication">
        <p>Publication</p>
      </NavLink>
      <NavLink to="/secure-pwi">
        <p>PWI</p>
      </NavLink>
    </>
  );
}
