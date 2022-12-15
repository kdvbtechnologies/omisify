import { useState } from "react";
import { NavLink } from "react-router-dom";
import omisifylogo from "./img/omisify-logo.png";
import omisifylogomobile from "./img/omisify-logo-mobile.png";

export default function NavbarTopOmisify() {
  // Activity
  const [popupActivity, setPopupActivity] = useState(false);
  function PopupActivity() {
    setPopupActivity(!popupActivity);
  }

  const [popupActivityMobile, setPopupActivityMobile] = useState(false);
  function PopupActivityMobile() {
    setPopupActivityMobile(!popupActivityMobile);
  }

  // GenerationOmisify
  const [popupGenerationOmisify, setPopupGenerationOmisify] = useState(false);
  function PopupGenerationOmisify() {
    setPopupGenerationOmisify(!popupGenerationOmisify);
  }

  const [popupGenerationOmisifyMobile, setPopupGenerationOmisifyMobile] =
    useState(false);
  function PopupGenerationOmisifyMobile() {
    setPopupGenerationOmisifyMobile(!popupGenerationOmisifyMobile);
  }

  // NewInfluencer
  const [popupNewInfluencer, setPopupNewInfluencer] = useState(false);
  function PopupNewInfluencer() {
    setPopupNewInfluencer(!popupNewInfluencer);
  }

  const [popupNewInfluencerMobile, setPopupNewInfluencerMobile] =
    useState(false);
  function PopupNewInfluencerMobile() {
    setPopupNewInfluencerMobile(!popupNewInfluencerMobile);
  }

  // menu navbar top
  const [popupMenuNavbarTop, setPopupMenuNavbarTop] = useState(false);
  function PopupMenuNavbarTop() {
    setPopupMenuNavbarTop(!popupMenuNavbarTop);
  }

  // OpenMobileMenu
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  function OpenMobileMenu() {
    setOpenMobileMenu(!openMobileMenu);
  }

  // popup vocabulary
  const [popupVocabulary, setPopupVocabulary] = useState(false);
  function PopupVocabulary() {
    setPopupVocabulary(!popupVocabulary);
  }

  // popup service partenaire
  const [popupServicePartenaire, setPopupServicePartenaire] = useState(false);
  function PopupServicePartenaire() {
    setPopupServicePartenaire(!popupServicePartenaire);
  }

  return (
    <>
      <div className="navbar-top-omisify">
        <div className="space">
          <div className="left">
            <NavLink to="/">
              <img src={omisifylogo} alt="logo omisify" />
            </NavLink>
          </div>
          {/* left */}

          <div className="right">
            {/*  Activités - icon vers le haut */}
            {popupActivity && (
              <>
                <div className="icon">
                  <p style={{ color: "red" }} onClick={PopupActivity}>
                    Activités
                  </p>
                  <svg
                    onClick={PopupActivity}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="10px"
                    cursor="pointer"
                    fill="red"
                    enableBackground="new 0 0 330 330"
                    version="1.1"
                    viewBox="0 0 330 330"
                    xmlSpace="preserve"
                  >
                    <path d="M325.606 229.393l-150.004-150a14.997 14.997 0 00-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 00315 255a14.95 14.95 0 0010.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"></path>
                  </svg>
                </div>
              </>
            )}

            {/*  Activités - icon vers le bas */}
            {!popupActivity && (
              <>
                <div className="icon">
                  <p onClick={PopupActivity}>Activités</p>
                  <svg
                    onClick={PopupActivity}
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

            {/*  Génération Omisify - icon vers le haut */}
            {popupGenerationOmisify && (
              <>
                <div className="icon">
                  <p style={{ color: "red" }} onClick={PopupGenerationOmisify}>
                    Génération Connecté
                  </p>
                  <svg
                    onClick={PopupGenerationOmisify}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="10px"
                    cursor="pointer"
                    fill="red"
                    enableBackground="new 0 0 330 330"
                    version="1.1"
                    viewBox="0 0 330 330"
                    xmlSpace="preserve"
                  >
                    <path d="M325.606 229.393l-150.004-150a14.997 14.997 0 00-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 00315 255a14.95 14.95 0 0010.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"></path>
                  </svg>
                </div>
              </>
            )}

            {/*  Génération Omisify - icon vers le bas */}
            {!popupGenerationOmisify && (
              <>
                <div className="icon">
                  <p onClick={PopupGenerationOmisify}>Génération Connecté</p>
                  <svg
                    onClick={PopupGenerationOmisify}
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

            {/* Nouveau influenceur - icon vers le haut */}
            {popupNewInfluencer && (
              <>
                <div className="icon">
                  <p style={{ color: "red" }} onClick={PopupNewInfluencer}>
                    Nouveau influenceur
                  </p>

                  <svg
                    onClick={PopupNewInfluencer}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="10px"
                    cursor="pointer"
                    fill="red"
                    enableBackground="new 0 0 330 330"
                    version="1.1"
                    viewBox="0 0 330 330"
                    xmlSpace="preserve"
                  >
                    <path d="M325.606 229.393l-150.004-150a14.997 14.997 0 00-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 00315 255a14.95 14.95 0 0010.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"></path>
                  </svg>
                </div>
              </>
            )}

            {/* Nouveau influenceur - icon vers le bas */}
            {!popupNewInfluencer && (
              <>
                <div className="icon">
                  <p onClick={PopupNewInfluencer}>Nouveau influenceur</p>
                  <svg
                    onClick={PopupNewInfluencer}
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

            {/* icon menu - color red */}
            {popupMenuNavbarTop && (
              <>
                <div className="icon">
                  <svg
                    onClick={PopupMenuNavbarTop}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    fill="red"
                    enableBackground="new 0 0 210 210"
                    version="1.1"
                    viewBox="0 0 210 210"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M195 0h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                      <path d="M115 0H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                      <path d="M35 0H15C6.716 0 0 6.716 0 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                      <path d="M195 160h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                      <path d="M115 160H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                      <path d="M35 160H15c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                      <path d="M195 80h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                      <path d="M115 80H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                      <path d="M35 80H15C6.716 80 0 86.716 0 95v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                    </g>
                  </svg>
                </div>
              </>
            )}

            {/* icon menu - color noir */}
            {!popupMenuNavbarTop && (
              <>
                <div className="icon">
                  <svg
                    onClick={PopupMenuNavbarTop}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    enableBackground="new 0 0 210 210"
                    version="1.1"
                    viewBox="0 0 210 210"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M195 0h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                      <path d="M115 0H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                      <path d="M35 0H15C6.716 0 0 6.716 0 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                      <path d="M195 160h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                      <path d="M115 160H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                      <path d="M35 160H15c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                      <path d="M195 80h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                      <path d="M115 80H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                      <path d="M35 80H15C6.716 80 0 86.716 0 95v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                    </g>
                  </svg>
                </div>
              </>
            )}
          </div>
          {/* right */}
        </div>
        {/* space */}
      </div>
      {/* navbar-top-omisify */}

      {/* popup activity pc */}
      {/* popup activity pc */}
      {/* popup activity pc */}
      {/* popup activity pc */}
      {/* popup activity pc */}
      {/* popup activity pc */}
      {popupActivity && (
        <>
          <div
            onClick={PopupActivity}
            className="popup-activity-opacity-navbar-top"
          >
            <div className="card">
              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>Partenaire Omisify</p>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>Partenaire Omisify Influent</p>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>Partenaire Omisify Vidéaste</p>
              </NavLink>
            </div>
            {/* card */}
          </div>
          {/* navbar-top-popup-generation-omisify-opacity */}
        </>
      )}

      {/* popup generation omisify pc */}
      {/* popup generation omisify pc */}
      {/* popup generation omisify pc */}
      {/* popup generation omisify pc */}
      {/* popup generation omisify pc */}
      {popupGenerationOmisify && (
        <>
          <div
            onClick={PopupGenerationOmisify}
            className="navbar-top-popup-generation-omisify-opacity"
          >
            <div className="card">
              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>
                  Rejoindre la Génération Connecté
                </p>
              </NavLink>
            </div>
            {/* card */}
          </div>
          {/* navbar-top-popup-generation-omisify-opacity */}
        </>
      )}

      {/* popup new influenceur pc */}
      {/* popup new influenceur pc */}
      {/* popup new influenceur pc */}
      {/* popup new influenceur pc */}
      {/* popup new influenceur pc */}
      {popupNewInfluencer && (
        <>
          <div
            onClick={PopupNewInfluencer}
            className="popup-new-influencer-opacity-navbar-top"
          >
            <div className="card">
              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>Comment Devenir influenceur</p>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>
                  Programme d'Aide Aux Nouveaux Influenceurs (PAANI)
                </p>
              </NavLink>
            </div>
            {/* card */}
          </div>
          {/* navbar-top-popup-generation-omisify-opacity */}
        </>
      )}

      {/* popup menu navbar top - pc */}
      {/* popup menu navbar top - pc */}
      {/* popup menu navbar top - pc */}
      {/* popup menu navbar top - pc */}
      {/* popup menu navbar top - pc */}
      {popupMenuNavbarTop && (
        <>
          <div
            onClick={PopupMenuNavbarTop}
            className="popup-menu-navbar-top-opacity"
          >
            <div className="card">
              <div className="a">
                <NavLink style={{ textDecoration: "none" }} to="/">
                  <p>Connexion</p>
                </NavLink>
              </div>

              <div className="a">
                <p
                  onClick={PopupServicePartenaire}
                  style={{ cursor: "pointer" }}
                >
                  Service Partenaire
                </p>
              </div>

              <div className="a">
                <p onClick={PopupVocabulary} style={{ cursor: "pointer" }}>
                  Vocabulaire
                </p>
              </div>
            </div>
            {/* card */}
          </div>
          {/* popup-menu-navbar-top-opacity */}
        </>
      )}

      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      {/* mobile-navbar-top-omisify */}
      <div className="navbar-top-omisify-mobile">
        <div className="space">
          <div className="left">
            <NavLink to="/">
              <img src={omisifylogomobile} alt="Omisify logo" />
            </NavLink>
          </div>
          {/* left */}

          <div className="right">
            <svg
              onClick={OpenMobileMenu}
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              cursor="pointer"
              width="20px"
              enableBackground="new 0 0 210 210"
              version="1.1"
              viewBox="0 0 210 210"
              xmlSpace="preserve"
            >
              <g>
                <path d="M195 0h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                <path d="M115 0H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                <path d="M35 0H15C6.716 0 0 6.716 0 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                <path d="M195 160h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                <path d="M115 160H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                <path d="M35 160H15c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                <path d="M195 80h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                <path d="M115 80H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                <path d="M35 80H15C6.716 80 0 86.716 0 95v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
              </g>
            </svg>
          </div>
          {/* right */}
        </div>
        {/* space */}
      </div>
      {/* navbar top omisify mobile */}

      {/* btn mobile menu */}
      {/* btn mobile menu */}
      {/* btn mobile menu */}
      {/* btn mobile menu */}
      {/* btn mobile menu */}
      {/* Quand on clique sur le btn mobile menu, ca open le mobile menu */}
      {openMobileMenu && (
        <>
          <div className="mobile-menu-opacity-navbar-top">
            <div className="close">
              <p></p>
              <svg
                onClick={OpenMobileMenu}
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                cursor="pointer"
                width="20px"
                fill="transparent"
                enableBackground="new 0 0 210 210"
                version="1.1"
                viewBox="0 0 210 210"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M195 0h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                  <path d="M115 0H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                  <path d="M35 0H15C6.716 0 0 6.716 0 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15z"></path>
                  <path d="M195 160h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                  <path d="M115 160H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                  <path d="M35 160H15c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15v-20c0-8.284-6.716-15-15-15z"></path>
                  <path d="M195 80h-20c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                  <path d="M115 80H95c-8.284 0-15 6.716-15 15v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                  <path d="M35 80H15C6.716 80 0 86.716 0 95v20c0 8.284 6.716 15 15 15h20c8.284 0 15-6.716 15-15V95c0-8.284-6.716-15-15-15z"></path>
                </g>
              </svg>
            </div>
            {/* btn close, on a pris le meme btn pour fermer le menu */}

            <div className="card">
              {/* Activités - icon vers le haut */}
              {popupActivityMobile && (
                <>
                  <div className="icon">
                    <p style={{ color: "red" }} onClick={PopupActivityMobile}>
                      Activités
                    </p>
                    <svg
                      onClick={PopupActivityMobile}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="10px"
                      cursor="pointer"
                      fill="red"
                      enableBackground="new 0 0 330 330"
                      version="1.1"
                      viewBox="0 0 330 330"
                      xmlSpace="preserve"
                    >
                      <path d="M325.606 229.393l-150.004-150a14.997 14.997 0 00-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 00315 255a14.95 14.95 0 0010.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"></path>
                    </svg>
                  </div>
                </>
              )}

              {/* Activités - icon vers le bas */}
              {!popupActivityMobile && (
                <>
                  <div className="icon">
                    <p onClick={PopupActivityMobile}>Activités</p>
                    <svg
                      onClick={PopupActivityMobile}
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

              {/* Generation omisify - icon vers le haut*/}
              {popupGenerationOmisifyMobile && (
                <>
                  <div className="icon">
                    <p
                      style={{ color: "red" }}
                      onClick={PopupGenerationOmisifyMobile}
                    >
                      Génération
                    </p>
                    <svg
                      onClick={PopupGenerationOmisifyMobile}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="10px"
                      cursor="pointer"
                      fill="red"
                      enableBackground="new 0 0 330 330"
                      version="1.1"
                      viewBox="0 0 330 330"
                      xmlSpace="preserve"
                    >
                      <path d="M325.606 229.393l-150.004-150a14.997 14.997 0 00-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 00315 255a14.95 14.95 0 0010.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"></path>
                    </svg>
                  </div>
                </>
              )}

              {/* Generation omisify - icon vers le bas */}
              {!popupGenerationOmisifyMobile && (
                <>
                  <div className="icon">
                    <p onClick={PopupGenerationOmisifyMobile}>Génération</p>
                    <svg
                      onClick={PopupGenerationOmisifyMobile}
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

              {/* Nouveau influenceur - icon vers le haut */}
              {popupNewInfluencerMobile && (
                <>
                  <div className="icon">
                    <p
                      style={{ color: "red" }}
                      onClick={PopupNewInfluencerMobile}
                    >
                      Nouveau
                    </p>

                    <svg
                      onClick={PopupNewInfluencerMobile}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="10px"
                      cursor="pointer"
                      fill="red"
                      enableBackground="new 0 0 330 330"
                      version="1.1"
                      viewBox="0 0 330 330"
                      xmlSpace="preserve"
                    >
                      <path d="M325.606 229.393l-150.004-150a14.997 14.997 0 00-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 00315 255a14.95 14.95 0 0010.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"></path>
                    </svg>
                  </div>
                </>
              )}

              {/* Nouveau influenceur - icon vers le bas */}
              {!popupNewInfluencerMobile && (
                <>
                  <div className="icon">
                    <p onClick={PopupNewInfluencerMobile}>Nouveau</p>
                    <svg
                      onClick={PopupNewInfluencerMobile}
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

              <div className="icon">
                <NavLink style={{ textDecoration: "none" }} to="/">
                  <p style={{ color: "black" }}>Connexion</p>
                </NavLink>
              </div>

              <div className="icon">
                <p onClick={PopupServicePartenaire}>Service Partenaire</p>
              </div>

              <div className="icon">
                <p onClick={PopupVocabulary}>Vocabulaire</p>
              </div>
            </div>
            {/* card */}
          </div>
          {/* mobile-menu-opacity-navbar-top */}
        </>
      )}

      {/* popup activity mobile */}
      {/* popup activity mobile */}
      {/* popup activity mobile */}
      {/* popup activity mobile */}
      {/* popup activity mobile */}
      {/* popup activity mobile */}
      {/* popup activity mobile */}
      {/* popup activity mobile */}
      {/* popup activity mobile */}
      {popupActivityMobile && (
        <>
          <div
            onClick={PopupActivityMobile}
            className="popup-activity-opacity-navbar-top-mobile"
          >
            <div className="card">
              <li>Activités</li>
              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>Partenaire Omisify</p>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>Partenaire Omisify Influent</p>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>Partenaire Omisify Vidéaste</p>
              </NavLink>
            </div>
            {/* card */}
          </div>
          {/* navbar-top-popup-generation-omisify-opacity */}
        </>
      )}

      {/* popup generation omisify mobile */}
      {/* popup generation omisify mobile */}
      {/* popup generation omisify mobile */}
      {/* popup generation omisify mobile */}
      {/* popup generation omisify mobile */}
      {/* popup generation omisify mobile */}
      {popupGenerationOmisifyMobile && (
        <>
          <div
            onClick={PopupGenerationOmisifyMobile}
            className="popup-generation-omisify-opacity-navbar-top-mobile"
          >
            <div className="card">
              <li>Génération Connecté</li>

              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>
                  Rejoindre la Génération Connecté
                </p>
              </NavLink>
            </div>
            {/* card */}
          </div>
          {/* navbar-top-popup-generation-omisify-opacity */}
        </>
      )}

      {/* popup New Influencer mobile */}
      {/* popup New Influencer mobile */}
      {/* popup New Influencer mobile */}
      {/* popup New Influencer mobile */}
      {/* popup New Influencer mobile */}
      {/* popup New Influencer mobile */}
      {/* popup New Influencer mobile */}
      {popupNewInfluencerMobile && (
        <>
          <div
            onClick={PopupNewInfluencerMobile}
            className="popup-new-influencer-opacity-navbar-top-mobile"
          >
            <div className="card">
              <li>Nouveau Influenceur</li>

              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>Comment Devenir influenceur</p>
              </NavLink>

              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "black" }}>
                  Programme d'Aide Aux Nouveaux Influenceurs (PAANI)
                </p>
              </NavLink>
            </div>
            {/* card */}
          </div>
          {/* navbar-top-popup-generation-omisify-opacity */}
        </>
      )}

      {/* popup vocabulary navbar top */}
      {/* popup vocabulary navbar top */}
      {/* popup vocabulary navbar top */}
      {/* popup vocabulary navbar top */}
      {/* popup vocabulary navbar top */}
      {/* popup vocabulary navbar top */}
      {popupVocabulary && (
        <>
          <div
            onClick={PopupVocabulary}
            className="popup-vocabulary-opacity-navbar-top"
          >
            <div className="align">
              <div className="card">
                <p style={{ fontWeight: "bold", fontSize: "19px" }}>
                  Vocabulaire
                </p>
                <div className="display">
                  <p
                    style={{
                      color: "red",
                      paddingRight: "5px",
                      paddingTop: "15px",
                    }}
                  >
                    Travailler avec Omisify
                  </p>
                  <p style={{ paddingRight: "5px", paddingBottom: "20px" }}>
                    signifie Faire de la publicité pour des entreprises. Ces
                    influenceurs, ces artistes ou toutes ces personnes qui
                    travaillent avec Omisify sont rémunérés tout les jours par
                    Omisify pour chaque publicité qu'ils réalisent
                  </p>
                  <p style={{ color: "red", paddingRight: "5px" }}>
                    Rejoindre la Génération Connecté
                  </p>
                  <p style={{ paddingRight: "5px", paddingBottom: "20px" }}>
                    signifie Faire partie de ces influenceurs, ces artistes ou
                    toutes ces personnes qui ont choisi de mettre le logo de la
                    marque Omisify à leur photo de profil et à tout leur nouveau
                    contenu photo ou vidéo qu'ils publient. Ils sont rémunérés
                    tout les jours juste pour avoir mis le logo de la marque
                    Omisify à leur photo ou vidéo
                  </p>

                  <NavLink
                    style={{ color: "blue", textDecoration: "none" }}
                    to="/"
                  >
                    <p
                      style={{
                        color: "blue",
                        paddingRight: "5px",
                        textDecoration: "overline blue",
                      }}
                    >
                      Connectez-vous
                    </p>
                  </NavLink>

                  <p style={{ paddingRight: "5px" }}>à votre</p>
                  <p style={{ color: "red", paddingRight: "5px" }}>
                    compte Omisify
                  </p>
                  <p style={{ paddingRight: "5px", paddingBottom: "20px" }}>
                    pour avoir un accès complet au vocabulaire et expressions
                    utilisés par les Partenaires Omisify
                  </p>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-vocabulary-opacity-navbar-top */}
        </>
      )}

      {popupServicePartenaire && (
        <>
          <div
            onClick={PopupServicePartenaire}
            className="popup-service-partenaire-opacity-navbar-top"
          >
            <div className="align">
              <div className="card">
                <div className="a">
                  <p>Service Partenaire</p>
                </div>

                <div className="b">
                  <div className="display">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="20px"
                      fill="white"
                      enableBackground="new 0 0 455 455"
                      version="1.1"
                      viewBox="0 0 455 455"
                      xmlSpace="preserve"
                    >
                      <path d="M60 134.911L60 380.089 196.194 257.5z"></path>
                      <path d="M318.806 257.5L455 380.089 455 134.911z"></path>
                      <path d="M257.5 272.318L432.579 114.729 82.421 114.729z"></path>
                      <path d="M257.5 312.682L218.615 277.681 82.421 400.271 432.579 400.271 296.385 277.681z"></path>
                      <path d="M395 54.729L0 54.729 0 340.271 30 340.271 30 84.729 395 84.729z"></path>
                    </svg>
                    <p>contact@omisify.com</p>
                  </div>

                  <div className="display">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      width="20px"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                    </svg>
                    <p>+5514991550021</p>
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
                    <p>+5514991550021</p>
                  </div>
                  {/* display */}
                </div>
                {/* b */}

                <div className="c">
                  <p>Le service Partenaire d'Omisify est disponible 24h/24</p>
                </div>

                <NavLink to="/">
                  <button>Envoyer un message</button>
                </NavLink>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-service-partenaire-opacity-navbar-top */}
        </>
      )}
    </>
  );
}
