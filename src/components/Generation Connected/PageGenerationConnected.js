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
import whited from "../Home Omisify/img/omisify-white.png";

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

  // page Facebook en attente de validation
  const [
    pageFacebookEnAttenteDeValidation,
    setPageFacebookEnAttenteDeValidation,
  ] = useState(false);

  function PageFacebookEnAttenteDeValidation() {
    setPageFacebookEnAttenteDeValidation(!pageFacebookEnAttenteDeValidation);
  }

  // popup help
  const [popupHelp, setPopupHelp] = useState(false);
  function Help() {
    setPopupHelp(!popupHelp);
  }

  // compte - popup Choisir lien ou capture
  const [popupChoisirLienOuCaptureCompte, setPopupChoisirLienOuCaptureCompte] =
    useState(false);

  function ChoisirLienOuCaptureCompte() {
    setPopupChoisirLienOuCaptureCompte(!popupChoisirLienOuCaptureCompte);
  }

  // popup Choisir Page Ou Compte
  const [popupChoisirPageOuCompte, setPopupChoisirPageOuCompte] =
    useState(false);

  function ChoisirPageOuCompte() {
    setPopupChoisirPageOuCompte(!popupChoisirPageOuCompte);
  }

  // page
  const [page, setPage] = useState(true);
  function Page() {
    setPage(true);
    setCompte(false);
  }

  // compte
  const [compte, setCompte] = useState(false);
  function Compte() {
    setPage(false);
    setCompte(true);
  }

  // page - popup Choisir lien ou capture
  const [popupChoisirLienOuCapturePage, setPopupChoisirLienOuCapturePage] =
    useState(false);

  function ChoisirLienOuCapturePage() {
    setPopupChoisirLienOuCapturePage(!popupChoisirLienOuCapturePage);
  }

  const [popupAdd, setPopupAdd] = useState(false);
  function Add() {
    setPopupAdd(!popupAdd);
  }

  // page
  // page
  // lien page
  const [lienPage, setLienPage] = useState(true);
  function LienPage() {
    setLienPage(true);
    setCapturePage(false);
  }

  // capture page
  const [capturePage, setCapturePage] = useState(false);
  function CapturePage() {
    setLienPage(false);
    setCapturePage(true);
  }

  // compte
  // compte
  // lien compte
  const [lienCompte, setLienCompte] = useState(true);
  function LienCompte() {
    setLienCompte(true);
    setCaptureCompte(false);
  }

  // capture compte
  const [captureCompte, setCaptureCompte] = useState(false);
  function CaptureCompte() {
    setLienCompte(false);
    setCaptureCompte(true);
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

  // fb success
  function FbSuccess() {
    const unFb = "1";
    localStorage.setItem("https://omisify.com/fb-un", unFb);

    window.location = "/fb-ajouter-page-success";
  }

  const fbUn = localStorage.getItem("https://omisify.com/fb-un");

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
                <div className="display">
                  {fbUn ? (
                    <>
                      <svg
                        onClick={PageFacebookEnAttenteDeValidation}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        width="20px"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                      </svg>

                      <p
                        onClick={PageFacebookEnAttenteDeValidation}
                        style={{ color: "black" }}
                      >
                        Alrani
                      </p>
                    </>
                  ) : (
                    <>
                      <svg
                        onClick={PopupBefore}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        width="20px"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                      </svg>

                      <p onClick={PopupBefore} style={{ color: "black" }}>
                        Alrani
                      </p>
                    </>
                  )}
                </div>
                {/* display */}

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
          <div
            onClick={PageFacebookEnAttenteDeValidation}
            className="popup-page-en-attente-de-validation-opacity"
          >
            <div className="align">
              <div className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  width="25px"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  fill="blue"
                  data-name="Layer 1"
                  viewBox="0 0 16 16"
                >
                  <circle
                    cx="12.5"
                    cy="11.5"
                    r="1.5"
                    className="cls-1"
                  ></circle>
                  <path
                    d="M14 4.693l-8.182 8.182L2 9.057 3.636 7.42l2.25 2.25 6.546-6.545z"
                    className="cls-2"
                  ></path>
                </svg>
                <p>
                  La Page Facebook que vous avez ajouté est en attente de
                  validation
                </p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-page-en-attente-de-validation-opacity */}
        </>
      )}
      {/* page ajouté - en attente de validation */}

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
              <div className="space">
                <svg
                  onClick={Add}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  cursor="pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M7.53 6.47a.75.75 0 00-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 101.06 1.06L12 13.06l4.47 4.47a.75.75 0 101.06-1.06L13.06 12l4.47-4.47a.75.75 0 00-1.06-1.06L12 10.94z"
                    clipRule="evenodd"
                  ></path>
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

              <div className="card">
                {compte && (
                  <>
                    <div className="display">
                      <p
                        onClick={ChoisirPageOuCompte}
                        style={{
                          cursor: "pointer",
                          color: "red",
                          fontSize: "18px",
                        }}
                      >
                        Compte Alrani
                      </p>
                      <svg
                        onClick={ChoisirPageOuCompte}
                        style={{ paddingLeft: "5px", paddingTop: "4px" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        cursor="pointer"
                        version="1.1"
                        viewBox="0 0 40 40"
                        xmlSpace="preserve"
                      >
                        <path d="M19.962 28.131a.941.941 0 01-.67-.281L5.27 13.542a.938.938 0 111.337-1.313l13.354 13.625L33.394 12.15a.939.939 0 011.326-.015.941.941 0 01.013 1.327L20.632 27.85a.945.945 0 01-.67.281z"></path>
                      </svg>
                    </div>
                    {/* display */}
                  </>
                )}

                {page && (
                  <>
                    <div className="display">
                      <p
                        onClick={ChoisirPageOuCompte}
                        style={{
                          cursor: "pointer",
                          color: "red",
                          fontSize: "18px",
                        }}
                      >
                        Page Facebook
                      </p>
                      <svg
                        onClick={ChoisirPageOuCompte}
                        style={{ paddingLeft: "5px", paddingTop: "4px" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="12px"
                        cursor="pointer"
                        version="1.1"
                        viewBox="0 0 40 40"
                        xmlSpace="preserve"
                      >
                        <path d="M19.962 28.131a.941.941 0 01-.67-.281L5.27 13.542a.938.938 0 111.337-1.313l13.354 13.625L33.394 12.15a.939.939 0 011.326-.015.941.941 0 01.013 1.327L20.632 27.85a.945.945 0 01-.67.281z"></path>
                      </svg>
                    </div>
                    {/* display */}
                  </>
                )}

                {page && (
                  <>
                    <div className="ajouter-compte-fb">
                      <p>Ajouter une Page Facebook</p>
                    </div>
                  </>
                )}

                {compte && (
                  <>
                    <div className="ajouter-compte-fb">
                      <p>Ajouter un Compte Alrani</p>
                    </div>
                    {/* ajouter-compte-fb */}
                  </>
                )}

                <div className="input-nom-page-fb">
                  <div className="align-in-center">
                    <input type="text" placeholder="E-mail" />
                  </div>
                </div>
                {/* input-nom-page-fb */}

                {page && (
                  <>
                    <div className="btn-ajouter-nouvelle-page-fb">
                      <button onClick={FbSuccess}>Ajouter</button>
                    </div>
                  </>
                )}

                {compte && (
                  <>
                    <div className="btn-ajouter-nouvelle-page-fb">
                      <button onClick={FbSuccess}>Ajouter</button>
                    </div>
                  </>
                )}
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
                    Entrer l'adresse e-mail de votre Compte Alrani pour lié
                    votre compte Alrani à votre compte Omisify
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

      {/* choisir page ou compte - popup */}
      {/* choisir page ou compte - popup */}
      {popupChoisirPageOuCompte && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={ChoisirPageOuCompte}
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
                {/* page */}
                {/* page */}
                {page && (
                  <>
                    <div onClick={Page} className="active">
                      <p>Page Facebook</p>
                    </div>
                  </>
                )}

                {!page && (
                  <>
                    <div onClick={Page} className="no-active">
                      <p>Page Facebook</p>
                    </div>
                  </>
                )}

                {/* compte */}
                {/* compte */}
                {compte && (
                  <>
                    <div onClick={Compte} className="active">
                      <p>Compte Facebook</p>
                    </div>
                  </>
                )}

                {!compte && (
                  <>
                    <div onClick={Compte} className="no-active">
                      <p>Compte Facebook</p>
                    </div>
                  </>
                )}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
        </>
      )}
      {/* choisir page ou compte - popup */}

      {/* page - popup choisir lien ou capture */}
      {/* page - popup choisir lien ou capture */}
      {popupChoisirLienOuCapturePage && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={ChoisirLienOuCapturePage}
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
                {/* lien de la page */}
                {/* lien de la page */}
                {lienPage && (
                  <>
                    <div onClick={LienPage} className="active">
                      <p>Lien de la Page</p>
                    </div>
                  </>
                )}

                {!lienPage && (
                  <>
                    <div onClick={LienPage} className="no-active">
                      <p>Lien de la Page</p>
                    </div>
                  </>
                )}

                {/* capture de la page */}
                {/* capture de la page */}
                {capturePage && (
                  <>
                    <div onClick={CapturePage} className="active">
                      <p>Capture d'écran de la Page</p>
                    </div>
                  </>
                )}

                {!capturePage && (
                  <>
                    <div onClick={CapturePage} className="no-active">
                      <p>Capture d'écran de la Page</p>
                    </div>
                  </>
                )}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
        </>
      )}
      {/* page - popup choisir lien ou capture */}

      {/* compte - popup choisir lien ou capture */}
      {/* compte - popup choisir lien ou capture */}
      {popupChoisirLienOuCaptureCompte && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={ChoisirLienOuCaptureCompte}
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
                {/* lien du compte */}
                {/* lien du compte */}
                {lienCompte && (
                  <>
                    <div onClick={LienCompte} className="active">
                      <p>Lien du Compte</p>
                    </div>
                  </>
                )}

                {!lienCompte && (
                  <>
                    <div onClick={LienCompte} className="no-active">
                      <p>Lien du Compte</p>
                    </div>
                  </>
                )}

                {/* capture du compte */}
                {/* capture du compte */}
                {captureCompte && (
                  <>
                    <div onClick={CaptureCompte} className="active">
                      <p>Capture d'écran du Compte</p>
                    </div>
                  </>
                )}

                {!captureCompte && (
                  <>
                    <div onClick={CaptureCompte} className="no-active">
                      <p>Capture d'écran du Compte</p>
                    </div>
                  </>
                )}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
        </>
      )}
      {/* compte - popup choisir lien ou capture */}

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
                  <a href={whited} download="Omisify-white-logo">
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
