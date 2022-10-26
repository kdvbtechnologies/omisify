import { useState } from "react";

export default function ProgramAffiliation() {
  const [isActive, setIsActive] = useState(false);

  const family = {
    fontFamily:
      ' "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif ',
  };

  return (
    <div style={family}>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>title. Programme 1</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && (
          <div className="accordion-programs">
            <div className="accordion-program">
              program. Programme d'Affiliation : Devenir Partenaire Omisify"
            </div>
            <div className="accordion-program">
              programLink. Lien d'Affiliation : https://omisify.com
            </div>
          </div>
        )}
        {isActive && (
          <div className="accordion-desc">
            <div className="program-presentation">
              <p>Présentation</p>
            </div>
            programDesc. Omisify est une plateforme qui proprose des programmes
            d'affiliation. Vous pourrez augmenter vos revenus en devenant
            Partenaire Omisify. Omisify est gratuit et rémunère toujours ses
            partenaires quelque soit le pays dans lequel vous vous trouver et
            quelque soit la situation de votre pays. Avec Omisify vous pourrez
            retirer votre rémunération à tout moment que vous le souhaiterez.
            Gagnez de l'argent avec Omisify !
          </div>
        )}
        {isActive && (
          <div className="">
            <p>
              Consigne : Insérer le lien d'affiliation dans toute publication,
              message ou description de vidéo
            </p>
            <p>Condition :</p>
            <p>Pour les influenceurs</p>
            <p>Pour les Influenceurs Vidéos</p>
            <p>Pour les Non-Influenceurs</p>
            <p>Mot(s) Clé(s) : Omisify, Argent, Gagner</p>
            <p>
              Terme(s) clé(s) : Gagnez de l'argent avec Omisify, Devenez
              Partenaire Omisify, Augmentez vos revenus avec Omisify
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
