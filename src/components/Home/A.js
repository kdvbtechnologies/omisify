import { NavLink } from "react-router-dom";

export default function A() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

  return (
    <div className="a">
      <p>
        Omisify est une plateforme qui proprose des programmes d'affiliation.
        Augmentez vos revenus en devenant Partenaire Omisify
      </p>
      {userId && shortname && partnername && name ? (
        <>
          <NavLink to="/partner">
            <button>Devenir Partenaire Omisify</button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/signup">
            <button>Devenir Partenaire Omisify</button>
          </NavLink>
        </>
      )}
    </div>
  );
}
