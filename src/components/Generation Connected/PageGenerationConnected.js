import { NavLink } from "react-router-dom";
import go1 from "../Home Omisify/img/go1.jpg";
import go2 from "../Home Omisify/img/go2.jpg";
import go3 from "../Home Omisify/img/go3.jpg";
import go4 from "../Home Omisify/img/go4.jpg";

export default function PageGenerationConnected() {
  return (
    <>
      <div className="title-settings">
        <div className="display">
          <NavLink to="/navbar-bottom-omisify">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="20px"
              cursor="pointer"
              fill="#ccc"
              style={{ paddingRight: "55px" }}
              enableBackground="new 0 0 486.975 486.975"
              version="1.1"
              viewBox="0 0 486.975 486.975"
              xmlSpace="preserve"
            >
              <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
            </svg>
          </NavLink>
          {/* left */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            fill="red"
            style={{ paddingRight: "10px" }}
            x="0"
            y="0"
            enableBackground="new 0 0 503.2 503.2"
            version="1.1"
            viewBox="0 0 503.2 503.2"
            xmlSpace="preserve"
          >
            <path d="M404.601 299.199c-26.105 0-49.776 10.221-67.415 26.785L272.001 277.1v-74.664c46.335-8.071 81.6-48.389 81.6-97.036 0-54.454-44.146-98.6-98.6-98.6-54.455 0-98.601 44.146-98.601 98.6 0 48.647 35.265 88.965 81.6 97.036v74.439l-70.101 50.286c-12.886-12.642-29.267-21.732-47.58-25.643C52.014 286.939-7.69 343.168.81 410.617c5.536 43.949 41.024 79.432 84.973 84.974 67.449 8.5 123.678-51.204 109.099-119.518-1.584-7.432-4.06-14.531-7.242-21.229l67.137-48.164 61.981 46.484c-6.827 13.417-10.757 28.554-10.757 44.636 0 54.454 44.146 98.6 98.6 98.6s98.6-44.146 98.6-98.6c-.001-54.455-44.146-98.601-98.6-98.601zm-306 34.014c16.395 0 29.689 13.294 29.689 29.689s-13.294 29.688-29.689 29.688-29.689-13.294-29.689-29.688c0-16.402 13.294-29.689 29.689-29.689zm44.2 115.587H54.4v-13.328c0-18.217 12.784-34.272 31.008-34.272h26.391c18.217 0 31.001 16.056 31.001 34.272V448.8zm112.2-407.987c16.395 0 29.688 13.294 29.688 29.688 0 16.395-13.294 29.689-29.688 29.689-16.395 0-29.689-13.294-29.689-29.689 0-16.4 13.294-29.688 29.689-29.688zm-44.2 115.586v-13.328c0-18.217 12.784-34.272 31.008-34.272H268.2c18.218 0 31.001 16.055 31.001 34.272v13.328h-88.4zm193.8 176.814c16.395 0 29.688 13.294 29.688 29.689s-13.294 29.688-29.688 29.688-29.688-13.294-29.688-29.688c-.001-16.402 13.293-29.689 29.688-29.689zm44.2 115.587h-88.4v-13.328c0-18.217 12.784-34.272 31.008-34.272H417.8c18.217 0 31.001 16.056 31.001 34.272V448.8z"></path>
          </svg>
          <p>Génération Connecté</p>
          {/* right */}
        </div>
        {/* display */}
      </div>
      {/* title settings */}

      <div className="hr-global">
        <hr />
      </div>
      {/* hr-global */}

      <div className="page-generation-connected-title">
        <p>Bienvenue dans le monde des personnes Connectés !</p>
      </div>
      {/* page-generation-connected-title */}

      <div className="person-add-logo-go">
        <div className="overflow">
          <div className="images">
            <img style={{ paddingRight: "10px" }} src={go1} alt="" />
            <img style={{ paddingRight: "10px" }} src={go2} alt="" />
            <img style={{ paddingRight: "10px" }} src={go3} alt="" />
            <img src={go4} alt="" />
          </div>
          {/* images */}
        </div>
        {/* overflow */}
      </div>
      {/* person-add-logo-go */}

      <p>
        Ajouter juste le logo de la marque Omisify à votre photo ou vidéo et
        rejoignez toute ces personnes qui sont Connectés
      </p>
      <p>
        Si vous n'êtes pas encore Connecté, cliquer ici pour savoir la procédure
        à suivre pour l'être
      </p>
      <p>
        Si vous êtes déjà Connecté, cliquer sur Rejoindre la Génération Connecté
        pour rejoindre toutes ces personnes qui font partie de la nouvelle
        Génération
      </p>
      <p>La Génération Connecté c'est la nouvelle Génération !</p>
      <button>Rejoindre la Génération Connecté</button>

      <p>Fonctionnement</p>
      <p>
        Tout les jours, de nombreuses personnes sont rémunérées juste pour avoir
        ajouter le logo de la marque Omisify à leur photo/vidéo. Pour etre
        Connecté vous devez ajouter le logo de la marque Omisify à votre photo
        ou vidéo
      </p>
      <p>Outil</p>
      <p>
        Utiliser l'outil photoshop ou tout autre outil professionnel pour
        ajouter le logo de la marque Omisify à votre photo
      </p>

      <p>
        Utiliser l'outil Adobe Première Pro ou tout autre outil professionnel
        pour ajouter le logo de la marque Omisify à votre vidéo
      </p>
      <p>Logo</p>
      <p>
        Cliquer sur Télécharger pour télécharger les logos de la marque Omisify
        au format PNG
      </p>
      <p>Aide</p>
      <p>Besoin d'aide ?</p>
      <button>Télécharger</button>

      <p>
        Faites une vérification du statut pour savoir si vous avez respecter
        toutes les conditions pour être éligible à la rémunération de la
        Génération Connecté
      </p>
      <p>Statut : En règle</p>
      <p>
        Le statut En règle signifie que vous avez respecté toute les conditions
        pour être éligible à la rémunération de la Génération Connecté
      </p>
      <p>Statut : En attente</p>
      <p>
        Le statut En attente signifie que vous n'avez pas respecté toute les
        conditions pour être éligible à la rémunération de la Génération
        Connecté
      </p>
      <p>Conditions</p>
      <p>
        Ajouter le logo de la marque Omisify à toutes les nouvelles publications
        photo/vidéo
      </p>
      <p>
        Ajouter le logo de la marque Omisify aux photos de profil et/ou
        couverture
      </p>
    </>
  );
}
