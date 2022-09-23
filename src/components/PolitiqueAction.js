import { useNavigate } from "react-router-dom";

export default function PolitiqueAction() {
  const navigate = useNavigate();

  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="main-politique">
        <div className="politique">
          <h1>Politique de confidentialité</h1>
          <h2>Protection des données personnelles</h2>
          <p>
            Omisify est attentive à la protection des données personnelles et au
            respect de la vie privée. La présente politique de protection des
            données personnelles vous informe des traitements mis en place par
            Omisify pour le présent site.
          </p>
        </div>
        <div className="politique">
          <h2>Quelles informations recueillons-nous ?</h2>
          <p>
            Les données personnelles que nous recueillons peuvent inclure votre
            nom, votre adresse postale et électronique, votre numéro de
            téléphone fixe et mobile, vos informations bancaires, des
            informations sur votre société, votre chiffre d'affaires, votre
            expérience et vos réalisations professionnelles, des images
            présentant votre profil et vos réalisations, votre ville et votre
            région et votre utilisation des services que nous proposons.
          </p>
        </div>

        <div className="politique">
          <h2>Comment traitons-nous ces données ?</h2>
          <p>
            Nous utilisons vos données pour les finalités suivantes :
            <li>La création, la gestion et le suivi de votre votre projet.</li>
            <li>
              La gestion de vos demandes de contact ou d’information sur nos
              services
            </li>
            <li>
              Assurer le bon fonctionnement, la sécurité et l’amélioration de
              notre site internet, de ses services et de ses fonctionnalités ;
            </li>
            <li> Élaborer des statistiques commerciales;</li>
            <li>
              notre intérêt légitime à garantir la qualité de notre site
              internet
            </li>
            <li>
              Lutter contre la fraude et respecter nos obligations légales
            </li>
            <p>
              Les données sont transmises à notre plateforme de façon sécurisée
              grâce au procédé de cryptage https. Nous faisons appel à diverses
              sociétés qui permettent de fournir nos services (hébergeur web,
              service d'envoi de mail, ... ) qui peuvent recevoir, accueillir et
              traiter ces données. Selon leur sensibilité, différents procédés
              tels que le cryptage peuvent être appliqués aux données pour les
              protéger afin qu'elles ne soient pas accessibles ou lisibles. Pour
              prévenir la fraude et les impayés, tout incident, déclaration
              fausse ou irrégulière, pourra faire l'objet d'un traitement
              spécifique destiné à empêcher une utilisation frauduleuse de nos
              services.
              <p>Par exception :</p>
              <li>
                les données sont conservées pendant une durée de 3 ans à compter
                de la fin de la relation commerciale ou de notre dernier contact
                avec vous ;
              </li>
              <li>
                si vous avez effectué une demande d’exercice de l’un de vos
                droits sur vos données personnelles : vos données seront
                conservées pendant une durée de 1 an après votre demande ;
              </li>
              <li>
                Les données personnelles issues des cookies assurant l'analyse
                de la navigation sur notre site internet sont conservées pendant
                une durée de 6 mois ;
              </li>
              <li>
                Les données personnelles issues des cookies nécessaires au
                fonctionnement et à la mesure d’audience de notre site internet
                sont conservées 25 mois.
              </li>
            </p>
          </p>
        </div>

        <div className="politique">
          <h2>Durées de conservation de vos données personnelles</h2>
          <p>
            Vos données sont conservées sous une forme permettant votre
            identification uniquement pendant le temps nécessaire à
            l’accomplissement des finalités poursuivies décrites ci-dessus.
            Cependant, le traitement des données est possible pour fournir la
            preuve d’un droit ou d’un contrat. Ces données peuvent également
            être conservées dans l’objectif de respecter une obligation légale
            ou gardées dans des fichiers conformément aux règlements et lois
            applicables.
          </p>
        </div>
      </div>
    </>
  );
}
