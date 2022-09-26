import { NavLink } from "react-router-dom";
import DeborahNavigation from "./DeborahNavigation";

export default function DeborahPartnerAction() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div className="introduce" style={family}>
      <DeborahNavigation />
      <div className="introduce-title">
        <p>
          Omisify est une plateforme qui proprose des programmes d'affiliation.
          Vous pourrez augmenter vos revenus en devenant partenaire Omisify.
        </p>
        <NavLink to="/deborah-contact">
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
          Avec Omisify vous pourrez retirer votre remuneration a tout moment que
          vous le souhaiterez. Avec Omisify, votre remuneration est a porter de
          vos mains. Nous utilisons tout les moyens de paiement disponible pour
          permettre a tout nos partenaires d'etre toujours remunerer.
        </p>
        <p>
          Avec Omisify vous pourrez gagner de l'argent meme lorsque vous dormez.
          Omisify est gratuit et remunere toujours ses partenaires !
        </p>
        <NavLink to="/deborah-contact">
          <button>Devenez partenaire Omisify !</button>
        </NavLink>

        <div className="posts">
          <div className="post">
            <h1>Rémunération</h1>
            <li>1 Commentaire = 1 point</li>
            <li>1 Publication = 1 point</li>
            <li>1 Message = 1 point</li>
            <li>1 Invitation = 2 points</li>
            <li>1000 Points = 1€</li>
            <li>10 000 Likes = 1€</li>
            <p>
              N.B : Les Gains sont mis à jour tout les jours sur la page de
              chaque partenaire.
            </p>
            <p>
              Tous les partenaires peuvent retirés leur rémunération à n'importe
              quel moment.
            </p>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", padding: "30px" }}>© 2022 Omisify</p>
    </div>
  );
}