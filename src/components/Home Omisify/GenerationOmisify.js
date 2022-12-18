import { NavLink } from "react-router-dom";
import omisifyIcon from "./img/omisify-icon.jpg";
import omisifyIconRed from "./img/omisify-icon-red.jpg";
import omisifyIconMobile from "./img/omisify-icon-mobile.jpg";
import omisifyIconRedMobile from "./img/omisify-icon-red-mobile.jpg";
import { useState } from "react";
import PopupMaintenance from "./Maintenance/PopupMaintenance";

export default function GenerationOmisify() {
  const [popupHelp, setPopupHelp] = useState(false);
  const [join, setJoin] = useState(false);
  const go1 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401706/omisify/go1_i4pc2i.jpg";
  const go2 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401700/omisify/go2_tvongk.jpg";
  const go3 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401702/omisify/go3_zortzx.jpg";
  const go4 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401699/omisify/go4_payr6y.jpg";

  function Join() {
    setJoin(!join);
  }

  function Help() {
    setPopupHelp(!popupHelp);
  }

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
      <div className="generation-omisify">
        <div className="a">
          <NavLink style={{ color: "black" }} to="/signup">
            <p
              style={{
                color: "black",
                paddingRight: "5px",
              }}
            >
              Inscrivez-vous gratuitement
            </p>
          </NavLink>
          <p style={{ paddingRight: "5px" }}>et rejoignez</p>
          <p style={{ paddingRight: "5px" }}>ces personnes</p>
          <p style={{ paddingRight: "5px" }}>qui ont choisi</p>
          <p style={{ paddingRight: "5px" }}>de faire parti</p>
          <p style={{ paddingRight: "5px" }}>de la</p>
          <p style={{ color: "red" }}>Génération Connecté</p>
        </div>
        {/* a */}

        <div className="display">
          <div className="part-left">
            <img src={omisifyIcon} alt="omisify" />
            <img src={omisifyIconRed} alt="omisify red logo" />
          </div>
          {/* part-left */}

          <div className="part-right">
            <div className="a">
              <p style={{ paddingRight: "5px" }}>La</p>
              <p
                style={{
                  color: "red",
                  paddingRight: "5px",
                }}
              >
                Génération Connecté
              </p>
              <p style={{ paddingRight: "5px" }}>concerne ces personnes,</p>
              <p>
                ces influenceurs ou ces artistes qui ont choisi de mettre le
                logo de la marque Omisify dans leur photos, vidéos et sont
                rémunérés chaque jour par Omisify
              </p>
            </div>
          </div>
          {/* part-right */}
        </div>
        {/* display */}

        <div className="display-mobile-version">
          <div className="part-left">
            <img src={omisifyIconMobile} alt="omisify" />
            <img src={omisifyIconRedMobile} alt="omisify red logo" />
          </div>
          {/* part-left */}

          <div className="part-right">
            <div className="a">
              <p style={{ paddingRight: "5px" }}>La</p>
              <p
                style={{
                  color: "red",
                  paddingRight: "5px",
                }}
              >
                Génération Connecté
              </p>
              <p style={{ paddingRight: "5px" }}>concerne ces personnes,</p>
              <p>
                ces influenceurs ou ces artistes qui ont choisi de mettre le
                logo de la marque Omisify dans leur photos, vidéos et sont
                rémunérés chaque jour par Omisify
              </p>
            </div>
          </div>
          {/* part-right */}
        </div>
        {/* display- mobile version */}
      </div>
      {/* generation - omisify */}

      <div className="how-to-join-omisify-generation">
        <p>Comment rejoindre la Génération des personnes Connectés ?</p>
      </div>
      {/* how-to-join-omisify-generation */}

      <div className="how-to-join-omisify-generation-detail">
        <div className="a">
          <h2>1</h2>
        </div>

        <div className="b">
          <h3>Installer</h3>
          <p onClick={Maintenance}>..</p>
          {/*
          <p>Installer l'application Web Omisify depuis Vixinol Store</p>
        */}
        </div>
      </div>
      {/* how-to-join-omisify-generation-detail */}

      <div className="how-to-join-omisify-generation-detail">
        <div className="a">
          <h2>2</h2>
        </div>

        <div className="b">
          <h3>Inscription</h3>
          <p>Inscrivez-vous et connecter-vous à votre compte Omisify</p>
        </div>
      </div>
      {/* how-to-join-omisify-generation-detail */}

      <div className="how-to-join-omisify-generation-detail">
        <div className="a">
          <h2>3</h2>
        </div>

        {!join && (
          <>
            <div className="b">
              <h3>Rejoindre</h3>
              <p>
                Au niveau du Menu de votre compte Omisify, allez dans Génération
                Connecté puis cliquer sur Rejoindre la Nouvelle Génération
              </p>

              <div className="align-icon-go-down">
                <svg
                  onClick={Join}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  cursor="pointer"
                  width="15px"
                  fill="#444"
                  enableBackground="new 0 0 25.93 25.93"
                  version="1.1"
                  viewBox="0 0 25.93 25.93"
                  xmlSpace="preserve"
                >
                  <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                </svg>
                {/* icon vers le bas */}
              </div>
            </div>
          </>
        )}
        {/* join false */}

        {join && (
          <>
            <div className="b">
              <h3>Rejoindre</h3>
              <p>
                Au niveau du Menu de votre compte Omisify, allez dans Génération
                Connecté puis cliquer sur Rejoindre la Nouvelle Génération
              </p>

              <div className="d">
                <p style={{ paddingRight: "5px" }}>
                  Vous pourrez aller plus loin en devenant
                </p>

                <p
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    paddingRight: "5px",
                  }}
                  onClick={Maintenance}
                >
                  ..
                </p>

                {/*
                <p
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    paddingRight: "5px",
                  }}
                >
                  Partenaire Omisify,
                </p>
                  */}

                <p
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    paddingRight: "5px",
                  }}
                  onClick={Maintenance}
                >
                  ..
                </p>

                {/* 

                <p
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    paddingRight: "5px",
                  }}
                >
                  Partenaire Omisify Influent
                </p>
                
                */}

                <p style={{ paddingRight: "5px" }}>ou</p>

                <p
                  onClick={Maintenance}
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  ..
                </p>

                {/* 

                <p style={{ cursor: "pointer", textDecoration: "underline" }}>
                  Partenaire Omisify Vidéaste
                </p>
                
                */}
              </div>

              <div className="align-icon-go-down">
                <svg
                  onClick={Join}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="15px"
                  fill="#444"
                  cursor="pointer"
                  enableBackground="new 0 0 330 330"
                  version="1.1"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path d="M325.606 229.393l-150.004-150a14.997 14.997 0 00-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 00315 255a14.95 14.95 0 0010.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"></path>
                </svg>
                {/* icon vers le haut */}
              </div>
            </div>
          </>
        )}
        {/* join true */}
      </div>
      {/* how-to-join-omisify-generation-detail */}

      <div className="after-generation-omisify">
        <div className="align-box-shadow">
          <div className="box-shadow">
            <p>
              Soyez rémunérer chaque jour par Omisify juste pour avoir ajouter
              le logo de la marque Omisify à votre photo
            </p>

            <div className="a">
              <p>Génération Connecté ”</p>
            </div>
          </div>
          {/* box-shadow */}
        </div>
        {/* align-box-shadow */}

        {/* before data */}
        {/* before data */}
        {/* before data */}
        {/* before data */}
        {/* before data */}
        {/* before data */}
        {/* 
        {beforeData && (
          <>
            <div className="display-person-join">
              <div className="left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  fill="black"
                  enableBackground="new 0 0 477.175 477.175"
                  version="1.1"
                  viewBox="0 0 477.175 477.175"
                  xmlSpace="preserve"
                >
                  <path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"></path>
                </svg>
              </div>
              {/* left

              <div className="background">
                <p></p>
              </div>
              {/* person-join 

              <div className="right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  fill="black"
                  enableBackground="new 0 0 477.175 477.175"
                  version="1.1"
                  viewBox="0 0 477.175 477.175"
                  xmlSpace="preserve"
                >
                  <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                </svg>
              </div>
              {/* right 
            </div>
            {/* display 
            {/* before data 
          </>
        )}
      */}

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

        <div className="display-help">
          <svg
            onClick={Help}
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
            width="20px"
            x="0"
            y="0"
            fill="blue"
            enableBackground="new 0 0 46.071 46.071"
            version="1.1"
            viewBox="0 0 46.071 46.071"
            xmlSpace="preserve"
          >
            <path d="M45.999 8.427A8.398 8.398 0 0037.602.056H8.397A8.398 8.398 0 000 8.481l.071 22.284c.015 4.628 3.77 8.29 8.398 8.29h8.294l3.922 5.705c.529.76 1.396 1.253 2.321 1.255.925.002 1.793-.508 2.326-1.265l3.969-5.695h8.373c2.231 0 4.371-.807 5.947-2.387a8.303 8.303 0 002.45-5.916l-.072-22.325zM22.404 32.811c-1.747 0-2.934-1.286-2.934-3 0-1.748 1.22-3.001 2.934-3.001 1.781 0 2.936 1.253 2.968 3.001 0 1.713-1.187 3-2.968 3zm4.249-14.076c-1.331 1.475-1.618 2.879-1.618 4.499a2.18 2.18 0 01-2.179 2.18h-.897a2.18 2.18 0 01-2.179-2.146l-.003-.233c-.108-1.836.504-3.75 2.123-5.693 1.152-1.369 2.088-2.543 2.088-3.767 0-1.26-.828-2.099-2.627-2.171-.549 0-1.152.092-1.735.254a2.053 2.053 0 01-1.198-3.924 13.295 13.295 0 014.156-.658c4.751 0 7.021 2.627 7.021 5.615-.001 2.732-1.583 4.532-2.952 6.044z"></path>
          </svg>
          <p onClick={Help}>Besoin d'aide ?</p>
          <svg
            onClick={Help}
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            cursor="pointer"
            width="12px"
            enableBackground="new 0 0 25.93 25.93"
            version="1.1"
            viewBox="0 0 25.93 25.93"
            xmlSpace="preserve"
          >
            <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
          </svg>
        </div>
        {/* display-help */}
      </div>

      {popupHelp && (
        <>
          <div className="popupHelp-background" onClick={Help}>
            <div className="align">
              <div className="card">
                <div style={{ paddingBottom: "20px" }}>
                  <svg
                    onClick={Help}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    x="0"
                    y="0"
                    fill="blue"
                    enableBackground="new 0 0 46.071 46.071"
                    version="1.1"
                    viewBox="0 0 46.071 46.071"
                    xmlSpace="preserve"
                  >
                    <path d="M45.999 8.427A8.398 8.398 0 0037.602.056H8.397A8.398 8.398 0 000 8.481l.071 22.284c.015 4.628 3.77 8.29 8.398 8.29h8.294l3.922 5.705c.529.76 1.396 1.253 2.321 1.255.925.002 1.793-.508 2.326-1.265l3.969-5.695h8.373c2.231 0 4.371-.807 5.947-2.387a8.303 8.303 0 002.45-5.916l-.072-22.325zM22.404 32.811c-1.747 0-2.934-1.286-2.934-3 0-1.748 1.22-3.001 2.934-3.001 1.781 0 2.936 1.253 2.968 3.001 0 1.713-1.187 3-2.968 3zm4.249-14.076c-1.331 1.475-1.618 2.879-1.618 4.499a2.18 2.18 0 01-2.179 2.18h-.897a2.18 2.18 0 01-2.179-2.146l-.003-.233c-.108-1.836.504-3.75 2.123-5.693 1.152-1.369 2.088-2.543 2.088-3.767 0-1.26-.828-2.099-2.627-2.171-.549 0-1.152.092-1.735.254a2.053 2.053 0 01-1.198-3.924 13.295 13.295 0 014.156-.658c4.751 0 7.021 2.627 7.021 5.615-.001 2.732-1.583 4.532-2.952 6.044z"></path>
                  </svg>
                  <p onClick={Help}>Besoin d'aide ?</p>
                </div>
                {/* display-help */}

                <p>
                  L'Equipe Omisify est à votre disposition pour vous aider à
                  ajouter le logo de la marque Omisify à votre photo ou vidéo
                </p>

                {/*
                <NavLink style={{ textDecoration: "none" }} to="/">
                  <p style={{ color: "blue", paddingTop: "15px" }}>
                    Demander de l'aide à l'Equipe Omisify
                  </p>
                </NavLink>
                */}

                <p
                  onClick={Maintenance}
                  style={{ color: "blue", paddingTop: "15px" }}
                >
                  ..
                </p>
              </div>
            </div>
          </div>
        </>
      )}

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
    </>
  );
}
