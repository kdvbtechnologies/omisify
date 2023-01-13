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

  // pour utiliser levier, rejoindre GC
  const [pourUtiliserLevierRejoindreGC, setPourUtiliserLevierRejoindreGC] =
    useState(false);

  function PourUtiliserLevierRejoindreGC() {
    setPourUtiliserLevierRejoindreGC(!pourUtiliserLevierRejoindreGC);
  }

  // Avant Processus Activer Levier Popup
  const [
    avantProcessusActiverLevierPopup,
    setAvantProcessusActiverLevierPopup,
  ] = useState(false);

  function AvantProcessusActiverLevierPopup() {
    setAvantProcessusActiverLevierPopup(!avantProcessusActiverLevierPopup);
  }

  // Debut Processus Activer Levier Popup
  const [
    debutProcessusActiverLevierPopup,
    setDebutProcessusActiverLevierPopup,
  ] = useState(false);

  function DebutProcessusActiverLevierPopup() {
    setDebutProcessusActiverLevierPopup(!debutProcessusActiverLevierPopup);
  }

  // deuxieme Processus Activer Levier Popup
  const [
    deuxiemeProcessusActiverLevierPopup,
    setDeuxiemeProcessusActiverLevierPopup,
  ] = useState(false);

  function DeuxiemeProcessusActiverLevierPopup() {
    setDeuxiemeProcessusActiverLevierPopup(
      !deuxiemeProcessusActiverLevierPopup
    );
  }

  // help deuxieme Processus Activer Levier Popup
  const [
    helpDeuxiemeProcessusActiverLevier,
    setHelpDeuxiemeProcessusActiverLevier,
  ] = useState(false);

  function HelpDeuxiemeProcessusActiverLevier() {
    setHelpDeuxiemeProcessusActiverLevier(!helpDeuxiemeProcessusActiverLevier);
  }

  // Choisir Groupe Popup
  const [choisirGroupePopup, setChoisirGroupePopup] = useState(false);
  function ChoisirGroupePopup() {
    setChoisirGroupePopup(!choisirGroupePopup);
  }

  // telegram Group
  const [telegramGroup, setTelegramGroup] = useState(true);
  function TelegramGroup() {
    setTelegramGroup(true);
    setWhatsappGroup(false);
  }

  // whatsapp Group
  const [whatsappGroup, setWhatsappGroup] = useState(false);
  function WhatsappGroup() {
    setTelegramGroup(false);
    setWhatsappGroup(true);
  }

  // help Ajouter Un Groupe
  const [helpAjouterUnGroupe, setHelpAjouterUnGroupe] = useState(false);
  function HelpAjouterUnGroupe() {
    setHelpAjouterUnGroupe(!helpAjouterUnGroupe);
  }

  /*
  // popup ajouter contact
  const [addaWhatsappContact, setAddaWhatsappContact] = useState("");

  // popup genre
  const [popupGenre, setPopupGenre] = useState(false);
  function PopupGenre() {
    setPopupGenre(!popupGenre);
  }

  const [homme, sethomme] = useState(true);
  function Homme() {
    sethomme(true);
    setfemme(false);
    settrans(false);
  }

  const [femme, setfemme] = useState(false);
  function Femme() {
    sethomme(false);
    setfemme(true);
    settrans(false);
  }

  const [trans, settrans] = useState(false);
  function Trans() {
    sethomme(false);
    setfemme(false);
    settrans(true);
  }

  // age
  // age
  // age
  const [popupAge, setPopupAge] = useState(false);
  function PopupAge() {
    setPopupAge(!popupAge);
  }

  const [dixseptans, setdixseptans] = useState(true);
  function Dixseptans() {
    setdixseptans(true);
    setdixhuitans(false);
  }

  const [dixhuitans, setdixhuitans] = useState(false);
  function Dixhuitans() {
    setdixseptans(false);
    setdixhuitans(true);
  }
*/

  // pays
  // pays
  // pays
  /*
  const [popupCountry, setPopupCountry] = useState(false);
  function PopupCountry() {
    setPopupCountry(!popupCountry);
  }

  const [congo, setCongo] = useState(true);
  function Congo() {
    setCongo(true);
    setGuineeE(false);
  }

  const [guineeE, setGuineeE] = useState(false);
  function GuineeE() {
    setCongo(false);
    setGuineeE(true);
  }
  */

  /* ajouter contact
  function AjouterContactSuccess() {
    window.location = "/ajouter-contact-success";
  }


  // popup infos capture d'ecran
  const [popupInfosCaptureDecran, setPopupInfosCaptureDecran] = useState(false);
  function InfosCaptureDecran() {
    setPopupInfosCaptureDecran(!popupInfosCaptureDecran);
  }
  */

  // youtube activer levier
  const [youtubeSelected, setYoutubeSelected] = useState(false);
  function YoutubeSelected() {
    setYoutubeSelected(!youtubeSelected);
  }

  // Facebook activer levier
  const [facebookSelected, setFacebookSelected] = useState(false);
  function FacebookSelected() {
    setFacebookSelected(!facebookSelected);
  }

  // Levier Success Page
  function LevierSuccessPage() {
    window.location = "/levier-success";
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
                <div className="display">
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
                    Réseaux
                  </p>
                  <p style={{ paddingRight: "5px", fontWeight: "bold" }}>
                    sociaux
                  </p>
                  <p style={{ paddingRight: "5px" }}>puis</p>
                  <p style={{ paddingRight: "5px" }}>choisissez</p>
                  <p style={{ paddingRight: "5px" }}>le réseau social</p>
                  <p>où vous avez ajouter votre photo de profil</p>
                </div>
                {/* display*/}

                <div className="display-indice-two">
                  <li style={{ fontWeight: "bold" }}>Levier</li>
                  <p style={{ paddingBottom: "5px" }}>
                    Pourquoi devez-vous utiliser le Levier ?
                  </p>

                  <p style={{ paddingBottom: "7px" }}>
                    Vous devez utiliser le Levier pour bénéficier de sa
                    Puissance. L'avantage du Levier est qu'il dispose d'une
                    Puissance que vous n'imaginer même pas. Le Levier est
                    exponentielle, c'est la multiplication
                  </p>

                  <p>
                    La rémunération que vous gagnez d'habitude sera multiplié
                    par le nombre d'abonnés ou le nombre d'amis que vous avez
                    sur vos réseaux sociaux. Plus vos abonnés augmentent, plus
                    votre argent ne va faire qu'augmenter, votre rémunération ne
                    va faire que grimper, ce qui fera que vous gagnerez beaucoup
                    d'argent grâce à la Puissance du Levier
                  </p>
                </div>
                {/* display-indice-two */}
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
                  de profil. Rejoindre la Génération Connecté signifie que vous
                  allez devoir ajouter le logo de la marque Omisify à votre
                  photo de profil Facebook, Whatsapp ou Youtube
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
                    Après l'ajout du logo à votre photo, rendez-vous sur vos
                    réseaux sociaux et remplacer votre ancienne photo de profil
                    par la nouvelle photo. Puis récuperer le lien de la photo de
                    profil ou le lien de votre compte ou tout simplement prenez
                    une capture d'écran de votre compte et venez l'ajouter au
                    niveau de votre compte Omisify, pour cela, dans l'onglet
                    Génération Connecté,
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
                  <p style={{ paddingRight: "5px" }}>, allez dans</p>
                  <p style={{ paddingRight: "5px", fontWeight: "bold" }}>
                    Réseaux
                  </p>
                  <p style={{ paddingRight: "5px", fontWeight: "bold" }}>
                    sociaux
                  </p>
                  <p style={{ paddingRight: "5px" }}>et</p>
                  <p style={{ paddingRight: "5px" }}>choisissez</p>
                  <p style={{ paddingRight: "5px" }}>le réseau social</p>
                  <p style={{ paddingRight: "5px" }}>
                    où vous avez ajouter votre photo de profil, n'hésitez pas à
                    cliquer
                  </p>
                  <p style={{ paddingRight: "5px" }}>sur chaque icone</p>
                  <svg
                    style={{ paddingRight: "3px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <g fill="blue">
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
                  <p style={{ paddingRight: "5px" }}>pour savoir</p>
                  <p>les instructions à chaque niveau</p>
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

                <p
                  onClick={AvantProcessusActiverLevierPopup}
                  style={{ cursor: "pointer" }}
                >
                  Levier
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
                    onClick={PageFacebookEnAttenteDeValidation}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    width="20px"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                  </svg>
                  <p onClick={PageFacebookEnAttenteDeValidation}>Whatsapp</p>
                </div>
                {/* display */}

                <div className="hr">
                  <hr />
                </div>

                <div className="display">
                  <svg
                    onClick={Add}
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
                  <p onClick={PopupBefore}>Telegram</p>
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

      {/* pour utiliser le levier - rejoindre la GC */}
      {/* pour utiliser le levier - rejoindre la GC */}
      {pourUtiliserLevierRejoindreGC && (
        <>
          <div
            onClick={PourUtiliserLevierRejoindreGC}
            className="popup-page-en-attente-de-validation-opacity"
          >
            <div className="align">
              <div className="card">
                <p>
                  Pour utiliser le Levier, vous devez Rejoindre la Génération
                  Connecté
                </p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-page-en-attente-de-validation-opacity */}
        </>
      )}
      {/* pour utiliser le levier - rejoindre la GC */}

      {/* avant processus activer levier - popup */}
      {/* avant processus activer levier - popup */}
      {avantProcessusActiverLevierPopup && (
        <>
          <div className="popup-before-list-of-contact-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={AvantProcessusActiverLevierPopup}
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
                <p>
                  Cliquer sur Continuer et activer le Levier en 02 étapes
                  simples
                </p>
                <button onClick={DebutProcessusActiverLevierPopup}>
                  Continuer
                </button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-before-list-of-contact-opacity */}
        </>
      )}
      {/* avant processus activer levier - popup */}

      {/* debut Processus Activer Levier - Popup */}
      {/* debut Processus Activer Levier - Popup */}
      {debutProcessusActiverLevierPopup && (
        <>
          <div className="debut-processus-activer-levier-popup">
            <div className="align">
              <div className="close">
                <svg
                  onClick={DebutProcessusActiverLevierPopup}
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
                  onClick={HelpAjouterUnGroupe}
                  cursor="pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <g fill="#fcff07">
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
              {/* close */}

              <div className="card">
                <div className="display">
                  <div className="a">
                    <p style={{ fontSize: "17px", color: "red" }}>01</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="red"
                      version="1.1"
                      viewBox="0 0 511.999 511.999"
                      xmlSpace="preserve"
                    >
                      <path d="M505.727 240.511L399.06 134.229c-3.989-4.011-9.408-6.229-15.061-6.229H21.332c-8.619 0-16.427 5.205-19.712 13.184-3.307 7.979-1.451 17.173 4.651 23.253L98.154 256 6.271 347.562c-6.101 6.08-7.957 15.275-4.651 23.253 3.285 7.979 11.093 13.184 19.712 13.184h362.667c5.675 0 11.115-2.24 15.104-6.272L505.77 270.676c4.011-4.011 6.229-9.429 6.229-15.104a21.29 21.29 0 00-6.272-15.061z"></path>
                    </svg>
                  </div>
                  {/* a */}

                  <div className="a">
                    <p style={{ fontSize: "17px", color: "#ccc" }}>02</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="#ccc"
                      version="1.1"
                      viewBox="0 0 512.043 512.043"
                      xmlSpace="preserve"
                    >
                      <path d="M505.767 240.525L399.101 134.243a21.335 21.335 0 00-15.058-6.221H21.376c-19.024 0-28.534 23.017-15.058 36.445l91.884 91.555-91.884 91.554c-13.476 13.428-3.967 36.445 15.058 36.445h362.667a21.332 21.332 0 0015.112-6.276l106.667-107.051c8.316-8.345 8.291-21.853-.055-30.169zm-130.583 100.83H73.01l70.474-70.221c8.367-8.337 8.367-21.887 0-30.224L73.01 170.688h302.218l85.311 85.004-85.355 85.663z"></path>
                    </svg>
                  </div>
                </div>
                {/* a */}

                {!facebookSelected && (
                  <>
                    <div className="display-debut-processus-activer-levier">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={FacebookSelected}
                        width="20px"
                        fill="#444"
                        cursor="pointer"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5z"></path>
                      </svg>

                      <p
                        style={{ cursor: "pointer" }}
                        onClick={FacebookSelected}
                      >
                        Facebook
                      </p>
                    </div>
                    {/* display-debut-processus-activer-levier */}
                  </>
                )}

                {facebookSelected && (
                  <>
                    <div className="display-debut-processus-activer-levier">
                      <svg
                        onClick={FacebookSelected}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        fill="#00cc00"
                        cursor="pointer"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0
                        011-1zm7.003 13l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414
                        1.414L11.003 16z"
                        ></path>
                      </svg>

                      <p
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={FacebookSelected}
                      >
                        Facebook
                      </p>
                    </div>
                    {/* display-debut-processus-activer-levier */}
                  </>
                )}

                {!youtubeSelected && (
                  <>
                    <div className="display-debut-processus-activer-levier">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={YoutubeSelected}
                        width="20px"
                        cursor="pointer"
                        fill="#444"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5z"></path>
                      </svg>

                      <p
                        style={{ cursor: "pointer" }}
                        onClick={YoutubeSelected}
                      >
                        Youtube
                      </p>
                    </div>
                    {/* display-debut-processus-activer-levier */}
                  </>
                )}

                {youtubeSelected && (
                  <>
                    <div className="display-debut-processus-activer-levier">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={YoutubeSelected}
                        width="20px"
                        fill="#00cc00"
                        cursor="pointer"
                        viewBox="0 0 24 24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0
                        011-1zm7.003 13l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414
                        1.414L11.003 16z"
                        ></path>
                      </svg>

                      <p
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={YoutubeSelected}
                      >
                        Youtube
                      </p>
                    </div>
                    {/* display-debut-processus-activer-levier */}
                  </>
                )}

                {youtubeSelected || facebookSelected ? (
                  <>
                    <button onClick={DeuxiemeProcessusActiverLevierPopup}>
                      Continuer
                    </button>
                  </>
                ) : (
                  <>
                    <p></p>
                  </>
                )}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* debut-processus-activer-levier-popup */}
        </>
      )}
      {/* debut Processus Activer Levier - Popup */}

      {/* help Ajouter Un Groupe - popup */}
      {/* help Ajouter Un Groupe - popup */}
      {helpAjouterUnGroupe && (
        <>
          <div
            onClick={HelpAjouterUnGroupe}
            className="popup-help-list-of-contacts-whatsapp-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <li>
                    Sélectionner le Réseau Social auquel vous voulez activer le
                    Levier
                  </li>
                </div>
                {/* display */}

                <div className="display-indice-two">
                  <li style={{ paddingRight: "5px" }}>
                    Sélectionner plusieurs Réseaux Sociaux si vous voulez
                    activer le Levier pour plusieurs Réseaux Sociaux
                  </li>
                </div>
                {/* display-indice-two */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* help Ajouter Un Groupe - popup */}

      {/* Deuxieme Processus Activer Levier Popup */}
      {/* Deuxieme Processus Activer Levier Popup 
      {deuxiemeProcessusActiverLevierPopup && (
        <>
          <div className="add-a-whatsapp-contact-opacity">
            <div className="align">
              <div className="close">
                <svg
                  style={{ paddingRight: "50px" }}
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
                  onClick={DeuxiemeProcessusActiverLevierPopup}
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
              {/* close 

              <div className="card">
                <div className="display-element">
                  <div className="a">
                    <p style={{ fontSize: "17px", color: "#ccc" }}>01</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="#ccc"
                      version="1.1"
                      viewBox="0 0 512.043 512.043"
                      xmlSpace="preserve"
                    >
                      <path d="M505.767 240.525L399.101 134.243a21.335 21.335 0 00-15.058-6.221H21.376c-19.024 0-28.534 23.017-15.058 36.445l91.884 91.555-91.884 91.554c-13.476 13.428-3.967 36.445 15.058 36.445h362.667a21.332 21.332 0 0015.112-6.276l106.667-107.051c8.316-8.345 8.291-21.853-.055-30.169zm-130.583 100.83H73.01l70.474-70.221c8.367-8.337 8.367-21.887 0-30.224L73.01 170.688h302.218l85.311 85.004-85.355 85.663z"></path>
                    </svg>
                  </div>
                  {/* a 

                  <div className="a">
                    <p style={{ fontSize: "17px", color: "red" }}>02</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="red"
                      version="1.1"
                      viewBox="0 0 511.999 511.999"
                      xmlSpace="preserve"
                    >
                      <path d="M505.727 240.511L399.06 134.229c-3.989-4.011-9.408-6.229-15.061-6.229H21.332c-8.619 0-16.427 5.205-19.712 13.184-3.307 7.979-1.451 17.173 4.651 23.253L98.154 256 6.271 347.562c-6.101 6.08-7.957 15.275-4.651 23.253 3.285 7.979 11.093 13.184 19.712 13.184h362.667c5.675 0 11.115-2.24 15.104-6.272L505.77 270.676c4.011-4.011 6.229-9.429 6.229-15.104a21.29 21.29 0 00-6.272-15.061z"></path>
                    </svg>
                  </div>
                  {/* a 

                  <div className="a">
                    <p style={{ fontSize: "17px", color: "#ccc" }}>03</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="#ccc"
                      version="1.1"
                      viewBox="0 0 512.043 512.043"
                      xmlSpace="preserve"
                    >
                      <path d="M505.767 240.525L399.101 134.243a21.335 21.335 0 00-15.058-6.221H21.376c-19.024 0-28.534 23.017-15.058 36.445l91.884 91.555-91.884 91.554c-13.476 13.428-3.967 36.445 15.058 36.445h362.667a21.332 21.332 0 0015.112-6.276l106.667-107.051c8.316-8.345 8.291-21.853-.055-30.169zm-130.583 100.83H73.01l70.474-70.221c8.367-8.337 8.367-21.887 0-30.224L73.01 170.688h302.218l85.311 85.004-85.355 85.663z"></path>
                    </svg>
                    /
                  </div>
                  {/* a 
                </div>
                {/* display-element

                <div className="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    width="35px"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                  </svg>
                </div>

                <div className="center">
                  <p
                    style={{
                      fontSize: "17px",
                      paddingBottom: "16px",
                      paddingTop: "5px",
                    }}
                  >
                    Nouveau Contact
                  </p>

                  <input type="text" placeholder="Nom(s)" />

                  <input
                    type="number"
                    name="addaWhatsappContact"
                    placeholder="Numéro Whatsapp"
                    value={addaWhatsappContact}
                    onChange={(e) => setAddaWhatsappContact(e.target.value)}
                  />
                </div>
                {/* center

                {/* homme
                {/* homme
                {homme && (
                  <>
                    <div className="genre">
                      <p onClick={PopupGenre}>Homme</p>
                      <svg
                        onClick={PopupGenre}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
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

                {/* femme 
                {/* femme 
                {femme && (
                  <>
                    <div className="genre">
                      <p onClick={PopupGenre}>Femme</p>
                      <svg
                        onClick={PopupGenre}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
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

                {/* trans 
                {/* trans 
                {trans && (
                  <>
                    <div className="genre">
                      <p onClick={PopupGenre}>Trans</p>
                      <svg
                        onClick={PopupGenre}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
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
                <div className="hr">
                  <hr />
                </div>

                {/* age 
                {/* age 
                {/* age 

                {/* 17 ans 
                {/* 17 ans 
                {dixseptans && (
                  <>
                    <div className="genre">
                      <p onClick={PopupAge}>17 ans</p>
                      <svg
                        onClick={PopupAge}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
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

                {/* 18 ans 
                {/* 18 ans 
                {dixhuitans && (
                  <>
                    <div className="genre">
                      <p onClick={PopupAge}>18 ans</p>
                      <svg
                        onClick={PopupAge}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
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
                <div className="hr">
                  <hr />
                </div>

                {/* pays
                {/* pays
                {/* pays

                {/* congo
                {/* congo
                {congo && (
                  <>
                    <div className="genre">
                      <p onClick={PopupCountry}>Congo</p>
                      <svg
                        onClick={PopupCountry}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
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

                {guineeE && (
                  <>
                    <div className="genre">
                      <p onClick={PopupCountry}>Guinée Equatoriale</p>
                      <svg
                        onClick={PopupCountry}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
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
                <div className="hr">
                  <hr />
                </div>

                <div className="center">
                  <input type="text" placeholder="Ville" />
                </div>
                {/* center

                <div className="capture-decran-du-contact">
                  <div className="display">
                    <svg
                      style={{ paddingRight: "5px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      viewBox="0 0 30 30"
                    >
                      <path d="M21.167 12c-.402 0-.76.207-1.02.48l-5.993 6.296c-.26.29-.543.268-.792 0l-2.996-3.25c-.3-.324-.686-.52-1.107-.526-.422-.005-.814.205-1.115.543L3.16 21.136c-.48.48.26 1.21.737.682l4.986-5.593c.355-.41.626-.154.776.018l2.996 3.25c.298.325.686.507 1.102.507.416 0 .8-.187 1.102-.506l5.993-6.297c.31-.317.618-.162.792 0l4.487 4.636c.47.498 1.197-.24.707-.718L22.35 12.48c-.338-.35-.766-.48-1.185-.48zM3.5 24h23a.499.499 0 110 1h-23a.499.499 0 110-1zm5-18C7.125 6 6 7.125 6 8.5S7.125 11 8.5 11 11 9.875 11 8.5 9.875 6 8.5 6zm0 1c.834 0 1.5.666 1.5 1.5S9.334 10 8.5 10 7 9.334 7 8.5 7.666 7 8.5 7zm-7-7C.678 0 0 .678 0 1.5v27c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-27c0-.822-.678-1.5-1.5-1.5zm0 1h27c.286 0 .5.214.5.5v27c0 .286-.214.5-.5.5h-27a.488.488 0 01-.5-.5v-27c0-.286.214-.5.5-.5z"></path>
                    </svg>

                    <input type="file" />

                    <svg
                      onClick={InfosCaptureDecran}
                      style={{ paddingLeft: "10px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      cursor="pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.4 6H11v2.4h2.4V6zm0 4.8H11V18h2.4v-7.2z"
                        clipRule="evenodd"
                      ></path>
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M12.314.686L1 12l11.314 11.314L23.627 12 12.314.686zm0 2.263L3.263 12l9.05 9.051L21.366 12l-9.051-9.051z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  {/* display 
                </div>
                {/* capture-decran-du-contact 

                <div className="hr">
                  <hr />
                </div>

                <div className="center">
                  <button onClick={TroisiemeProcessusActiverLevierPopup}>
                    Enregistrer
                  </button>
                </div>
                {/* center 
              </div>
              {/* card 
            </div>
            {/* align 
          </div>
          {/* add-your-contact-opacity 
        </>
      )}
       deuxieme-processus-activer-levier-popup */}

      {/* popup age */}
      {/* popup age */}
      {/* popup age */}
      {/* popup age */}
      {/* popup age */}
      {/* popup age */}
      {/* popup age
      {popupAge && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupAge}
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
              {/* close

              <div className="card">
                <div className="title">
                  <li>Choisissez l'age</li>
                </div>
                {/* title

                {/* 17 ans 
                {/* 17 ans 
                {dixseptans && (
                  <>
                    <div onClick={Dixseptans} className="active">
                      <p>17 ans</p>
                    </div>
                  </>
                )}

                {!dixseptans && (
                  <>
                    <div onClick={Dixseptans} className="no-active">
                      <p>17 ans</p>
                    </div>
                  </>
                )}

                {/* 18 ans 
                {/* 18 ans 
                {dixhuitans && (
                  <>
                    <div onClick={Dixhuitans} className="active">
                      <p>18 ans</p>
                    </div>
                  </>
                )}

                {!dixhuitans && (
                  <>
                    <div onClick={Dixhuitans} className="no-active">
                      <p>18 ans</p>
                    </div>
                  </>
                )}
              </div>
              {/* card 
            </div>
            {/* align 
          </div>
          {/* popup-genre-opacity
          </>
          )}
        */}

      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country 
      {popupCountry && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupCountry}
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
              {/* close 

              <div className="card">
                <div className="title">
                  <li>Choisissez le Pays</li>
                </div>
                {/* title

                {/* Congo
                {/* Congo
                {congo && (
                  <>
                    <div onClick={Congo} className="active">
                      <p>Congo</p>
                    </div>
                  </>
                )}

                {!congo && (
                  <>
                    <div onClick={Congo} className="no-active">
                      <p>Congo</p>
                    </div>
                  </>
                )}

                {/* Guinée Equatoriale
                {/* Guinée Equatoriale
                {guineeE && (
                  <>
                    <div onClick={GuineeE} className="active">
                      <p>Guinée Equatoriale</p>
                    </div>
                  </>
                )}

                {!guineeE && (
                  <>
                    <div onClick={GuineeE} className="no-active">
                      <p>Guinée Equatoriale</p>
                    </div>
                  </>
                )}
              </div>
              {/* card 
            </div>
            {/* align 
          </div>
          {/* popup-genre-opacity 
        </>
      )}
        */}

      {/* popup genre */}
      {/* popup genre */}
      {/* popup genre */}
      {/* popup genre */}
      {/* popup genre 
      {popupGenre && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupGenre}
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
              {/* close

              <div className="card">
                <div className="title">
                  <li>Choisissez le Genre</li>
                </div>
                {/* title

                {/* homme
                {/* homme
                {homme && (
                  <>
                    <div onClick={Homme} className="active">
                      <p>Homme</p>
                    </div>
                  </>
                )}

                {!homme && (
                  <>
                    <div onClick={Homme} className="no-active">
                      <p>Homme</p>
                    </div>
                  </>
                )}

                {/* femme
                {/* femme
                {femme && (
                  <>
                    <div onClick={Femme} className="active">
                      <p>Femme</p>
                    </div>
                  </>
                )}

                {!femme && (
                  <>
                    <div onClick={Femme} className="no-active">
                      <p>Femme</p>
                    </div>
                  </>
                )}

                {/* Trans
                {/* Trans
                {trans && (
                  <>
                    <div onClick={Trans} className="active">
                      <p>Trans</p>
                    </div>
                  </>
                )}

                {!trans && (
                  <>
                    <div onClick={Trans} className="no-active">
                      <p>Trans</p>
                    </div>
                  </>
                )}

              </div>
              {/* card 
            </div>
            {/* align 
          </div>
          {/* popup-genre-opacity 
          </>
          )}
        */}

      {/* Deuxieme processus activer levier - popup */}
      {/* Deuxieme processus activer levier - popup */}
      {deuxiemeProcessusActiverLevierPopup && (
        <>
          <div className="debut-processus-activer-levier-popup">
            <div className="align">
              <div className="close">
                <svg
                  onClick={DeuxiemeProcessusActiverLevierPopup}
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
                  onClick={HelpDeuxiemeProcessusActiverLevier}
                  cursor="pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <g fill="#fcff07">
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
              {/* close */}

              <div className="card">
                <div className="display">
                  <div className="a">
                    <p style={{ fontSize: "17px", color: "#ccc" }}>01</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="#ccc"
                      version="1.1"
                      viewBox="0 0 512.043 512.043"
                      xmlSpace="preserve"
                    >
                      <path d="M505.767 240.525L399.101 134.243a21.335 21.335 0 00-15.058-6.221H21.376c-19.024 0-28.534 23.017-15.058 36.445l91.884 91.555-91.884 91.554c-13.476 13.428-3.967 36.445 15.058 36.445h362.667a21.332 21.332 0 0015.112-6.276l106.667-107.051c8.316-8.345 8.291-21.853-.055-30.169zm-130.583 100.83H73.01l70.474-70.221c8.367-8.337 8.367-21.887 0-30.224L73.01 170.688h302.218l85.311 85.004-85.355 85.663z"></path>
                    </svg>
                  </div>
                  {/* a */}

                  <div className="a">
                    <p style={{ fontSize: "17px", color: "red" }}>02</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25px"
                      fill="red"
                      version="1.1"
                      viewBox="0 0 511.999 511.999"
                      xmlSpace="preserve"
                    >
                      <path d="M505.727 240.511L399.06 134.229c-3.989-4.011-9.408-6.229-15.061-6.229H21.332c-8.619 0-16.427 5.205-19.712 13.184-3.307 7.979-1.451 17.173 4.651 23.253L98.154 256 6.271 347.562c-6.101 6.08-7.957 15.275-4.651 23.253 3.285 7.979 11.093 13.184 19.712 13.184h362.667c5.675 0 11.115-2.24 15.104-6.272L505.77 270.676c4.011-4.011 6.229-9.429 6.229-15.104a21.29 21.29 0 00-6.272-15.061z"></path>
                    </svg>
                  </div>
                  {/* a */}
                </div>
                {/* display */}

                <div className="lien-video">
                  <div className="a">
                    <p>BOITE MAGIQUE</p>
                  </div>
                  {/* a */}

                  <div className="b">
                    <p>Lien de la vidéo</p>
                  </div>
                  {/* b */}

                  {youtubeSelected && (
                    <>
                      <input type="url" placeholder="Lien Youtube.." />
                    </>
                  )}
                  {facebookSelected && (
                    <>
                      <input type="url" placeholder="Lien Facebook.." />
                    </>
                  )}

                  <button onClick={LevierSuccessPage}>Activer le Levier</button>
                </div>
                {/* lien-video */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* debut-processus-activer-levier-popup */}
        </>
      )}
      {/* Deuxieme-processus-activer-levier-popup */}

      {/* help Deuxieme Processus Activer Levier */}
      {/* help Deuxieme Processus Activer Levier */}
      {helpDeuxiemeProcessusActiverLevier && (
        <>
          <div
            onClick={HelpDeuxiemeProcessusActiverLevier}
            className="help-deuxieme-processus-activer-levier"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <li>
                    Cette section c'est la dernière étape pour Activer le
                    Levier, réaliser une vidéo sur un produit figurant dans la
                    Boite Magique, puis publier la vidéo sur les réseaux
                    sociaux. Personnaliser le titre de la vidéo publier en
                    ajoutant le nom doit porter le nom du produit, copier le
                    lien de la vidéo, ensuite revenez au niveau de cette section
                    coller le lien puis cliquer sur Activer le Levier
                  </li>
                </div>
                {/* display */}

                <div className="display-indice-two">
                  <li>
                    Le Bonus de Validité vous permet d'utiliser le Levier et la
                    Synergie. Lorsque vous faite une nouvelle video, vous
                    recevez un Bonus de Validité. Le Bonus expirera dans 07
                    jours. Apres les 07 jours, vous devez faire une nouvelle
                    video pour renouveler votre Bonus de validité
                  </li>

                  <p>Pour recevoir le Bonus de Validité :</p>

                  <p>
                    réaliser une vidéo sur un produit figurant dans la boite
                    magique, puis publier la sur les reseaux sociaux. Le titre
                    de la vidéo publier doit porter le nom du produit
                  </p>

                  <p>
                    Ajouter le logo de la marque Omisify a 90% de nouvelles
                    videos publier sur vos reseaux sociaux
                  </p>

                  <p>
                    Ajouter le logo de la marque Omisify a 90% de nouvelles
                    photos publier sur vos reseaux sociaux
                  </p>
                </div>
                {/* display-indice-two */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* help Deuxieme Processus Activer Levier */}

      {/* choisir groupe - popup */}
      {/* choisir groupe - popup */}
      {choisirGroupePopup && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={ChoisirGroupePopup}
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
                {/* Telegram Group */}
                {/* Telegram Group */}
                {telegramGroup && (
                  <>
                    <div onClick={TelegramGroup} className="active">
                      <p>Groupe Telegram</p>
                    </div>
                  </>
                )}

                {!telegramGroup && (
                  <>
                    <div onClick={TelegramGroup} className="no-active">
                      <p>Groupe Telegram</p>
                    </div>
                  </>
                )}

                {/* Whatsapp Group */}
                {/* Whatsapp Group */}
                {whatsappGroup && (
                  <>
                    <div onClick={WhatsappGroup} className="active">
                      <p>Groupe Whatsapp</p>
                    </div>
                  </>
                )}

                {!whatsappGroup && (
                  <>
                    <div onClick={WhatsappGroup} className="no-active">
                      <p>Groupe Whatsapp</p>
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
      {/* choisir groupe popup */}

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
                <p>Ajouter un Compte ou une Page Facebook</p>
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
                        Compte Facebook
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
                      <p>Ajouter un Compte Facebook</p>
                    </div>
                    {/* ajouter-compte-fb */}
                  </>
                )}

                {page && (
                  <>
                    <div className="input-nom-page-fb">
                      <p>Nom de la Page</p>
                      <div className="align-in-center">
                        <input type="text" />
                      </div>
                    </div>
                    {/* input-nom-page-fb */}
                  </>
                )}

                {compte && (
                  <>
                    <div className="input-nom-page-fb">
                      <p>Nom du Compte</p>
                      <div className="align-in-center">
                        <input type="text" />
                      </div>
                    </div>
                    {/* input-nom-page-fb */}
                  </>
                )}

                {page && (
                  <>
                    <div className="input-nombre-damis-fb">
                      <p>Nombre d'abonnés</p>

                      <div className="align-in-center">
                        <input type="number" />
                      </div>
                    </div>
                    {/* input-nombre-damis */}
                  </>
                )}

                {compte && (
                  <>
                    <div className="input-nombre-damis-fb">
                      <p>Nombre d'amis</p>

                      <div className="align-in-center">
                        <input type="number" />
                      </div>
                    </div>
                    {/* input-nombre-damis */}
                  </>
                )}

                {/* lien page */}
                {/* lien page */}
                {page && (
                  <>
                    {lienPage && (
                      <>
                        <div className="display-choisir-lien-ou-capture-page">
                          <p
                            style={{ cursor: "pointer" }}
                            onClick={ChoisirLienOuCapturePage}
                          >
                            Lien de la Page
                          </p>
                          <svg
                            onClick={ChoisirLienOuCapturePage}
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
                        {/* display-choisir-lien-ou-capture-page */}

                        <div className="input-lien-de-la-page">
                          <input type="url" />
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* lien compte */}
                {/* lien compte */}
                {compte && (
                  <>
                    {lienCompte && (
                      <>
                        <div className="display-choisir-lien-ou-capture-page">
                          <p
                            style={{ cursor: "pointer" }}
                            onClick={ChoisirLienOuCaptureCompte}
                          >
                            Lien du Compte
                          </p>
                          <svg
                            onClick={ChoisirLienOuCaptureCompte}
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
                        {/* display-choisir-lien-ou-capture-page */}

                        <div className="input-lien-de-la-page">
                          <input type="url" />
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* capture page */}
                {/* capture page */}
                {page && (
                  <>
                    {capturePage && (
                      <>
                        <div className="display-choisir-lien-ou-capture-page">
                          <p
                            style={{ cursor: "pointer" }}
                            onClick={ChoisirLienOuCapturePage}
                          >
                            Capture d'écran de la Page
                          </p>
                          <svg
                            onClick={ChoisirLienOuCapturePage}
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
                        {/* display-choisir-lien-ou-capture-page */}

                        <div className="input-capture-page">
                          <input type="file" />
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* capture compte */}
                {/* capture compte */}
                {compte && (
                  <>
                    {captureCompte && (
                      <>
                        <div className="display-choisir-lien-ou-capture-page">
                          <p
                            style={{ cursor: "pointer" }}
                            onClick={ChoisirLienOuCaptureCompte}
                          >
                            Capture d'écran du Compte
                          </p>
                          <svg
                            onClick={ChoisirLienOuCaptureCompte}
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
                        {/* display-choisir-lien-ou-capture-page */}

                        <div className="input-capture-page">
                          <input type="file" />
                        </div>
                      </>
                    )}
                  </>
                )}

                {page && (
                  <>
                    <div className="btn-ajouter-nouvelle-page-fb">
                      <button>Ajouter</button>
                    </div>
                  </>
                )}

                {compte && (
                  <>
                    <div className="btn-ajouter-nouvelle-page-fb">
                      <button>Ajouter</button>
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
                    Ajouter le Compte ou la Page Facebook où vous avez ajouter
                    votre photo de profil
                  </li>
                </div>
                {/* display */}

                <div className="display-indice-two">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>
                  <svg
                    style={{ paddingRight: "5px", paddingTop: "3px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    version="1.1"
                    viewBox="0 0 40 40"
                    xmlSpace="preserve"
                  >
                    <path d="M19.962 28.131a.941.941 0 01-.67-.281L5.27 13.542a.938.938 0 111.337-1.313l13.354 13.625L33.394 12.15a.939.939 0 011.326-.015.941.941 0 01.013 1.327L20.632 27.85a.945.945 0 01-.67.281z"></path>
                  </svg>
                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p style={{ paddingRight: "5px" }}>faire</p>
                  <p>votre choix</p>
                </div>
                {/* display-indice-two */}
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
