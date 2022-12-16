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

  return (
    <>
      <div className="title-settings">
        <div className="display">
          <NavLink to="/">
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
          <NavLink to="/navbar-bottom-omisify">
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
              Ajouter juste le logo de la marque Omisify à votre photo ou vidéo
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
                Si vous êtes déjà Connecté, cliquer sur Rejoindre la Nouvelle
                Génération pour rejoindre toutes ces personnes qui font partie
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

      {/* popup maintenance */}
      {/* popup maintenance */}
      {/* popup maintenance */}
      {popupMaintenance && (
        <div onClick={Maintenance}>
          <PopupMaintenance />
        </div>
      )}

      {/*
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
      */}

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
    </>
  );
}
