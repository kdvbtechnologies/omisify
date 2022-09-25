import PartnerNavigation from "./Partner-Navigation";
import { NavLink } from "react-router-dom";
import Millions from "./Partner/Millions";

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
          Vous pourrez augmenter vos revenus en devenant Partenaire Omisify.
        </p>
        <NavLink to="/contact-partner">
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
          Omisify est gratuit et rémunère toujours ses partenaires quelque soit
          le pays dans lequel vous vous trouver et quelque soit la situation de
          votre pays.
        </p>
        <p>
          Avec Omisify vous pourrez retirer votre rémunération à tout moment que
          vous le souhaiterez. Avec Omisify, votre rémunération est à porter de
          vos mains. Nous utilisons tout les moyens de paiement disponible pour
          permettre à tout nos partenaires d'être toujours rémunérer.
        </p>
        <p>
          Avec Omisify vous pourrez gagner de l'argent même lorsque vous dormez.
          Omisify est gratuit et rémunère toujours ses partenaires !
        </p>
        <NavLink to="/contact-partner">
          <button>Devenez Partenaire Omisify !</button>
        </NavLink>

        <div className="posts">
          <div className="post">
            <h1>Rémunération</h1>
            <li>1 Commentaire = 1 point</li>
            <li>1 Publication = 1 point</li>
            <li>1 Message = 1 point</li>
            <li>1 Invitation = 1€</li>
            <li>1000 Points = 1€</li>
            <li>10 000 Likes = 1€</li>
            <p>
              N.B : Les Gains sont mis à jour tout les jours sur la page de
              chaque Partenaire Omisify.
            </p>
            <p>
              Tous les partenaires peuvent retirés leur rémunération à n'importe
              quel moment.
            </p>
          </div>
        </div>
      </div>
      <Millions />
    </div>
  );
}
