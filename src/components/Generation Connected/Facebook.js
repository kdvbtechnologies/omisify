import { useState } from "react";

export default function Facebook() {
  const [popup, setPopup] = useState(false);
  function Popup() {
    setPopup(!popup);
  }

  const [popupAdd, setPopupAdd] = useState(false);
  function Add() {
    setPopupAdd(!popupAdd);
  }

  // popup Choisir Page Ou Compte
  const [popupChoisirPageOuCompte, setPopupChoisirPageOuCompte] =
    useState(false);

  function ChoisirPageOuCompte() {
    setPopupChoisirPageOuCompte(!popupChoisirPageOuCompte);
  }

  // page - popup Choisir lien ou capture
  const [popupChoisirLienOuCapturePage, setPopupChoisirLienOuCapturePage] =
    useState(false);

  function ChoisirLienOuCapturePage() {
    setPopupChoisirLienOuCapturePage(!popupChoisirLienOuCapturePage);
  }

  // compte - popup Choisir lien ou capture
  const [popupChoisirLienOuCaptureCompte, setPopupChoisirLienOuCaptureCompte] =
    useState(false);

  function ChoisirLienOuCaptureCompte() {
    setPopupChoisirLienOuCaptureCompte(!popupChoisirLienOuCaptureCompte);
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

  // popup help
  const [popupHelp, setPopupHelp] = useState(false);
  function Help() {
    setPopupHelp(!popupHelp);
  }

  // popup menu to right
  const [popupMenuToRight, setMenuPopupToRight] = useState(false);
  function MenuToRight() {
    setMenuPopupToRight(!popupMenuToRight);
  }

  // popup modifier nom page - popup
  const [modifierNomPagePopup, setModifierNomPagePopup] = useState(false);

  function ModifierNomPagePopup() {
    setModifierNomPagePopup(!modifierNomPagePopup);
  }

  // Modifier Nom Page - popup help
  const [modifierNomPageHelpPopup, setModifierNomPageHelpPopup] =
    useState(false);

  function ModifierNomPageHelp() {
    setModifierNomPageHelpPopup(!modifierNomPageHelpPopup);
  }

  // Before Modifier Nom Page - popup help
  const [beforeModifierNomPageHelpPopup, setBeforeModifierNomPageHelpPopup] =
    useState(false);

  function BeforeModifierNomPageHelp() {
    setBeforeModifierNomPageHelpPopup(!beforeModifierNomPageHelpPopup);
  }

  return (
    <>
      <div className="fb">
        <div className="space">
          <div className="a">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="20px"
              cursor="pointer"
              fill="#ccc"
              style={{ paddingRight: "40px" }}
              enableBackground="new 0 0 486.975 486.975"
              version="1.1"
              viewBox="0 0 486.975 486.975"
              xmlSpace="preserve"
            >
              <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
            </svg>

            <svg
              style={{ paddingRight: "5px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              viewBox="0 0 24 24"
              fill="red"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
            </svg>

            <p style={{ color: "black", fontSize: "17px" }}>Facebook</p>
          </div>

          <div className="b">
            <svg
              onClick={Add}
              style={{ marginTop: "5px" }}
              cursor="pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              viewBox="0 0 48 48"
            >
              <g data-name="Layer 2">
                <path
                  fill="none"
                  d="M0 0H48V48H0z"
                  data-name="invisible box"
                ></path>
                <g data-name="icons Q2">
                  <path d="M34 22h-8v-8a2 2 0 00-4 0v8h-8a2 2 0 000 4h8v8a2 2 0 004 0v-8h8a2 2 0 000-4z"></path>
                  <path d="M40 8v32H8V8h32m2-4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        {/* space */}

        <div className="fb-others">
          <div className="a">
            <div className="hr">
              <hr />
            </div>

            <div className="align" onClick={Popup}>
              <p>Vivre Heureux et Mourir jeune</p>

              <div className="b">
                <p>8000 abonnés</p>
              </div>
            </div>
            {/* align */}

            <div className="hr">
              <hr />
            </div>
            {/* hr */}
          </div>
          {/* a */}
        </div>
        {/* others */}
      </div>
      {/* fb */}

      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {popup && (
        <>
          <div className="fb-popup-opacity">
            <div className="align">
              <svg
                onClick={Popup}
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                cursor="pointer"
                fill="#ff6f79"
                version="1.1"
                viewBox="0 0 40 40"
                xmlSpace="preserve"
              >
                <path d="M21.414 20L33.207 8.207a.999.999 0 10-1.414-1.414L20 18.586 8.207 6.793a.999.999 0 10-1.414 1.414L18.586 20 6.793 31.793a.999.999 0 101.414 1.414L20 21.414l11.793 11.793a.997.997 0 001.414 0 .999.999 0 000-1.414L21.414 20z"></path>
              </svg>

              <div className="card">
                <div className="a">
                  <p>Vivre Heureux et Mourir jeune</p>
                </div>

                <div className="b">
                  <div className="display">
                    <div className="f">
                      <p>8000 abonnés</p>
                    </div>

                    <div className="g">
                      <svg
                        onClick={BeforeModifierNomPageHelp}
                        style={{ paddingRight: "10px" }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        cursor="pointer"
                        fill="#fff"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 110 2 1 1 0 010-2zm0-10a4 4 0 011.19 7.82l-.19.054V14a1 1 0 01-1.993.117L11 14v-1a1 1 0 01.883-.993l.266-.012A2 2 0 1010 10a1 1 0 01-2 0 4 4 0 014-4z"
                        ></path>
                      </svg>

                      <svg
                        onClick={MenuToRight}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        cursor="pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g
                          stroke="#fff"
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
                  {/* display */}
                </div>
                {/* b */}

                <div className="c">
                  <p>Levier : Activé</p>
                  <p>https://facebook.com</p>
                </div>
                {/* c */}
              </div>
            </div>
          </div>
        </>
      )}
      {/* infos of page - popup */}

      {/* menu to right - popup */}
      {/* menu to right - popup */}
      {/* menu to right - popup */}
      {/* menu to right - popup */}
      {/* menu to right - popup */}
      {/* menu to right - popup */}
      {/* menu to right - popup */}
      {/* menu to right - popup */}
      {/* menu to right - popup */}
      {popupMenuToRight && (
        <>
          <div onClick={MenuToRight} className="fb-popup-menu-to-right-opacity">
            <div className="align">
              <div className="card">
                <div className="display">
                  <svg
                    onClick={ModifierNomPagePopup}
                    style={{ paddingRight: "3px" }}
                    width="20px"
                    cursor="pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 30 30"
                  >
                    <g transform="translate(0 -289.063)">
                      <path
                        fill="#000"
                        fillOpacity="1"
                        stroke="none"
                        strokeDasharray="none"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="2"
                        d="M22.824 296.239a11.986 11.986 0 00-1.542-1.287l-2.665 2.665 2.828 2.828 2.666-2.665a11.986 11.986 0 00-1.287-1.541zm-5.621 2.792L6.596 309.638l-.707 3.535 3.536-.707L20.03 301.86z"
                        opacity="0.93"
                      ></path>
                    </g>
                  </svg>
                  <p onClick={ModifierNomPagePopup}>Modifier</p>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
        </>
      )}
      {/* menu to right - popup */}

      {/* infos of page - help popup */}
      {/* infos of page - help popup */}
      {/* infos of page - help popup */}
      {/* infos of page - help popup */}
      {beforeModifierNomPageHelpPopup && (
        <>
          <div
            onClick={BeforeModifierNomPageHelp}
            className="popup-help-list-of-contacts-whatsapp-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <li style={{ paddingRight: "5px" }}>
                    Infos of Page - help popup - Cliquer sur
                  </li>
                  <p style={{ fontWeight: "bold", paddingRight: "5px" }}>
                    VirilNation
                  </p>

                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p style={{ paddingRight: "5px" }}>aller</p>
                  <p style={{ paddingRight: "5px" }}>dans</p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    A Propos
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    du Groupe
                  </p>

                  <p style={{ textDecoration: "underline" }}>Whatsapp</p>
                </div>
                {/* display */}

                <div className="display-indice-two">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>
                  <svg
                    style={{ paddingRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    enableBackground="new 0 0 489.8 489.8"
                    version="1.1"
                    viewBox="0 0 489.8 489.8"
                    xmlSpace="preserve"
                  >
                    <path d="M438.2 0H51.6C23.1 0 0 23.2 0 51.6v386.6c0 28.5 23.2 51.6 51.6 51.6h386.6c28.5 0 51.6-23.2 51.6-51.6V51.6c0-28.4-23.2-51.6-51.6-51.6zm27.1 438.2c0 14.9-12.2 27.1-27.1 27.1H51.6c-14.9 0-27.1-12.2-27.1-27.1V51.6c0-14.9 12.2-27.1 27.1-27.1h386.6c14.9 0 27.1 12.2 27.1 27.1v386.6z"></path>
                    <path d="M337.4 232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v80.3h-80.3c-6.8 0-12.3 5.5-12.3 12.2 0 6.8 5.5 12.3 12.3 12.3h80.3v80.3c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3v-80.3h80.3c6.8 0 12.3-5.5 12.3-12.3 0-6.8-5.5-12.2-12.3-12.2z"></path>
                  </svg>
                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    ajouter
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    un
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Nouveau
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Contact
                  </p>
                  <p style={{ paddingRight: "5px" }}>à votre</p>
                  <p style={{ paddingRight: "5px" }}>Groupe</p>
                  <p>Whatsapp</p>
                </div>
                {/* display-indice-two */}

                {/* display-indice-three*/}
                {/* display-indice-three*/}
                {/* display-indice-three*/}
                <div className="display-indice-three">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ paddingRight: "5px" }}
                    width="20px"
                    viewBox="0 0 32 32"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h32v32H0z"></path>
                      <path
                        fill="#666666"
                        fillRule="nonzero"
                        d="M18 2v2H4v24h24V14.022h2V30H2V2zm8.364-.61l4.243 4.243-12.601 12.6-6.697 2.386 2.535-6.71zm0 2.829l-10.8 10.8-.856 2.266 2.203-.785L27.78 5.633z"
                      ></path>
                    </g>
                  </svg>
                  <p style={{ paddingRight: "5px" }}>pour</p>

                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    modifier
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    un
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Contact
                  </p>
                  <p style={{ paddingRight: "5px" }}>figurant</p>
                  <p style={{ paddingRight: "5px" }}>dans</p>
                  <p style={{ paddingRight: "5px" }}>votre</p>
                  <p style={{ paddingRight: "5px" }}>Groupe</p>
                  <p>Whatsapp</p>
                </div>
                {/* display-indice-three */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* infos of page - help popup */}

      {/* ajouter - popup */}
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
                  <li style={{ paddingRight: "5px" }}>
                    add page - Cliquer sur
                  </li>
                  <p style={{ fontWeight: "bold", paddingRight: "5px" }}>
                    VirilNation
                  </p>

                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p style={{ paddingRight: "5px" }}>aller</p>
                  <p style={{ paddingRight: "5px" }}>dans</p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    A Propos
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    du Groupe
                  </p>

                  <p style={{ textDecoration: "underline" }}>Whatsapp</p>
                </div>
                {/* display */}

                <div className="display-indice-two">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>
                  <svg
                    style={{ paddingRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    enableBackground="new 0 0 489.8 489.8"
                    version="1.1"
                    viewBox="0 0 489.8 489.8"
                    xmlSpace="preserve"
                  >
                    <path d="M438.2 0H51.6C23.1 0 0 23.2 0 51.6v386.6c0 28.5 23.2 51.6 51.6 51.6h386.6c28.5 0 51.6-23.2 51.6-51.6V51.6c0-28.4-23.2-51.6-51.6-51.6zm27.1 438.2c0 14.9-12.2 27.1-27.1 27.1H51.6c-14.9 0-27.1-12.2-27.1-27.1V51.6c0-14.9 12.2-27.1 27.1-27.1h386.6c14.9 0 27.1 12.2 27.1 27.1v386.6z"></path>
                    <path d="M337.4 232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v80.3h-80.3c-6.8 0-12.3 5.5-12.3 12.2 0 6.8 5.5 12.3 12.3 12.3h80.3v80.3c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3v-80.3h80.3c6.8 0 12.3-5.5 12.3-12.3 0-6.8-5.5-12.2-12.3-12.2z"></path>
                  </svg>
                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    ajouter
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    un
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Nouveau
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Contact
                  </p>
                  <p style={{ paddingRight: "5px" }}>à votre</p>
                  <p style={{ paddingRight: "5px" }}>Groupe</p>
                  <p>Whatsapp</p>
                </div>
                {/* display-indice-two */}

                {/* display-indice-three*/}
                {/* display-indice-three*/}
                {/* display-indice-three*/}
                <div className="display-indice-three">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ paddingRight: "5px" }}
                    width="20px"
                    viewBox="0 0 32 32"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h32v32H0z"></path>
                      <path
                        fill="#666666"
                        fillRule="nonzero"
                        d="M18 2v2H4v24h24V14.022h2V30H2V2zm8.364-.61l4.243 4.243-12.601 12.6-6.697 2.386 2.535-6.71zm0 2.829l-10.8 10.8-.856 2.266 2.203-.785L27.78 5.633z"
                      ></path>
                    </g>
                  </svg>
                  <p style={{ paddingRight: "5px" }}>pour</p>

                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    modifier
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    un
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Contact
                  </p>
                  <p style={{ paddingRight: "5px" }}>figurant</p>
                  <p style={{ paddingRight: "5px" }}>dans</p>
                  <p style={{ paddingRight: "5px" }}>votre</p>
                  <p style={{ paddingRight: "5px" }}>Groupe</p>
                  <p>Whatsapp</p>
                </div>
                {/* display-indice-three */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* ajouter - help popup */}

      {/* modifier - popup */}
      {/* modifier - popup */}
      {/* modifier - popup */}
      {/* modifier - popup */}
      {/* modifier - popup */}
      {/* modifier - popup */}
      {/* modifier - popup */}
      {/* modifier - popup */}
      {/* modifier - popup */}
      {/* modifier - popup */}
      {modifierNomPagePopup && (
        <>
          <div className="popup-add-page-fb-opacity">
            <div className="align">
              <div className="space">
                <svg
                  onClick={ModifierNomPagePopup}
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
                  onClick={ModifierNomPageHelp}
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
                      <p>Modifier une Page Facebook</p>
                    </div>
                  </>
                )}

                {compte && (
                  <>
                    <div className="ajouter-compte-fb">
                      <p>Modifier un Compte Facebook</p>
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
                      <button>Enregistrer</button>
                    </div>
                  </>
                )}

                {compte && (
                  <>
                    <div className="btn-ajouter-nouvelle-page-fb">
                      <button>Enregistrer</button>
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
      {/* modifier - popup */}

      {/* modifier - help popup */}
      {/* modifier - help popup */}
      {/* modifier - help popup */}
      {/* modifier - help popup */}
      {/* modifier - help popup */}
      {/* modifier - help popup */}
      {/* modifier - help popup */}
      {/* modifier - help popup */}
      {modifierNomPageHelpPopup && (
        <>
          <div
            onClick={ModifierNomPageHelp}
            className="popup-help-list-of-contacts-whatsapp-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <li style={{ paddingRight: "5px" }}>
                    Modifier nom page - Cliquer sur
                  </li>
                  <p style={{ fontWeight: "bold", paddingRight: "5px" }}>
                    VirilNation
                  </p>

                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p style={{ paddingRight: "5px" }}>aller</p>
                  <p style={{ paddingRight: "5px" }}>dans</p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    A Propos
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    du Groupe
                  </p>

                  <p style={{ textDecoration: "underline" }}>Whatsapp</p>
                </div>
                {/* display */}

                <div className="display-indice-two">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>
                  <svg
                    style={{ paddingRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    enableBackground="new 0 0 489.8 489.8"
                    version="1.1"
                    viewBox="0 0 489.8 489.8"
                    xmlSpace="preserve"
                  >
                    <path d="M438.2 0H51.6C23.1 0 0 23.2 0 51.6v386.6c0 28.5 23.2 51.6 51.6 51.6h386.6c28.5 0 51.6-23.2 51.6-51.6V51.6c0-28.4-23.2-51.6-51.6-51.6zm27.1 438.2c0 14.9-12.2 27.1-27.1 27.1H51.6c-14.9 0-27.1-12.2-27.1-27.1V51.6c0-14.9 12.2-27.1 27.1-27.1h386.6c14.9 0 27.1 12.2 27.1 27.1v386.6z"></path>
                    <path d="M337.4 232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v80.3h-80.3c-6.8 0-12.3 5.5-12.3 12.2 0 6.8 5.5 12.3 12.3 12.3h80.3v80.3c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3v-80.3h80.3c6.8 0 12.3-5.5 12.3-12.3 0-6.8-5.5-12.2-12.3-12.2z"></path>
                  </svg>
                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    ajouter
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    un
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Nouveau
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Contact
                  </p>
                  <p style={{ paddingRight: "5px" }}>à votre</p>
                  <p style={{ paddingRight: "5px" }}>Groupe</p>
                  <p>Whatsapp</p>
                </div>
                {/* display-indice-two */}

                {/* display-indice-three*/}
                {/* display-indice-three*/}
                {/* display-indice-three*/}
                <div className="display-indice-three">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ paddingRight: "5px" }}
                    width="20px"
                    viewBox="0 0 32 32"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 0h32v32H0z"></path>
                      <path
                        fill="#666666"
                        fillRule="nonzero"
                        d="M18 2v2H4v24h24V14.022h2V30H2V2zm8.364-.61l4.243 4.243-12.601 12.6-6.697 2.386 2.535-6.71zm0 2.829l-10.8 10.8-.856 2.266 2.203-.785L27.78 5.633z"
                      ></path>
                    </g>
                  </svg>
                  <p style={{ paddingRight: "5px" }}>pour</p>

                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    modifier
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    un
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Contact
                  </p>
                  <p style={{ paddingRight: "5px" }}>figurant</p>
                  <p style={{ paddingRight: "5px" }}>dans</p>
                  <p style={{ paddingRight: "5px" }}>votre</p>
                  <p style={{ paddingRight: "5px" }}>Groupe</p>
                  <p>Whatsapp</p>
                </div>
                {/* display-indice-three */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* modifier - help popup */}

      {/* popup choisir page ou compte */}
      {/* popup choisir page ou compte */}
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
      {/* popup choisir page ou compte */}

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
          {/* page - popup choisir lien ou capture */}
        </>
      )}

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
    </>
  );
}
