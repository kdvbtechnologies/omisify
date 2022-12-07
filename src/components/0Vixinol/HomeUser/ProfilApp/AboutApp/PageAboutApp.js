import Back from "../../../Back/Back";
import ProfilAppNavbarDownloadBtn from "../../ProfilAppNavbarDownloadBtn";

export default function PageAboutApp() {
  return (
    <>
      <ProfilAppNavbarDownloadBtn />

      <div style={{ paddingTop: "45px" }}>
        <Back />
      </div>

      <div className="page-about-app">
        <div className="title">
          <p>A Propos de l'application</p>
        </div>
      </div>
      {/* page-about-app */}

      <div className="after-page-about-app">
        <p>
          Avec l'application Omisify vous pourrez accéder directement à votre
          compte Omisify. Installer l'application Omisify pour commencer à
          travailler avec Omisify. Calculer automatiquement les résultats de
          votre travail et bénéficier de tout les Bonus offerts aux Partenaires
          Omisify
        </p>
      </div>
      {/* after-page-about-app */}

      <div className="page-about-app-with-bold">
        <div className="a">
          <p>Hors connexion</p>
        </div>

        <p>
          Installer l'application Omisify et utiliser là partout pendant vos
          déplacements et même hors connexion
        </p>
      </div>

      <div className="page-about-app-without-bold">
        <p>
          Nous sommes à l’écoute de nos lecteurs Si vous avez une question, ou
          que vous rencontrez un problème technique, n’hésitez pas à consulter
          notre FAQ, accessible dans l’aide de l’application. Si vous ne trouvez
          pas la réponse à votre question, vous pouvez nous écrire grâce à la
          rubrique « nous contacter » accessible dans l’aide de l’application
          également.
        </p>
      </div>

      <p style={{ marginBottom: "130px" }}></p>
    </>
  );
}
