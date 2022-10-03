import { NavLink } from "react-router-dom";
import Footer from "../Footer";

export default function SimoMillions() {
  return (
    <>
      <div className="millions">
        <hr />
        <div className="million">
          <p>Plus de 2 Millions d'influenceurs sont Partenaires Omisify !</p>

          <p>
            Plus de 100 Millions de personnes ont rejoint le Réseau Omisify pour
            les Non-influenceurs !
          </p>
        </div>
        <hr />
        <div className="button">
          <NavLink to="/simo">
            <button>Devenir Partenaire Omisify </button>
          </NavLink>
        </div>
        <Footer />
      </div>
    </>
  );
}
