import { NavLink } from "react-router-dom";

export default function GuideDetails() {
  return (
    <>
      <div className="guide-details">
        <div className="header">
          <p>Si vous êtes nouveau sur Omisify, commencer par lire ce guide.</p>
          <p>
            Ce guide a été établi pour permettre à tout nouveau de savoir
            comment s'y prendre après son inscription.
          </p>
          <p>
            Inscription réussi, Félicitation ! Maintenons rentrons dans le vif
            du sujet.
          </p>
          <p>
            Si vous êtes arrivé jusqu'ici c'est que vous savez déjà ce qu'est
            Omisify, vous avez déjà une idée de ce qu'est Omisify, sinon cliquez
            <NavLink className="navlink" to="/">
              ici
            </NavLink>{" "}
            pour savoir ce qu'est Omisify.
          </p>
        </div>
        <div className="a">
          <div className="b">
            <p>Étape 2</p>
          </div>
          <p>Partie 1 terminé. Nous voici à l'étape 2 !</p>
          <p>
            Pour commencer à travailler en tant que Partenaire Omisify, vous
            devez avoir un Mentor qui vous guidera, qui vous apportera des
            conseils pour obtenir d'excellent résultat avec Omisify
          </p>
          <p>Qu'est-ce-qu'un Mentor ?</p>
          <p>
            Un Mentor en deux mots c'est tout simplement une personne qui est
            déjà passé par ce que vous voulez faire.
          </p>
          <p>
            Si vous avez déjà un Mentor vous pouvez continuer à lire le guide
            mais si vous n'avez pas de Mentor arrêtez-vous et contactez le
            Service Partenaire pour obtenir un Mentor en cliquant{" "}
            <NavLink className="navlink" to="/partner-contact">
              ici
            </NavLink>
          </p>
        </div>

        <div className="a">
          <div className="b">
            <p>Étape 3</p>
          </div>
          <p>
            Obtenez votre Bonus de Bienvenue en insérant le Code de Bienvenue de
            votre Mentor. Votre Mentor vous guidera sur comment procéder et vous
            apportera tout les conseils nécessaire pour que vous réussissez.
          </p>
          <p>
            Compléter vos{" "}
            <NavLink className="navlink" to="/infos">
              informations personnelles
            </NavLink>
            , ensuite faites la demande des affiches qui vous seront nécessaire
            pour le travail, sur les recommandations de votre Mentor vous ferez
            la demande des affiches en fonction du programme d'affiliation.
          </p>
        </div>

        <div className="a">
          <div className="b">
            <p>Étape 4</p>
          </div>
          <p>
            Rendez-vous au niveau du{" "}
            <NavLink className="navlink" to="/vocabulary">
              vocabulaire
            </NavLink>{" "}
            pour avoir plus d'informations sur les abbréviations et les
            expressions utiles pour les Partenaires Omisify. Votre Mentor vous
            apportera des éclaircissements là où vous aurez dû mal à comprendre.
          </p>
          <p>
            Lisez la partie présentation, la consigne et la condition de chaque
            programme d'affiliation. Rapprocher vous de votre Mentor afin
            d'avoir de l'aide sur comment reformuler à votre manière la partie
            présentation de chaque programme d'affiliation.{" "}
          </p>
          <p>
            En fonction des comptes des réseaux sociaux que vous possédez,
            demandez à votre Mentor comment faire pour obtenir des meilleurs
            résultats sur les réseaux sociaux que vous utilisez.
          </p>
          <p>
            Demandez à votre Mentor de vous expliquez comment faire pour envoyer
            les résultats de votre travail au Service Partenaire.
          </p>
          <p>
            Demandez à votre Mentor de vous guider sur comment actualiser vos
            points par vous-même au niveau de votre compte.
          </p>
          <p>
            Demandez à votre Mentor de vous guider sur l'acquisition de tout les
            Bonus que vous mérité.
          </p>
        </div>

        <div className="a">
          <div className="b">
            <p>Étape 5</p>
          </div>
          <p>
            Les bases sont posées, maintenant vous êtes prêt à débuter, vous
            êtes prêt à travailler, contacter le Service Partenaire et
            signalez-les la date du début de votre travail.
          </p>
          <p>
            Avec Omisify toutes les conditions ont été réunies pour vous
            permettre de transformer un simple complément de revenu en succèss
            incroyable.
          </p>
        </div>
        <div className="footer">
          <p>Bon Travail !</p>
        </div>
      </div>
    </>
  );
}
