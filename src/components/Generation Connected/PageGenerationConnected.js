import { useState } from "react";
import { NavLink } from "react-router-dom";
import PopupMaintenance from "../Home Omisify/Maintenance/PopupMaintenance";

export default function PageGenerationConnected() {
  const [seeMore, setSeeMore] = useState(false);
  function SeeMore() {
    setSeeMore(!seeMore);
  }
  console.log(SeeMore);

  const go1 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401706/omisify/go1_i4pc2i.jpg";

  const go2 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401700/omisify/go2_tvongk.jpg";

  const go3 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401702/omisify/go3_zortzx.jpg";

  const go4 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401699/omisify/go4_payr6y.jpg";

  // popup maintenance
  const [popupMaintenance, setPopupMaintenance] = useState(false);
  function Maintenance() {
    setPopupMaintenance(!popupMaintenance);
  }

  // popup image 1
  const [popupImage1, setPopupImage1] = useState(false);
  function PopupImage1() {
    setPopupImage1(!popupImage1);
  }

  // popup image 2
  const [popupImage2, setPopupImage2] = useState(false);
  function PopupImage2() {
    setPopupImage2(!popupImage2);
  }

  // popup image 3
  const [popupImage3, setPopupImage3] = useState(false);
  function PopupImage3() {
    setPopupImage3(!popupImage3);
  }

  // popup image 4
  const [popupImage4, setPopupImage4] = useState(false);
  function PopupImage4() {
    setPopupImage4(!popupImage4);
  }

  // popup Fonctionnement
  const [popupFonctionnement, setPopupFonctionnement] = useState(false);
  function Fonctionnement() {
    setPopupFonctionnement(!popupFonctionnement);
  }

  // popup Logo
  const [popupLogo, setPopupLogo] = useState(false);
  function Logo() {
    setPopupLogo(!popupLogo);
  }

  // popup Outil
  const [popupOutil, setPopupOutil] = useState(false);
  function Outil() {
    setPopupOutil(!popupOutil);
  }

  // popup help
  function Help() {}

  // popup menu
  const [popupMenuToRight, setPopupMenuToRight] = useState(false);
  function PopupMenuToRight() {
    setPopupMenuToRight(!popupMenuToRight);
  }

  const [list, setList] = useState(false);
  function PopupList() {
    setList(!list);
  }

  // page Facebook en attente de validation
  const [
    pageFacebookEnAttenteDeValidation,
    setPageFacebookEnAttenteDeValidation,
  ] = useState(false);
  function PageFacebookEnAttenteDeValidation() {
    setPageFacebookEnAttenteDeValidation(!pageFacebookEnAttenteDeValidation);
  }

  return (
    <>
      <div className="title-settings">
        <div className="display">
          <NavLink to="/partner">
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

      <div className="title-settings-mobile">
        <div className="display">
          <NavLink to="/partner">
            <div className="a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="20px"
                cursor="pointer"
                fill="#ccc"
                enableBackground="new 0 0 486.975 486.975"
                version="1.1"
                viewBox="0 0 486.975 486.975"
                xmlSpace="preserve"
              >
                <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
              </svg>
            </div>
            {/* a */}
          </NavLink>

          <div className="b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="30px"
              fill="red"
              enableBackground="new 0 0 503.2 503.2"
              version="1.1"
              viewBox="0 0 503.2 503.2"
              xmlSpace="preserve"
            >
              <path d="M404.601 299.199c-26.105 0-49.776 10.221-67.415 26.785L272.001 277.1v-74.664c46.335-8.071 81.6-48.389 81.6-97.036 0-54.454-44.146-98.6-98.6-98.6-54.455 0-98.601 44.146-98.601 98.6 0 48.647 35.265 88.965 81.6 97.036v74.439l-70.101 50.286c-12.886-12.642-29.267-21.732-47.58-25.643C52.014 286.939-7.69 343.168.81 410.617c5.536 43.949 41.024 79.432 84.973 84.974 67.449 8.5 123.678-51.204 109.099-119.518-1.584-7.432-4.06-14.531-7.242-21.229l67.137-48.164 61.981 46.484c-6.827 13.417-10.757 28.554-10.757 44.636 0 54.454 44.146 98.6 98.6 98.6s98.6-44.146 98.6-98.6c-.001-54.455-44.146-98.601-98.6-98.601zm-306 34.014c16.395 0 29.689 13.294 29.689 29.689s-13.294 29.688-29.689 29.688-29.689-13.294-29.689-29.688c0-16.402 13.294-29.689 29.689-29.689zm44.2 115.587H54.4v-13.328c0-18.217 12.784-34.272 31.008-34.272h26.391c18.217 0 31.001 16.056 31.001 34.272V448.8zm112.2-407.987c16.395 0 29.688 13.294 29.688 29.688 0 16.395-13.294 29.689-29.688 29.689-16.395 0-29.689-13.294-29.689-29.689 0-16.4 13.294-29.688 29.689-29.688zm-44.2 115.586v-13.328c0-18.217 12.784-34.272 31.008-34.272H268.2c18.218 0 31.001 16.055 31.001 34.272v13.328h-88.4zm193.8 176.814c16.395 0 29.688 13.294 29.688 29.689s-13.294 29.688-29.688 29.688-29.688-13.294-29.688-29.688c-.001-16.402 13.293-29.689 29.688-29.689zm44.2 115.587h-88.4v-13.328c0-18.217 12.784-34.272 31.008-34.272H417.8c18.217 0 31.001 16.056 31.001 34.272V448.8z"></path>
            </svg>
          </div>
          {/* b */}
        </div>
        {/* display */}

        <p>Génération Connecté</p>
      </div>
      {/* title settings mobile */}

      <div className="hr-global">
        <hr />
      </div>
      {/* hr-global */}

      <div className="help-page-gc">
        <div className="a">
          <p></p>
        </div>

        <div className="b">
          <svg
            onClick={Help}
            style={{ paddingRight: "10px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            cursor="pointer"
            fill="blue"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 110 2 1 1 0 010-2zm0-10a4 4 0 011.19 7.82l-.19.054V14a1 1 0 01-1.993.117L11 14v-1a1 1 0 01.883-.993l.266-.012A2 2 0 1010 10a1 1 0 01-2 0 4 4 0 014-4z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={PopupMenuToRight}
            style={{ paddingRight: "10px" }}
            width="20px"
            cursor="pointer"
            fill="none"
            viewBox="0 0 24 24"
          >
            <g
              stroke="#292929"
              strokeLinejoin="round"
              strokeWidth="3"
              clipPath="url(#clip0_105_1875)"
            >
              <path d="M12 12H12.01V12.01H12z"></path>
              <path d="M12 5H12.01V5.01H12z"></path>
              <path d="M12 19H12.01V19.01H12z"></path>
            </g>
            <defs>
              <clipPath id="clip0_105_1875">
                <path
                  fill="#fff"
                  d="M0 0H24V24H0z"
                  transform="translate(0 .001)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      {/* help-page-gc */}

      <div className="page-generation-connected-title">
        <p>Bienvenue dans le monde des personnes Connectés !</p>
      </div>
      {/* page-generation-connected-title */}

      <div className="person-add-logo-go">
        <div className="overflow">
          <div className="images">
            <img
              onClick={PopupImage1}
              style={{ paddingRight: "10px", cursor: "pointer" }}
              src={go1}
              alt=""
            />

            <img
              onClick={PopupImage2}
              style={{ paddingRight: "10px", cursor: "pointer" }}
              src={go2}
              alt=""
            />

            <img
              onClick={PopupImage3}
              style={{ paddingRight: "10px", cursor: "pointer" }}
              src={go3}
              alt=""
            />
            <img
              onClick={PopupImage4}
              style={{ cursor: "pointer" }}
              src={go4}
              alt=""
            />
          </div>
          {/* images */}
        </div>
        {/* overflow */}
      </div>
      {/* person-add-logo-go */}

      <p style={{ paddingBottom: "25px" }}></p>

      <div className="after-generation-omisify">
        <div className="align-box-shadow">
          <div className="box-shadow">
            <p>
              Ajouter juste le logo de la marque Omisify à votre photo de profil
              et soyez rémunérer chaque jour par Omisify
            </p>
          </div>
          {/* box-shadow */}
        </div>
        {/* align-box-shadow */}
      </div>
      {/* after-generation-omisify */}

      <p style={{ paddingBottom: "25px" }}></p>

      {/*
      {seeMore ? (
        <>
          <div className="see-more-page-generation-connected">
            <div className="a">
              <div className="display">
                <p style={{ paddingRight: "5px" }}>
                  Si vous n'êtes pas encore Connecté,
                </p>

                <p style={{ paddingRight: "5px" }}>cliquer</p>

                <NavLink style={{ color: "blue" }} to="/">
                  <p style={{ color: "blue", paddingRight: "5px" }}>ici</p>
                </NavLink>

                <p style={{ paddingRight: "5px" }}>pour savoir</p>

                <p style={{ paddingRight: "5px" }}>
                  la procédure à suivre pour l'être
                </p>
              </div>
              {/* display 
            </div>

            <div className="a">
              <p>
                Si vous êtes déjà Connecté, cliquer sur Rejoindre la
                Génération Connecté pour rejoindre toutes ces personnes qui font partie
                de la Génération Connecté
              </p>
            </div>

            <svg
              onClick={SeeMore}
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="10px"
              cursor="pointer"
              enableBackground="new 0 0 330 330"
              version="1.1"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
            >
              <path d="M325.606 229.393l-150.004-150a14.997 14.997 0 00-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 00315 255a14.95 14.95 0 0010.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"></path>
            </svg>
          </div>
        </>
      ) : (
        <>
          <div className="see-more-page-generation-connected">
            <svg
              onClick={SeeMore}
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              cursor="pointer"
              width="10px"
              enableBackground="new 0 0 25.93 25.93"
              version="1.1"
              viewBox="0 0 25.93 25.93"
              xmlSpace="preserve"
            >
              <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
            </svg>
          </div>
        </>
      )}
      */}

      <div className="page-generation-connected-box-shadow">
        <p>La Génération Connecté c'est la Nouvelle Génération !</p>
      </div>
      {/* page-generation-connected-box-shadow */}

      <div className="btn-join-new-generation">
        {/*
        <button>Rejoindre la Génération Connecté</button>
        */}
      </div>
      {/* btn-join-new-generation */}

      <div className="fonctionnement-gc">
        <div className="align">
          <div className="background">
            <div className="fonctionnement">
              <p onClick={Fonctionnement}>Fonctionnement</p>
            </div>
            {/* fonctionnement */}

            <div className="logo">
              <p onClick={Logo}>Logo</p>
            </div>
            {/* logo */}

            <div className="outil">
              <p onClick={Outil}>Outil</p>
            </div>
            {/* outil */}
          </div>
          {/* background */}
        </div>
        {/* align */}
      </div>
      {/* fonctionnement-gc */}

      {/* popup fonctionnement */}
      {/* popup fonctionnement */}
      {popupFonctionnement && (
        <>
          <div
            onClick={Fonctionnement}
            className="popup-fonctionnement-opacity"
          >
            <div className="align">
              <div className="card">
                <p style={{ color: "red", paddingBottom: "10px" }}>
                  FONCTIONNEMENT
                </p>
                <p>
                  Tout les jours, de nombreuses personnes sont rémunérées juste
                  pour avoir ajouter le logo de la marque Omisify à leur photo
                  de profil. Pour être Connecté vous devez ajouter le logo de la
                  marque Omisify à votre photo de profil Facebook, Whatsapp,
                  Youtube,...
                </p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-fonctionnement-opacity */}
        </>
      )}

      {/* popup logo */}
      {/* popup logo */}
      {popupLogo && (
        <>
          <div onClick={Logo} className="popup-fonctionnement-opacity">
            <div className="align">
              <div className="card">
                <p style={{ color: "red", paddingBottom: "10px" }}>LOGO</p>
                <p style={{ paddingBottom: "10px" }}>
                  Pour ajouter le logo de la marque Omisify à votre photo de
                  profil, commencer premièrement par choisir le logo et
                  télécharger le logo
                </p>
                <p>
                  Cliquer sur le bouton Choisir le logo et ensuite cliquer sur
                  le logo de votre choix pour le télécharger au format PNG
                </p>
                <div className="center">
                  <button>Choisir le logo</button>
                </div>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-fonctionnement-opacity */}
        </>
      )}

      {/* popup outil */}
      {/* popup outil */}
      {popupOutil && (
        <>
          <div onClick={Outil} className="popup-outil-opacity">
            <div className="align">
              <div className="card">
                <p style={{ color: "red", paddingBottom: "10px" }}>OUTIL</p>
                <div className="a">
                  <p>
                    Pour ajouter le logo de la marque Omisify à votre photo de
                    profil, utiliser l'application photoshop ou tout autre outil
                    professionnel qui vous servira à ajouter le logo de la
                    marque Omisify à votre photo de profil
                  </p>

                  <p>
                    Après l'ajout du logo à votre photo de profil, aller sur les
                    réseaux sociaux tel que Facebook, Tik Tok,... et publier
                    cette photo, aller aussi sur les applications de messagerie
                    tel que Whatsapp, Telegram,... et remplacer la nouvelle
                    photo à votre profil
                  </p>

                  <p>
                    Au niveau de votre compte Omisify, dans l'onglet... cliquer
                    sur importer la photo pour importer la nouvelle photo et
                    recuperer aussi le lien de la photo de profil sur Facebook
                    et ensuite joignez-le là ou c'est ecrit joindre le lien
                    aussi le lien de la photo de profil
                  </p>

                  <p>
                    Pour récupérer le lien de la photo de profil sur Facebook,
                    connectez-vous à votre compte Facebook à partir d'un
                    navigateur, cliquer sur la photo de profil et ensuite prener
                    le lien sur la barre d'adresse
                  </p>

                  <p>
                    Sur les applications comme Whatsapp, Telegram ou d'autres
                    reseaux sociaux ou c'est impossible de recuperer le lien de
                    la photo de profil, ce que vous devez faire c'est prendre
                    votre photo de profil en capture d'écran au niveau de votre
                    compte Whatsapp ou Telegram et ensuite au niveau de votre
                    compte Omisify, dans l'onglet... cliquer sur importer les
                    captures d'écrans pour importer les captures d'écrans
                  </p>
                </div>
                {/* a */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-fonctionnement-opacity */}
        </>
      )}

      {/*
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
      */}

      {/* popup maintenance */}
      {/* popup maintenance */}
      {/* popup maintenance */}
      {popupMaintenance && (
        <div onClick={Maintenance}>
          <PopupMaintenance />
        </div>
      )}

      {/* popup image 1 */}
      {/* popup image 1 */}
      {/* popup image 1 */}
      {popupImage1 && (
        <>
          <div onClick={PopupImage1} className="popup-image-opacity">
            <div className="align">
              <div className="image">
                <img src={go1} alt="" />
              </div>
              {/* image */}
            </div>
            {/* align */}
          </div>
          {/* popup-image-opacity */}
        </>
      )}

      {/* popup image 2 */}
      {/* popup image 2 */}
      {/* popup image 2 */}
      {popupImage2 && (
        <>
          <div onClick={PopupImage2} className="popup-image-opacity">
            <div className="align">
              <div className="image">
                <img src={go2} alt="" />
              </div>
              {/* image */}
            </div>
            {/* align */}
          </div>
          {/* popup-image-opacity */}
        </>
      )}

      {/* popup image 3 */}
      {/* popup image 3 */}
      {/* popup image 3 */}
      {popupImage3 && (
        <>
          <div onClick={PopupImage3} className="popup-image-opacity">
            <div className="align">
              <div className="image">
                <img src={go3} alt="" />
              </div>
              {/* image */}
            </div>
            {/* align */}
          </div>
          {/* popup-image-opacity */}
        </>
      )}

      {/* popup image 4 */}
      {/* popup image 4 */}
      {/* popup image 4 */}
      {popupImage4 && (
        <>
          <div onClick={PopupImage4} className="popup-image-opacity">
            <div className="align">
              <div className="image">
                <img src={go4} alt="" />
              </div>
              {/* image */}
            </div>
            {/* align */}
          </div>
          {/* popup-image-opacity */}
        </>
      )}

      {popupMenuToRight && (
        <>
          <div
            onClick={PopupMenuToRight}
            className="popup-menu-to-right-opacity-gc"
          >
            <div className="float">
              <div className="card">
                <p
                  onClick={PopupList}
                  style={{ cursor: "pointer", paddingBottom: "20px" }}
                >
                  Réseaux Sociaux
                </p>
                <p style={{ cursor: "pointer" }}>Levier</p>
              </div>
              {/* card */}
            </div>
            {/* float */}
          </div>
          {/* popup-menu-to-right-gc */}
        </>
      )}

      {list && (
        <>
          <div onClick={PopupList} className="popup-list-opacity">
            <div className="align">
              <div className="card">
                <NavLink style={{ textDecoration: "none" }} to="/fb">
                  <div className="display">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      width="20px"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                    </svg>

                    <p style={{ color: "black" }}>Facebook</p>
                  </div>
                  {/* display */}
                </NavLink>

                <div className="hr">
                  <hr />
                </div>

                <div className="display">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    width="20px"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                  </svg>
                  <p>Whatsapp</p>
                </div>
                {/* display */}

                <div className="hr">
                  <hr />
                </div>

                <div className="display">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="20px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"
                    ></path>
                  </svg>
                  <p>Telegram</p>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-list-opacity */}
        </>
      )}

      {/* page ajouté - en attente de validation */}
      {/* page ajouté - en attente de validation */}
      {pageFacebookEnAttenteDeValidation && (
        <>
          <div className="page-en-attente-de-validation-opacity">
            <div className="align">
              <div className="card">
                <p>
                  La page Facebook que vous avez ajouté est en attente de
                  validation
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
