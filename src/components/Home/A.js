import { NavLink } from "react-router-dom";

export default function A() {
  return (
    <div className="a">
      <p>
        Omisify est une plateforme qui proprose des programmes d'affiliation.
        Augmentez vos revenus en devenant Partenaire Omisify
      </p>
      <NavLink to="/signup">
        <button>Devenir Partenaire Omisify</button>
      </NavLink>
    </div>
  );
}
