import { NavLink } from "react-router-dom";

export default function UpdateSeptember() {
  return (
    <>
      <h1>Choisissez</h1>
      <NavLink to="/secure-comment">
        <p>Commentaire</p>
      </NavLink>
      <NavLink to="/secure-message">
        <p>Message</p>
      </NavLink>
      <NavLink to="/secure-like">
        <p>Like</p>
      </NavLink>
    </>
  );
}
