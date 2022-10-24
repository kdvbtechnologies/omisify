import { NavLink } from "react-router-dom";

export default function C() {
  return (
    <div className="go-down-part-c">
      <div className="align-part-c">
        <div className="part-c">
          <p>
            Omisify est gratuit et rémunère toujours ses Partenaires quelque
            soit le pays dans lequel vous vous trouver et quelque soit la
            situation de votre pays
          </p>
          <p>
            Avec Omisify vous pourrez retirer votre rémunération à n'importe
            quel moment. Avec Omisify, votre rémunération est à porter de vos
            mains. Omisify utilise tout les moyens de paiement disponible pour
            permettre à tout ses Partenaires d'être toujours rémunérer
          </p>
          <p>
            Avec Omisify vous gagnez de l'argent même lorsque vous dormez.
            Omisify est gratuit et rémunère toujours ses Partenaires
          </p>
          <div className="align-button">
            <NavLink to="/signup">
              <button>Devenir Partenaire Omisify</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}