import PartnerNavigation from "./Partner-Navigation";
import { NavLink } from "react-router-dom";

export default function Partner() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div className="introduce" style={family}>
      <PartnerNavigation />
      <div className="introduce-title">
        <p>
          Omisify est une plateforme qui proprose des programmes d'affiliation.
          Vous pourrez augmenter vos revenus en devenant partenaire Omisify.
        </p>
        <NavLink to="/contact">
          <button>Devenir Partenaire Omisify</button>
        </NavLink>
      </div>
      <div className="div">
        <p>
          Omisify est favorable pour les influenceurs et pour les
          non-influenceurs !
        </p>
      </div>
      <div className="p3">
        <p>
          Omisify est gratuit et remunere toujours ses partenaires quelque soit
          le pays dans lequel vous vous trouver et quelque la situation de votre
          pays.
        </p>
        <p>
          Avec Omisify vous pourrez retirer votre remuneration a tout moment que
          vous le souhaiterez. Avec Omisify, votre remuneration est a porter de
          vos mains. Nous utilisons tout les moyens de paiement disponible pour
          permettre a tout nos partenaires d'etre toujours remunerer.
        </p>
        <p>
          Avec Omisify vous pourrez gagner de l'argent meme lorsque vous dormez.
          Omisify est gratuit et remunere toujours ses partenaires !
        </p>
        <NavLink to="/contact">
          <button>Devenez partenaire Omisify !</button>
        </NavLink>
      </div>
    </div>
  );
}
