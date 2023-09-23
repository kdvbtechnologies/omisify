import { useState } from "react";
import { NavLink } from "react-router-dom";
import PopupMaintenance from "../Home Omisify/Maintenance/PopupMaintenance";
import aqua from "../Home Omisify/img/omisify-aqua.jpg";
import aquad from "../Home Omisify/img/omisify-aqua.png";
import black from "../Home Omisify/img/omisify-black.jpg";
import blackd from "../Home Omisify/img/omisify-black.png";
import bleu from "../Home Omisify/img/omisify-bleu.jpg";
import bleud from "../Home Omisify/img/omisify-bleu.png";
import vert from "../Home Omisify/img/omisify-vert.jpg";
import vertd from "../Home Omisify/img/omisify-vert.png";
import gray from "../Home Omisify/img/omisify-gray.jpg";
import grayd from "../Home Omisify/img/omisify-gray.png";
import jaune from "../Home Omisify/img/omisify-jaune.jpg";
import jauned from "../Home Omisify/img/omisify-jaune.png";
import marron from "../Home Omisify/img/omisify-marron.jpg";
import marrond from "../Home Omisify/img/omisify-marron.png";
import orange from "../Home Omisify/img/omisify-orange.jpg";
import oranged from "../Home Omisify/img/omisify-orange.png";
import red from "../Home Omisify/img/omisify-red.jpg";
import redd from "../Home Omisify/img/omisify-red.png";
import rose from "../Home Omisify/img/omisify-rose.jpg";
import rosed from "../Home Omisify/img/omisify-rose.png";
import violet from "../Home Omisify/img/omisify-violet.jpg";
import violetd from "../Home Omisify/img/omisify-violet.png";
import white from "../Home Omisify/img/omisify-white.jpg";

export default function PageGenerationConnected() {
  const go1 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401706/omisify/go1_i4pc2i.jpg";

  const go2 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401700/omisify/go2_tvongk.jpg";

  const go3 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401702/omisify/go3_zortzx.jpg";

  const go4 =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671401699/omisify/go4_payr6y.jpg";

  // help generation connected
  const [helpGenerationConnected, setHelpGenerationConnected] = useState(false);
  function HelpGenerationConnected() {
    setHelpGenerationConnected(!helpGenerationConnected);
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

  // popup menu
  const [popupMenuToRight, setPopupMenuToRight] = useState(false);
  function PopupMenuToRight() {
    setPopupMenuToRight(!popupMenuToRight);
  }

  const [list, setList] = useState(false);
  function PopupList() {
    setList(!list);
  }

  // popup help
  const [popupHelp, setPopupHelp] = useState(false);
  function Help() {
    setPopupHelp(!popupHelp);
  }

  const [popupAdd, setPopupAdd] = useState(false);
  function Add() {
    setPopupAdd(!popupAdd);
  }

  const [popupBefore, setPopupBefore] = useState(false);
  function PopupBefore() {
    setPopupBefore(!popupBefore);
  }

  // telecharger logo
  const [popupTelechargerLogo, setPopupTelechargerLogo] = useState(false);
  function TelechargerLogo() {
    setPopupTelechargerLogo(!popupTelechargerLogo);
  }

  // help telecharger logo
  const [helpTelechargerLogo, setHelpTelechargerLogo] = useState(false);
  function HelpTelechargerLogo() {
    setHelpTelechargerLogo(!helpTelechargerLogo);
  }

  // Compte Lier
  const [toggle, setToggle] = useState(false);
  function CompteLier() {
    const resCompteLier = "1";
    localStorage.setItem("https://omisify.com/res-compte-lier", resCompteLier);
    setToggle(!toggle);
  }

  const resCompteLier = localStorage.getItem(
    "https://omisify.com/res-compte-lier"
  );

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
            onClick={HelpGenerationConnected}
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

      {/* generation connected - help popup */}
      {/* generation connected - help popup */}
      {helpGenerationConnected && (
        <>
          <div
            onClick={HelpGenerationConnected}
            className="popup-help-gc-opacity"
          >
            <div className="align">
              <div className="card">
                <div style={{ marginBottom: "-5px" }} className="display">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur l'icone</li>
                  <svg
                    style={{ paddingRight: "3px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
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
                  </svg>{" "}
                  <p style={{ paddingRight: "5px" }}>ensuite</p>
                  <p style={{ paddingRight: "5px" }}>cliquer sur</p>
                  <p style={{ paddingRight: "5px", fontWeight: "bold" }}>
                    Plateforme
                  </p>
                  <p style={{ paddingRight: "5px" }}>puis</p>
                  <p style={{ paddingRight: "5px" }}>choisissez</p>
                  <p style={{ paddingRight: "5px" }}>la plateforme</p>
                  <p>où vous avez ajouter votre photo de profil</p>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* generation connected - help popup */}

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
                  de profil. Rejoindre la Génération Connecté signifie que vous
                  allez devoir ajouter le logo de la marque Omisify à votre
                  photo de profil Alrani
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
                  profil, choisissez le logo et télécharger le logo de votre
                  choix
                </p>

                <p>
                  Toutefois vous pouvez personnaliser la couleur du logo en
                  utilisant la couleur de votre choix
                </p>

                <div className="center">
                  <button onClick={TelechargerLogo}>Choisir le logo</button>
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
          <div onClick={Outil} className="popup-fonctionnement-opacity">
            <div className="align">
              <div className="card">
                <p style={{ color: "red", paddingBottom: "10px" }}>OUTIL</p>
                <div className="a">
                  <p style={{ paddingBottom: "10px" }}>
                    Après avoir télécharger le logo, utiliser l'application
                    photoshop ou tout autre outil professionnel pour ajouter le
                    logo de la marque Omisify à votre photo
                  </p>
                  <p style={{ paddingRight: "3px" }}>
                    Après l'ajout du logo à votre photo, rendez-vous sur votre
                    compte Alrani et remplacer votre ancienne photo de profil
                    par la nouvelle photo. Au niveau de votre photo de profil,
                  </p>
                  <p style={{ paddingRight: "3px" }}>cliquer sur l'icone</p>
                  <svg
                    style={{ paddingRight: "3px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
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
                  </svg>{" "}
                  <p style={{ paddingRight: "5px" }}>Puis cliquer sur</p>
                  <p style={{ paddingRight: "5px", fontWeight: "bold" }}>
                    Plus
                  </p>
                  <p style={{ paddingRight: "5px", fontWeight: "bold" }}>
                    d'options.
                  </p>
                  <p style={{ paddingRight: "5px" }}>Enfin</p>
                  <p style={{ paddingRight: "5px" }}>cliquer sur</p>
                  <p style={{ paddingRight: "5px", fontWeight: "bold" }}>
                    Ajouter à Omisify
                  </p>
                  <p>
                    pour être rémunérer chaque jour sur votre compte Omisify
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
                <p onClick={PopupList} style={{ cursor: "pointer" }}>
                  Plateforme
                </p>
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
                {resCompteLier ? (
                  <>
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/secure-page"
                    >
                      <div className="display">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          width="20px"
                          version="1.1"
                          viewBox="0 0 422 422"
                          xmlSpace="preserve"
                        >
                          <path d="M315.91 415.682c-18.036-25.363-33.765-53.708-46.749-84.248-9.987-23.464-18.514-48.622-25.406-74.934h1.595a4 4 0 000-8h-3.608c-.284-1.148-.586-2.285-.864-3.438-27.564-114.287-16.372-214.6-16.255-215.6a4.006 4.006 0 00-3.575-4.444L215 24.412V4a4 4 0 00-8 0v20.414l-6.049.606a4.004 4.004 0 00-3.575 4.444c.117 1 11.311 101.313-16.255 215.6-.278 1.152-.58 2.289-.864 3.438h-3.608a4 4 0 000 8h1.596c-6.893 26.315-15.42 51.474-25.407 74.935-12.98 30.534-28.709 58.88-46.748 84.246a4.001 4.001 0 003.26 6.318h41.69a4.001 4.001 0 003.997-4.182 40.58 40.58 0 01-.036-1.817c0-30.879 25.121-56 56-56s56 25.121 56 56c0 .61-.01 1.221-.036 1.822a3.997 3.997 0 003.996 4.177h41.689a4.001 4.001 0 003.26-6.319zM188.899 246.938c24.771-102.701 18.605-194.315 16.82-214.354l5.13-.514 5.432.514c-1.785 20.039-7.95 111.653 16.82 214.354.126.524.265 1.039.393 1.563h-44.987c.127-.524.266-1.039.392-1.563zM274.969 414c-1.06-34.367-29.349-62-63.969-62s-62.908 27.633-63.969 62h-30.017c16.536-24.193 31.046-50.878 43.186-79.434 10.393-24.417 19.213-50.643 26.295-78.066h49.009c7.081 27.42 15.901 53.645 26.295 78.065 12.142 28.56 26.651 55.244 43.185 79.435h-30.015z"></path>
                          <path d="M224.001 274.458a4 4 0 00-3.862-2.959h-18.275a3.999 3.999 0 00-3.862 2.959l-15.362 57a4 4 0 005.68 4.604 50.14 50.14 0 0122.683-5.452 50.143 50.143 0 0122.683 5.452 4 4 0 005.68-4.605l-15.365-56.999zm-13 48.152a58.162 58.162 0 00-18.513 3.045l12.439-46.156h12.146l12.439 46.156a58.145 58.145 0 00-18.511-3.045z"></path>
                        </svg>

                        <p style={{ color: "black" }}>Alrani</p>
                      </div>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <div className="display">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={PopupBefore}
                        fill="black"
                        width="20px"
                        version="1.1"
                        viewBox="0 0 422 422"
                        xmlSpace="preserve"
                      >
                        <path d="M315.91 415.682c-18.036-25.363-33.765-53.708-46.749-84.248-9.987-23.464-18.514-48.622-25.406-74.934h1.595a4 4 0 000-8h-3.608c-.284-1.148-.586-2.285-.864-3.438-27.564-114.287-16.372-214.6-16.255-215.6a4.006 4.006 0 00-3.575-4.444L215 24.412V4a4 4 0 00-8 0v20.414l-6.049.606a4.004 4.004 0 00-3.575 4.444c.117 1 11.311 101.313-16.255 215.6-.278 1.152-.58 2.289-.864 3.438h-3.608a4 4 0 000 8h1.596c-6.893 26.315-15.42 51.474-25.407 74.935-12.98 30.534-28.709 58.88-46.748 84.246a4.001 4.001 0 003.26 6.318h41.69a4.001 4.001 0 003.997-4.182 40.58 40.58 0 01-.036-1.817c0-30.879 25.121-56 56-56s56 25.121 56 56c0 .61-.01 1.221-.036 1.822a3.997 3.997 0 003.996 4.177h41.689a4.001 4.001 0 003.26-6.319zM188.899 246.938c24.771-102.701 18.605-194.315 16.82-214.354l5.13-.514 5.432.514c-1.785 20.039-7.95 111.653 16.82 214.354.126.524.265 1.039.393 1.563h-44.987c.127-.524.266-1.039.392-1.563zM274.969 414c-1.06-34.367-29.349-62-63.969-62s-62.908 27.633-63.969 62h-30.017c16.536-24.193 31.046-50.878 43.186-79.434 10.393-24.417 19.213-50.643 26.295-78.066h49.009c7.081 27.42 15.901 53.645 26.295 78.065 12.142 28.56 26.651 55.244 43.185 79.435h-30.015z"></path>
                        <path d="M224.001 274.458a4 4 0 00-3.862-2.959h-18.275a3.999 3.999 0 00-3.862 2.959l-15.362 57a4 4 0 005.68 4.604 50.14 50.14 0 0122.683-5.452 50.143 50.143 0 0122.683 5.452 4 4 0 005.68-4.605l-15.365-56.999zm-13 48.152a58.162 58.162 0 00-18.513 3.045l12.439-46.156h12.146l12.439 46.156a58.145 58.145 0 00-18.511-3.045z"></path>
                      </svg>

                      <p onClick={PopupBefore} style={{ color: "black" }}>
                        Alrani
                      </p>
                    </div>
                    {/* display */}
                  </>
                )}

                <div className="hr">
                  <hr />
                </div>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-list-opacity */}
        </>
      )}

      {/* before add page - popup */}
      {/* avant d'atterir sur add page - nous avons cette popup */}
      {popupBefore && (
        <>
          <div className="popup-before-list-of-contact-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupBefore}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  cursor="pointer"
                  version="1.1"
                  viewBox="0 0 40 40"
                  xmlSpace="preserve"
                >
                  <path d="M21.414 20L33.207 8.207a.999.999 0 10-1.414-1.414L20 18.586 8.207 6.793a.999.999 0 10-1.414 1.414L18.586 20 6.793 31.793a.999.999 0 101.414 1.414L20 21.414l11.793 11.793a.997.997 0 001.414 0 .999.999 0 000-1.414L21.414 20z"></path>
                </svg>
              </div>
              {/* close */}

              <div className="card">
                <p>Ajouter un Compte Alrani</p>
                <button onClick={Add}>Ajouter</button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-before-list-of-contact-opacity */}
        </>
      )}
      {/* before add page - popup */}
      {/* avant d'atterir sur add page - nous avons cette popup */}

      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {popupAdd && (
        <>
          <div className="popup-add-page-fb-opacity">
            <div className="align">
              {!toggle && (
                <>
                  <div className="space">
                    <svg
                      onClick={Add}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      cursor="pointer"
                      fill="white"
                      version="1.1"
                      viewBox="0 0 40 40"
                      xmlSpace="preserve"
                    >
                      <path d="M21.414 20L33.207 8.207a.999.999 0 10-1.414-1.414L20 18.586 8.207 6.793a.999.999 0 10-1.414 1.414L18.586 20 6.793 31.793a.999.999 0 101.414 1.414L20 21.414l11.793 11.793a.997.997 0 001.414 0 .999.999 0 000-1.414L21.414 20z"></path>
                    </svg>

                    <svg
                      onClick={Help}
                      cursor="pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <g fill="yellow">
                        <path
                          fillRule="evenodd"
                          d="M8.197 4.523a1.532 1.532 0 00-1.051.196c-.318.19-.563.49-.687.85a.75.75 0 01-1.418-.49 3.1 3.1 0 011.335-1.648 3.032 3.032 0 012.079-.386 3.057 3.057 0 011.829 1.065 3.13 3.13 0 01.716 2c0 .487-.092.905-.275 1.266-.182.36-.431.62-.679.817-.194.156-.41.291-.581.398l-.096.06a2.507 2.507 0 00-.452.34.643.643 0 00-.172.292.75.75 0 01-1.499-.033c0-.163.035-.324.086-.479.08-.243.232-.543.515-.832.239-.243.505-.419.72-.554.044-.029.086-.056.126-.08.169-.106.296-.186.415-.282a.976.976 0 00.279-.323c.059-.117.113-.296.113-.59v-.002a1.63 1.63 0 00-.372-1.041c-.24-.29-.57-.481-.931-.544z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M8 11a1 1 0 100 2h.007a1 1 0 100-2H8z"></path>
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  {/* space */}
                </>
              )}

              <div className="card">
                {!toggle && (
                  <>
                    <div className="display">
                      <p
                        style={{
                          cursor: "pointer",
                          color: "red",
                          fontSize: "18px",
                        }}
                      >
                        Compte Alrani
                      </p>
                    </div>
                    {/* display */}

                    <div className="ajouter-compte-fb">
                      <p>Se connecter à un Compte</p>
                    </div>
                    {/* ajouter-compte-fb */}

                    <div className="input-nom-page-fb">
                      <div className="align-in-center">
                        <input type="text" placeholder="Adresse E-mail" />
                      </div>
                    </div>
                    {/* input-nom-page-fb */}

                    <div className="input-nom-page-fb">
                      <div className="align-in-center">
                        <input type="text" placeholder="Mot de passe" />
                      </div>
                    </div>
                    {/* input-nom-page-fb */}

                    <div className="btn-ajouter-nouvelle-page-fb">
                      <button onClick={CompteLier}>Se connecter</button>
                    </div>
                  </>
                )}

                {/* display-compte-lier-om-al */}
                {/* display-compte-lier-om-al */}
                {/* display-compte-lier-om-al */}
                {toggle && (
                  <>
                    <div className="display-compte-lier-om-al">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        version="1.1"
                        viewBox="0 0 422 422"
                        xmlSpace="preserve"
                      >
                        <path d="M315.91 415.682c-18.036-25.363-33.765-53.708-46.749-84.248-9.987-23.464-18.514-48.622-25.406-74.934h1.595a4 4 0 000-8h-3.608c-.284-1.148-.586-2.285-.864-3.438-27.564-114.287-16.372-214.6-16.255-215.6a4.006 4.006 0 00-3.575-4.444L215 24.412V4a4 4 0 00-8 0v20.414l-6.049.606a4.004 4.004 0 00-3.575 4.444c.117 1 11.311 101.313-16.255 215.6-.278 1.152-.58 2.289-.864 3.438h-3.608a4 4 0 000 8h1.596c-6.893 26.315-15.42 51.474-25.407 74.935-12.98 30.534-28.709 58.88-46.748 84.246a4.001 4.001 0 003.26 6.318h41.69a4.001 4.001 0 003.997-4.182 40.58 40.58 0 01-.036-1.817c0-30.879 25.121-56 56-56s56 25.121 56 56c0 .61-.01 1.221-.036 1.822a3.997 3.997 0 003.996 4.177h41.689a4.001 4.001 0 003.26-6.319zM188.899 246.938c24.771-102.701 18.605-194.315 16.82-214.354l5.13-.514 5.432.514c-1.785 20.039-7.95 111.653 16.82 214.354.126.524.265 1.039.393 1.563h-44.987c.127-.524.266-1.039.392-1.563zM274.969 414c-1.06-34.367-29.349-62-63.969-62s-62.908 27.633-63.969 62h-30.017c16.536-24.193 31.046-50.878 43.186-79.434 10.393-24.417 19.213-50.643 26.295-78.066h49.009c7.081 27.42 15.901 53.645 26.295 78.065 12.142 28.56 26.651 55.244 43.185 79.435h-30.015z"></path>
                        <path d="M224.001 274.458a4 4 0 00-3.862-2.959h-18.275a3.999 3.999 0 00-3.862 2.959l-15.362 57a4 4 0 005.68 4.604 50.14 50.14 0 0122.683-5.452 50.143 50.143 0 0122.683 5.452 4 4 0 005.68-4.605l-15.365-56.999zm-13 48.152a58.162 58.162 0 00-18.513 3.045l12.439-46.156h12.146l12.439 46.156a58.145 58.145 0 00-18.511-3.045z"></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        viewBox="-5.5 0 32 32"
                      >
                        <path d="M4.52 23.72c-1.2 0-2.36-.48-3.2-1.32-.84-.88-1.32-2-1.32-3.2s.48-2.36 1.32-3.2l4.24-4.24c.8-.8 1.88-1.28 3.04-1.32.48 0 .84.36.88.8 0 .48-.36.84-.8.88-.72.04-1.4.32-1.92.84l-4.24 4.2c-.52.52-.84 1.24-.84 2s.28 1.48.84 2c.52.52 1.24.84 2 .84s1.48-.28 2-.84l4.24-4.24c.52-.52.84-1.24.84-2 0-.48.36-.84.84-.84s.84.36.84.84c0 1.2-.48 2.36-1.32 3.2l-4.24 4.24c-.88.88-2 1.36-3.2 1.36zM12 21.56c-.44 0-.8-.36-.84-.8 0-.48.32-.84.8-.88.72-.04 1.4-.32 1.88-.84l4.28-4.24c1.12-1.12 1.12-2.92 0-4-1.12-1.12-2.92-1.12-4 0l-4.28 4.24c-.52.52-.8 1.2-.84 1.92 0 .48-.4.8-.88.8s-.84-.4-.8-.88c.04-1.16.52-2.24 1.32-3.04l4.28-4.24c1.76-1.76 4.64-1.76 6.4 0s1.76 4.64 0 6.4l-4.28 4.24c-.8.8-1.84 1.28-3.04 1.32.04 0 0 0 0 0z"></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100px"
                        version="1"
                        viewBox="0 0 1368 1368"
                      >
                        <path
                          d="M8938 6719c-8-5-42-11-74-14s-72-8-89-10c-16-3-115-7-220-11-104-3-224-8-265-11s-89-5-107-4c-18 0-35-4-38-9-4-6-11-7-18-3-17 10-156 1-222-14-16-4-34-8-40-8-30-3-82-19-101-31-11-8-24-11-27-7-4 3-15-1-25-10s-27-18-38-20c-10-1-25-6-32-11-22-14-74-27-177-46-232-43-245-50-265-136-26-109 0-177 115-298 41-43 72-83 68-89-3-5-9-3-14 4-6 11-11 11-21 1-16-16-45-16-52 1-5 10-7 10-12 0-3-7-14-13-24-13s-20 6-23 13c-4 10-7 10-18 0-7-7-21-13-30-13-10 0-20 6-23 13-5 10-7 10-12 0-7-15-44-17-44-3s-37 13-46-1c-5-8-8-8-13 0-5 7-83 12-226 15-121 3-236 9-255 13-39 9-107 8-160-3-28-5-447-16-594-15-16 0-35-4-42-10s-14-6-18-1c-7 13-105 13-112 0-3-5-11-5-19 2-9 8-15 8-20 0-3-5-24-10-45-10s-42-5-45-10c-5-8-11-8-20 0-8 7-15 7-19 1-6-10-31-9-41 1-4 3-18 0-33-8s-34-14-42-14-38-8-66-19c-28-10-73-22-99-25-26-4-57-11-69-16-11-4-39-13-61-19-45-14-161-58-187-72-10-5-24-9-32-9s-29-8-48-17c-18-9-45-22-60-30-14-7-32-13-40-13-27 0-58-63-58-119 0-101 68-118 202-50 10 5 26 9 36 9 9 0 26 6 37 13s40 19 65 27c25 7 52 20 61 27 8 7 24 13 35 13s29 7 40 15c10 8 39 15 64 15s54 7 64 15c11 8 29 15 41 15s25 3 28 7c4 3 17 8 30 9 12 2 74 12 137 23 98 17 172 21 492 25 208 2 381 7 386 10 18 11 138 14 186 5 73-13 681-26 906-19 47 2 113 0 147-5 61-7 62-7 98 28 25 25 36 43 34 59-2 13 0 29 4 36 5 6 5 18 0 25-4 6-6 20-5 30 2 9-1 17-7 17-5 0-13 9-16 20-7 23-62 80-116 121-19 15-60 53-91 85-31 33-67 69-80 82-16 17-18 21-5 16 9-3 17-2 17 2 0 5 34 10 76 11 51 2 80 7 90 18 9 8 24 15 34 15s31 6 47 14c115 59 218 84 378 91 44 2 118 7 165 10s150 8 230 10c182 5 325 13 370 19 19 3 51 8 70 10 19 3 51 8 70 11s78 7 130 10c167 7 194 15 216 57 20 38 15 145-7 159-18 11-341 10-361-2z"
                          transform="matrix(.1 0 0 -.1 0 1368)"
                        ></path>
                      </svg>

                      <p>
                        Votre compte Alrani a été lié à votre compte Omisify
                      </p>
                    </div>

                    <div className="btn-ajouter-nouvelle-page-fb">
                      <NavLink to="/secure-page">
                        <button>Terminer</button>
                      </NavLink>
                    </div>
                  </>
                )}
                {/* display-compte-lier-om-al */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* fb-popup-add-opacity */}
        </>
      )}
      {/* ajouter - popup */}

      {/* ajouter - help popup */}
      {/* ajouter - help popup */}
      {/* ajouter - help popup */}
      {/* ajouter - help popup */}
      {popupHelp && (
        <>
          <div
            onClick={Help}
            className="popup-help-list-of-contacts-whatsapp-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <li>
                    Connectez-vous à votre compte Alrani pour lié votre compte
                    Alrani à votre compte Omisify
                  </li>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* ajouter - help popup */}

      {/* telecharger les logo - popup */}
      {/* telecharger les logo - popup */}
      {popupTelechargerLogo && (
        <>
          <div className="popup-telecharger-logo-opacity">
            <div className="center">
              <div className="card">
                <div className="close">
                  <svg
                    onClick={TelechargerLogo}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    version="1.1"
                    viewBox="0 0 40 40"
                    xmlSpace="preserve"
                  >
                    <path d="M21.414 20L33.207 8.207a.999.999 0 10-1.414-1.414L20 18.586 8.207 6.793a.999.999 0 10-1.414 1.414L18.586 20 6.793 31.793a.999.999 0 101.414 1.414L20 21.414l11.793 11.793a.997.997 0 001.414 0 .999.999 0 000-1.414L21.414 20z"></path>
                  </svg>

                  <svg
                    onClick={HelpTelechargerLogo}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    fill="#444"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 110 2 1 1 0 010-2zm0-10a4 4 0 011.19 7.82l-.19.054V14a1 1 0 01-1.993.117L11 14v-1a1 1 0 01.883-.993l.266-.012A2 2 0 1010 10a1 1 0 01-2 0 4 4 0 014-4z"
                    ></path>
                  </svg>
                </div>
                {/* close */}

                <div className="images">
                  <a href={white} download="Omisify-white-logo">
                    <img src={white} alt="" />
                  </a>

                  <a href={jauned} download="Omisify-jaune-logo">
                    <img src={jaune} alt="" />
                  </a>

                  <a href={aquad} download="Omisify-aqua-logo">
                    <img src={aqua} alt="" />
                  </a>

                  <a href={blackd} download="Omisify-black-logo">
                    <img src={black} alt="" />
                  </a>

                  <a href={grayd} download="Omisify-gray-logo">
                    <img src={gray} alt="" />
                  </a>

                  <a href={bleud} download="Omisify-bleu-logo">
                    <img src={bleu} alt="" />
                  </a>

                  <a href={vertd} download="Omisify-vert-logo">
                    <img src={vert} alt="" />
                  </a>

                  <a href={redd} download="Omisify-red-logo">
                    <img src={red} alt="" />
                  </a>

                  <a href={rosed} download="Omisify-rose-logo">
                    <img src={rose} alt="" />
                  </a>

                  <a href={violetd} download="Omisify-violet-logo">
                    <img src={violet} alt="" />
                  </a>

                  <a href={marrond} download="Omisify-marron-logo">
                    <img src={marron} alt="" />
                  </a>

                  <a href={oranged} download="Omisify-orange-logo">
                    <img src={orange} alt="" />
                  </a>
                </div>
                {/* images */}
              </div>
              {/* card */}
            </div>
            {/* center */}
          </div>
          {/* popup-telecharger-les-logo-opacity */}
        </>
      )}
      {/* telecharger les logo - popup */}

      {/* help telecharger logo */}
      {/* help telecharger logo */}
      {/* help telecharger logo */}
      {/* help telecharger logo */}
      {/* help telecharger logo */}
      {/* help telecharger logo */}
      {helpTelechargerLogo && (
        <>
          <div
            onClick={HelpTelechargerLogo}
            className="popup-help-list-of-contacts-whatsapp-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <li style={{ paddingRight: "5px" }}>
                    Cliquer sur le logo de votre choix et le téléchargement du
                    logo au format PNG sera lancé automatiquement
                  </li>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* help telecharger logo */}
    </>
  );
}
