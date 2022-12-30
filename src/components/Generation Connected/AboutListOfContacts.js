import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AboutListOfContacts() {
  const partner =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671415292/omisify/partner_eo1nnu.jpg";

  // popup Ecrire description
  const [popupEcrireDescription, setPopupEcrireDescription] = useState(false);

  function PopupEcrireDescription() {
    setPopupEcrireDescription(!popupEcrireDescription);
  }

  // popup modifier description
  const [popupModifierDescription, setPopupModifierDescription] =
    useState(false);

  function PopupModifierDescription() {
    setPopupModifierDescription(!popupModifierDescription);
  }

  // popup ajouter photo couverture
  const [popupAjouterPhotoCouverture, setPopupAjouterPhotoCouverture] =
    useState(false);

  function AjouterPhotoCouverture() {
    setPopupAjouterPhotoCouverture(!popupAjouterPhotoCouverture);
  }

  function AddPhotoCover() {
    window.location = "/add-photo-cover-success";
  }

  // popup changer photo couverture
  const [popupChangerPhotoCouverture, setPopupChangerPhotoCouverture] =
    useState(false);

  function ChangerPhotoCouverture() {
    setPopupChangerPhotoCouverture(!popupChangerPhotoCouverture);
  }

  function ChangePhotoCover() {
    window.location = "/change-photo-cover-success";
  }

  // modifier description
  function ModifierDescription() {
    window.location = "/modifier-description-success";
  }

  // ajouter description
  function AjouterDescription() {
    window.location = "/ajouter-description-success";
  }

  // popup Help
  const [popupHelp, setPopupHelp] = useState(false);
  function Help() {
    setPopupHelp(!popupHelp);
  }

  return (
    <>
      <div className="about-list-of-contacts">
        <div className="align">
          <div className="cover">
            <img onClick={ChangerPhotoCouverture} src={partner} alt="" />
          </div>
          {/* cover */}

          {/*
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180px"
            fill="#666666"
            viewBox="0 0 30 30"
          >
            <path d="M19.5 9c-.492-.004-.916.242-1.092.47l-2.737 3.457c-.17.208-.55.073-.727-.03l-2.455-1.547c-.29-.19-.62-.35-.988-.35-.38 0-.786.114-1.072.434l-3.293 3.724c-.445.498.3 1.166.746.668l3.294-3.724c.218-.234.535-.05.765.084l2.46 1.552.012.006c.306.19.65.252.988.256.34.004.71-.027.985-.36l2.767-3.5c.217-.263.534-.14.744.04l2.254 1.688c.527.477 1.205-.375.62-.78l-2.252-1.69C20.252 9.188 19.913 9 19.5 9zm-12 8h15a.499.499 0 110 1h-15a.499.499 0 110-1zM11 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 1c.558 0 1 .442 1 1s-.442 1-1 1-1-.442-1-1 .442-1 1-1zm14 19.5a.5.5 0 01-.5.5.5.5 0 01-.5-.5.5.5 0 01.5-.5.5.5 0 01.5.5zm-19 0a.5.5 0 01-.5.5.5.5 0 01-.5-.5.5.5 0 01.5-.5.5.5 0 01.5.5zm9-1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 1c.563 0 1 .437 1 1s-.437 1-1 1-1-.437-1-1 .437-1 1-1zM26.5 3c-.665 0-.648 1 0 1h2c.286 0 .5.214.5.5v14c0 .286-.214.5-.5.5h-2c-.654 0-.66 1 0 1h2c.822 0 1.5-.678 1.5-1.5v-14c0-.822-.678-1.5-1.5-1.5zm-25 0C.678 3 0 3.678 0 4.5v14c0 .822.678 1.5 1.5 1.5h2c.66 0 .665-1 0-1h-2a.488.488 0 01-.5-.5v-14c0-.286.214-.5.5-.5h2c.66 0 .66-1 0-1zm5-1C5.678 2 5 2.678 5 3.5v16c0 .822.678 1.5 1.5 1.5h17c.822 0 1.5-.678 1.5-1.5v-16c0-.822-.678-1.5-1.5-1.5zm0 1h17c.286 0 .5.214.5.5v16c0 .286-.214.5-.5.5h-17a.488.488 0 01-.5-.5v-16c0-.286.214-.5.5-.5z"></path>
          </svg>
        */}

          <svg
            onClick={AjouterPhotoCouverture}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 508 508"
            xmlSpace="preserve"
            width="180px"
            cursor="pointer"
          >
            <path fill="#E9B526" d="M504 438V66H8v372h496z"></path>
            <path fill="#EDC654" d="M52 118H456V386H52z"></path>
            <path fill="#CDEEF9" d="M80 142H428V358H80z"></path>
            <path
              fill="#3C8E51"
              d="M216 193.2l-58 67.6-32.4-35.2-48 46c-.4.4 0 86.4 0 86.4H424l.8-82.8-52.4-52.4-63.2 63.6-93.2-93.2z"
            ></path>
            <path
              fill="#54B265"
              d="M213.2 195.6l-62 58 103.2 103.6 130.8.4-172-162z"
            ></path>
            <path
              fill="#E8BB85"
              d="M121.6 226.4l-44 45.6c-.4.4 0 86 0 86l176.4-.4-132.4-131.2z"
            ></path>
            <circle cx="302.8" cy="192.4" r="20.4" fill="#E9B526"></circle>
            <path d="M504 446H4c-2.4 0-4-1.6-4-4V66c0-2.4 1.6-4 4-4h500c2.4 0 4 1.6 4 4v376c0 2.4-1.6 4-4 4zM8 438h492V70H8v368z"></path>
            <path d="M452 390H52c-2.4 0-4-1.6-4-4V122c0-2.4 1.6-4 4-4h400c2.4 0 4 1.6 4 4v264c0 2.4-1.6 4-4 4zm-396-8h392V126H56v256z"></path>
            <path d="M428 366H76c-2.4 0-4-1.6-4-4V146c0-2.4 1.6-4 4-4h292c2.4 0 4 1.6 4 4s-1.6 4-4 4H80v208h344V150h-8c-2.4 0-4-1.6-4-4s1.6-4 4-4h12c2.4 0 4 1.6 4 4v216c0 2.4-1.6 4-4 4z"></path>
            <path d="M78 271.6c-1.2 0-2-.4-2.8-1.2-1.6-1.6-1.6-4 0-5.6l43.6-43.6c1.6-1.6 4-1.6 5.6 0s1.6 4 0 5.6l-43.6 43.6c-.8.8-1.6 1.2-2.8 1.2z"></path>
            <path d="M194.4 301.2c-1.2 0-2-.4-2.8-1.2l-73.2-73.2c-1.6-1.6-1.6-4 0-5.6s4-1.6 5.6 0l73.2 73.2c1.6 1.6 1.6 4 0 5.6-.8.8-1.6 1.2-2.8 1.2zM163.6 249.6c-1.2 0-2-.4-2.8-1.2-1.6-1.6-1.6-4 0-5.6l52.4-52.4c1.6-1.6 4-1.6 5.6 0s1.6 4 0 5.6l-52.4 52.4c-.8.8-1.6 1.2-2.8 1.2zM320 279.2c-1.2 0-2-.4-2.8-1.2-1.6-1.6-1.6-4 0-5.6l52.4-52.4c1.6-1.6 4-1.6 5.6 0s1.6 4 0 5.6L322.8 278c-.8.8-2 1.2-2.8 1.2z"></path>
            <path d="M337.2 318.4c-1.2 0-2-.4-2.8-1.2L213.2 196.4c-1.6-1.6-1.6-4 0-5.6s4-1.6 5.6 0L340 311.6c1.6 1.6 1.6 4 0 5.6-.8.8-2 1.2-2.8 1.2zM427.6 282c-1.2 0-2-.4-2.8-1.2l-55.2-55.2c-1.6-1.6-1.6-4 0-5.6s4-1.6 5.6 0l55.2 55.2c1.6 1.6 1.6 4 0 5.6-.8.8-2 1.2-2.8 1.2zM304.4 215.6c-13.2 0-24-10.8-24-24s10.8-24 24-24c4.8 0 9.6 1.6 13.6 4.4 2 1.2 2.4 3.6.8 5.6-1.2 2-3.6 2.4-5.6.8-2.8-2-6-2.8-9.2-2.8-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16c0-2.4 1.6-4 4-4s4 1.6 4 4c.4 13.2-10.4 24-23.6 24z"></path>
          </svg>

          <div className="width">
            <div className="a">
              <NavLink to="/list-of-contacts">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  enableBackground="new 0 0 486.975 486.975"
                  version="1.1"
                  viewBox="0 0 486.975 486.975"
                  xmlSpace="preserve"
                >
                  <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
                </svg>
              </NavLink>

              <div className="width">
                <p>A propos du Groupe Whatsapp </p>
              </div>
              {/* width */}
            </div>
            {/* a */}

            <div className="name-of-group-about-list-of-contacts">
              <div className="a">
                <p>VirilNation</p>
              </div>

              <div className="box-shadow">
                <p>Date de création : 17/02/2022</p>
                <a href="https://group.whatsapp.com" target="_blank" rel="noreferrer">
                https://group.whatsapp.com
              </a>
              </div>
            </div>
            {/* name-of-group-about-list-of-contacts */}

            <div className="b">
              <div className="space">
                <p></p>

                {/* help */}
                <svg
                  onClick={Help}
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

                {/*  popup menu a droite
                  <svg
                    style={{ paddingLeft: "3px" }}
                    xmlns="http://www.w3.org/2000/svg"
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
                  */}
              </div>
              {/* space */}

              <div className="c">
                <p style={{ fontSize: "16px" }}>
                  Dites quelques choses à propos de votre Groupe Whatsapp..
                </p>

                <svg
                  onClick={PopupEcrireDescription}
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
              </div>
              {/* c */}

              <div className="c">
                <p style={{ fontSize: "16px" }}>
                  C'est la liste des membres de mon groupe Whatsapp
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={PopupModifierDescription}
                  width="20px"
                  cursor="pointer"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M3.548 20.938h16.9a.5.5 0 000-1h-16.9a.5.5 0 000 1zM9.71 17.18a2.587 2.587 0 001.12-.65l9.54-9.54a1.75 1.75 0 000-2.47l-.94-.93a1.788 1.788 0 00-2.47 0l-9.54 9.53a2.473 2.473 0 00-.64 1.12L6.04 17a.737.737 0 00.19.72.767.767 0 00.53.22zm.41-1.36a1.468 1.468 0 01-.67.39l-.97.26-1-1 .26-.97a1.521 1.521 0 01.39-.67l.38-.37 1.99 1.99zm1.09-1.08l-1.99-1.99 6.73-6.73 1.99 1.99zm8.45-8.45L18.65 7.3l-1.99-1.99 1.01-1.02a.748.748 0 011.06 0l.93.94a.754.754 0 010 1.06z"></path>
                  </g>
                </svg>
              </div>
              {/* c */}

              <div className="d">
                <div style={{ paddingBottom: "15px" }} className="display">
                  <svg
                    style={{ paddingRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    width="20px"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                  </svg>
                  <div className="width">
                    <p style={{ fontSize: "15px", paddingRight: "5px" }}>
                      Nombre de membre(s)
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>3</p>
                  </div>
                  {/* width */}
                </div>
                {/* display */}

                <div className="display">
                  <svg
                    style={{ paddingRight: "5px" }}
                    width="20px"
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M473.6 256.6c0-99.3-67.1-185.9-163.3-210.6-9.2-2.4-18.6 3.2-20.9 12.4-2.4 9.2 3.2 18.6 12.4 20.9C382.7 100 439.2 173 439.2 256.6c0 73.7-43.9 139-109.6 167.7l15.9-37c3.7-8.7-.3-18.8-9-22.6-8.7-3.7-18.8.3-22.6 9l-31 72.2c-3.7 8.7.3 18.8 9 22.6l72.2 31c10.8 3.8 19.8-2.5 22.6-9 3.7-8.7-.3-18.8-9-22.6l-31.4-13.5c76.5-34.6 127.3-111.4 127.3-197.8zM210.4 433.9C129.5 413.1 73 340.2 73 256.6c0-72.7 42.7-137.2 106.9-166.5L165 124.7c-3.7 8.7.1 19.2 9 22.6 10.4 3.9 19.2-.8 22.6-9l31-72.3c3-7 2.9-17.5-9-22.6l-72.2-31c-8.7-3.7-18.8.3-22.6 9-3.7 8.7.3 18.8 9 22.6l33.6 14.4C89.6 93.1 38.6 170 38.6 256.6c0 99.3 67.2 185.8 163.3 210.6 11.6 3 18.9-4.6 20.9-12.4 2.3-9.2-3.2-18.5-12.4-20.9z"></path>
                    <path d="M296.6 321.4c8.8-9.2 13.2-20.8 13.2-34.6 0-6.3-1.1-12.1-3.2-17.5s-5.1-10-9-14c-3.9-3.9-9-7.2-15.2-10-3.3-1.4-9.9-3.4-20-5.9V182c6.5 1.3 11.6 4.1 15.4 8.3 3.7 4.2 6.2 10.2 7.4 18l20.6-3.1c-1.8-12.6-7-22.6-15.7-29.8-6.8-5.7-16-9.1-27.6-10.2v-9.5h-11.8v9.5c-13.2 1.3-23.2 5-29.9 10.9-10.1 8.8-15.1 20.3-15.1 34.5 0 8 1.7 15.1 5.2 21.4 3.4 6.3 8.3 11.2 14.7 14.7 8.6 4.8 17 8 25.2 9.5v63.5c-7.8-.8-14.6-4.8-20.2-11.9-3.9-5-6.7-12.9-8.2-23.6l-20.1 3.8c.7 10.3 3.4 19.1 7.9 26.3 4.5 7.2 9.9 12.4 16.2 15.6 6.2 3.2 14.4 5.4 24.3 6.7v19.9h11.8v-20.2c14-.7 25.4-5.7 34.1-14.9zm-45.8-84.5c-9.1-2.7-15.5-6.4-19.3-11-3.8-4.6-5.7-10.3-5.7-17.1 0-6.9 2.2-12.8 6.7-17.8s10.6-8.1 18.3-9.3v55.2zm30.9 72.6c-5.1 5.8-11.5 9.1-19.2 10.1v-60.7c10.7 3.5 17.9 7.4 21.5 11.8 3.6 4.4 5.4 10.2 5.4 17.5-.1 8.4-2.6 15.6-7.7 21.3z"></path>
                  </svg>
                  <div className="width">
                    <p
                      style={{
                        fontSize: "17px",
                        paddingRight: "5px",
                      }}
                    >
                      Valeur du Groupe Whatsapp
                    </p>
                    <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                      0.0025
                    </p>
                  </div>
                  {/* width */}
                </div>
                {/* display */}
              </div>
              {/* d */}
            </div>
            {/* b */}
          </div>
          {/* width */}
        </div>
        {/* align */}
      </div>
      {/* about-list-of-contacts */}

      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {popupEcrireDescription && (
        <>
          <div className="popup-ecrire-description-opacity">
            <div className="align">
              <div className="card">
                <div className="title">
                  <p>Description</p>
                  <svg
                    onClick={PopupEcrireDescription}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    className="infos-of-dev-close-btn"
                    enableBackground="new 0 0 484.271 484.271"
                    version="1.1"
                    viewBox="0 0 484.271 484.271"
                    xmlSpace="preserve"
                  >
                    <path d="M39.938 0v49.923H0v434.348h434.348v-69.892h49.923V0H39.938zm379.41 469.271H15V64.923h404.348v404.348zm49.923-69.892h-34.923V49.923H54.938V15h414.333v384.379z"></path>
                    <path d="M90.234 355.359c0 4.692 1.817 9.093 5.117 12.393l21.167 21.166c3.3 3.301 7.7 5.118 12.393 5.118s9.093-1.817 12.393-5.117l75.87-75.871 75.87 75.871c3.301 3.3 7.701 5.117 12.393 5.117s9.093-1.817 12.392-5.117l21.169-21.167c6.833-6.833 6.833-17.952 0-24.785l-75.871-75.87 75.871-75.871c6.832-6.834 6.832-17.951 0-24.784l-21.168-21.168c-6.832-6.83-17.95-6.833-24.784 0l-75.871 75.871-75.87-75.871c-6.833-6.831-17.95-6.834-24.785.001l-21.166 21.167c-3.301 3.3-5.118 7.7-5.118 12.393 0 4.691 1.817 9.092 5.117 12.393l75.871 75.87-75.87 75.87c-3.302 3.299-5.12 7.699-5.12 12.391zm15.725-1.785l86.477-86.478-86.477-86.478c-.631-.63-.725-1.389-.725-1.785s.094-1.155.725-1.786l21.167-21.167c.967-.969 2.604-.969 3.57 0l86.478 86.477 86.477-86.477c.969-.97 2.604-.968 3.571 0l21.168 21.168c.968.968.968 2.604 0 3.57l-86.477 86.478 86.477 86.478c.969.968.969 2.603.001 3.57l-21.169 21.168c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-86.478-86.477-86.478 86.478c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-21.168-21.167c-.63-.63-.724-1.389-.724-1.785s.094-1.155.725-1.785z"></path>
                  </svg>
                </div>
                {/* title */}

                <p>Écriver la description de votre Liste de Contact Whatsapp</p>

                <textarea
                  name="description"
                  placeholder="Dites quelques chose.."
                ></textarea>

                <button onClick={AjouterDescription}>Enregistrer</button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-ecrire-description */}
        </>
      )}

      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {popupModifierDescription && (
        <>
          <div className="popup-ecrire-description-opacity">
            <div className="align">
              <div className="card">
                <div className="title">
                  <p>Modification</p>
                  <svg
                    onClick={PopupModifierDescription}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    className="infos-of-dev-close-btn"
                    enableBackground="new 0 0 484.271 484.271"
                    version="1.1"
                    viewBox="0 0 484.271 484.271"
                    xmlSpace="preserve"
                  >
                    <path d="M39.938 0v49.923H0v434.348h434.348v-69.892h49.923V0H39.938zm379.41 469.271H15V64.923h404.348v404.348zm49.923-69.892h-34.923V49.923H54.938V15h414.333v384.379z"></path>
                    <path d="M90.234 355.359c0 4.692 1.817 9.093 5.117 12.393l21.167 21.166c3.3 3.301 7.7 5.118 12.393 5.118s9.093-1.817 12.393-5.117l75.87-75.871 75.87 75.871c3.301 3.3 7.701 5.117 12.393 5.117s9.093-1.817 12.392-5.117l21.169-21.167c6.833-6.833 6.833-17.952 0-24.785l-75.871-75.87 75.871-75.871c6.832-6.834 6.832-17.951 0-24.784l-21.168-21.168c-6.832-6.83-17.95-6.833-24.784 0l-75.871 75.871-75.87-75.871c-6.833-6.831-17.95-6.834-24.785.001l-21.166 21.167c-3.301 3.3-5.118 7.7-5.118 12.393 0 4.691 1.817 9.092 5.117 12.393l75.871 75.87-75.87 75.87c-3.302 3.299-5.12 7.699-5.12 12.391zm15.725-1.785l86.477-86.478-86.477-86.478c-.631-.63-.725-1.389-.725-1.785s.094-1.155.725-1.786l21.167-21.167c.967-.969 2.604-.969 3.57 0l86.478 86.477 86.477-86.477c.969-.97 2.604-.968 3.571 0l21.168 21.168c.968.968.968 2.604 0 3.57l-86.477 86.478 86.477 86.478c.969.968.969 2.603.001 3.57l-21.169 21.168c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-86.478-86.477-86.478 86.478c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-21.168-21.167c-.63-.63-.724-1.389-.724-1.785s.094-1.155.725-1.785z"></path>
                  </svg>
                </div>
                {/* title */}

                <p>
                  Modifier la Description de votre Liste de Contact Whatsapp
                </p>

                <textarea name="description"></textarea>

                <button onClick={ModifierDescription}>Enregistrer</button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-modifier-description */}
        </>
      )}

      {/* ajouter photo couverture - about list of contacts */}
      {/* ajouter photo couverture - about list of contacts */}
      {/* ajouter photo couverture - about list of contacts */}
      {popupAjouterPhotoCouverture && (
        <>
          <div className="popup-ajouter-photo-couverture-opacity">
            <div className="align">
              <div className="card">
                <div className="title">
                  <p>Couverture</p>
                  <svg
                    onClick={AjouterPhotoCouverture}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    className="infos-of-dev-close-btn"
                    enableBackground="new 0 0 484.271 484.271"
                    version="1.1"
                    viewBox="0 0 484.271 484.271"
                    xmlSpace="preserve"
                  >
                    <path d="M39.938 0v49.923H0v434.348h434.348v-69.892h49.923V0H39.938zm379.41 469.271H15V64.923h404.348v404.348zm49.923-69.892h-34.923V49.923H54.938V15h414.333v384.379z"></path>
                    <path d="M90.234 355.359c0 4.692 1.817 9.093 5.117 12.393l21.167 21.166c3.3 3.301 7.7 5.118 12.393 5.118s9.093-1.817 12.393-5.117l75.87-75.871 75.87 75.871c3.301 3.3 7.701 5.117 12.393 5.117s9.093-1.817 12.392-5.117l21.169-21.167c6.833-6.833 6.833-17.952 0-24.785l-75.871-75.87 75.871-75.871c6.832-6.834 6.832-17.951 0-24.784l-21.168-21.168c-6.832-6.83-17.95-6.833-24.784 0l-75.871 75.871-75.87-75.871c-6.833-6.831-17.95-6.834-24.785.001l-21.166 21.167c-3.301 3.3-5.118 7.7-5.118 12.393 0 4.691 1.817 9.092 5.117 12.393l75.871 75.87-75.87 75.87c-3.302 3.299-5.12 7.699-5.12 12.391zm15.725-1.785l86.477-86.478-86.477-86.478c-.631-.63-.725-1.389-.725-1.785s.094-1.155.725-1.786l21.167-21.167c.967-.969 2.604-.969 3.57 0l86.478 86.477 86.477-86.477c.969-.97 2.604-.968 3.571 0l21.168 21.168c.968.968.968 2.604 0 3.57l-86.477 86.478 86.477 86.478c.969.968.969 2.603.001 3.57l-21.169 21.168c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-86.478-86.477-86.478 86.478c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-21.168-21.167c-.63-.63-.724-1.389-.724-1.785s.094-1.155.725-1.785z"></path>
                  </svg>
                </div>
                {/* title */}

                <p>
                  Ajouter une photo de couverture à votre Liste de Contacts
                  Whatsapp
                </p>

                <input type="file" />

                <button onClick={AddPhotoCover}>
                  Ajouter la photo de couverture
                </button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-ajouter-photo-couverture */}
        </>
      )}

      {/* popup changer photo couverture - about list of contacts */}
      {/* popup changer photo couverture - about list of contacts */}
      {/* popup changer photo couverture - about list of contacts */}
      {popupChangerPhotoCouverture && (
        <>
          <div className="popup-ajouter-photo-couverture-opacity">
            <div className="align">
              <div className="card">
                <div className="title">
                  <p>Couverture</p>
                  <svg
                    onClick={ChangerPhotoCouverture}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    className="infos-of-dev-close-btn"
                    enableBackground="new 0 0 484.271 484.271"
                    version="1.1"
                    viewBox="0 0 484.271 484.271"
                    xmlSpace="preserve"
                  >
                    <path d="M39.938 0v49.923H0v434.348h434.348v-69.892h49.923V0H39.938zm379.41 469.271H15V64.923h404.348v404.348zm49.923-69.892h-34.923V49.923H54.938V15h414.333v384.379z"></path>
                    <path d="M90.234 355.359c0 4.692 1.817 9.093 5.117 12.393l21.167 21.166c3.3 3.301 7.7 5.118 12.393 5.118s9.093-1.817 12.393-5.117l75.87-75.871 75.87 75.871c3.301 3.3 7.701 5.117 12.393 5.117s9.093-1.817 12.392-5.117l21.169-21.167c6.833-6.833 6.833-17.952 0-24.785l-75.871-75.87 75.871-75.871c6.832-6.834 6.832-17.951 0-24.784l-21.168-21.168c-6.832-6.83-17.95-6.833-24.784 0l-75.871 75.871-75.87-75.871c-6.833-6.831-17.95-6.834-24.785.001l-21.166 21.167c-3.301 3.3-5.118 7.7-5.118 12.393 0 4.691 1.817 9.092 5.117 12.393l75.871 75.87-75.87 75.87c-3.302 3.299-5.12 7.699-5.12 12.391zm15.725-1.785l86.477-86.478-86.477-86.478c-.631-.63-.725-1.389-.725-1.785s.094-1.155.725-1.786l21.167-21.167c.967-.969 2.604-.969 3.57 0l86.478 86.477 86.477-86.477c.969-.97 2.604-.968 3.571 0l21.168 21.168c.968.968.968 2.604 0 3.57l-86.477 86.478 86.477 86.478c.969.968.969 2.603.001 3.57l-21.169 21.168c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-86.478-86.477-86.478 86.478c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-21.168-21.167c-.63-.63-.724-1.389-.724-1.785s.094-1.155.725-1.785z"></path>
                  </svg>
                </div>
                {/* title */}

                <p>
                  Changer la photo de couverture de votre Liste de Contacts
                  Whatsapp
                </p>

                <input type="file" />

                <button onClick={ChangePhotoCover}>
                  Changer la photo de couverture
                </button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-ajouter-photo-couverture */}
        </>
      )}

      {/* popup help */}
      {/* popup help */}
      {/* popup help */}
      {popupHelp && (
        <>
          <div
            onClick={Help}
            className="popup-help-list-of-contacts-whatsapp-opacity"
          >
            <div className="align">
              <div className="card">
                {/* 
                <div className="display">
                </div>
                display-indice-one */}

                {/* display-indice-one */}
                {/* display-indice-one */}
                {/* display-indice-one */}
                <div className="display-indice-two">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>

                  <svg
                    style={{ paddingRight: "5px" }}
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 508 508"
                    xmlSpace="preserve"
                  >
                    <path fill="#E9B526" d="M504 438V66H8v372h496z"></path>
                    <path fill="#EDC654" d="M52 118H456V386H52z"></path>
                    <path fill="#CDEEF9" d="M80 142H428V358H80z"></path>
                    <path
                      fill="#3C8E51"
                      d="M216 193.2l-58 67.6-32.4-35.2-48 46c-.4.4 0 86.4 0 86.4H424l.8-82.8-52.4-52.4-63.2 63.6-93.2-93.2z"
                    ></path>
                    <path
                      fill="#54B265"
                      d="M213.2 195.6l-62 58 103.2 103.6 130.8.4-172-162z"
                    ></path>
                    <path
                      fill="#E8BB85"
                      d="M121.6 226.4l-44 45.6c-.4.4 0 86 0 86l176.4-.4-132.4-131.2z"
                    ></path>
                    <circle
                      cx="302.8"
                      cy="192.4"
                      r="20.4"
                      fill="#E9B526"
                    ></circle>
                    <path d="M504 446H4c-2.4 0-4-1.6-4-4V66c0-2.4 1.6-4 4-4h500c2.4 0 4 1.6 4 4v376c0 2.4-1.6 4-4 4zM8 438h492V70H8v368z"></path>
                    <path d="M452 390H52c-2.4 0-4-1.6-4-4V122c0-2.4 1.6-4 4-4h400c2.4 0 4 1.6 4 4v264c0 2.4-1.6 4-4 4zm-396-8h392V126H56v256z"></path>
                    <path d="M428 366H76c-2.4 0-4-1.6-4-4V146c0-2.4 1.6-4 4-4h292c2.4 0 4 1.6 4 4s-1.6 4-4 4H80v208h344V150h-8c-2.4 0-4-1.6-4-4s1.6-4 4-4h12c2.4 0 4 1.6 4 4v216c0 2.4-1.6 4-4 4z"></path>
                    <path d="M78 271.6c-1.2 0-2-.4-2.8-1.2-1.6-1.6-1.6-4 0-5.6l43.6-43.6c1.6-1.6 4-1.6 5.6 0s1.6 4 0 5.6l-43.6 43.6c-.8.8-1.6 1.2-2.8 1.2z"></path>
                    <path d="M194.4 301.2c-1.2 0-2-.4-2.8-1.2l-73.2-73.2c-1.6-1.6-1.6-4 0-5.6s4-1.6 5.6 0l73.2 73.2c1.6 1.6 1.6 4 0 5.6-.8.8-1.6 1.2-2.8 1.2zM163.6 249.6c-1.2 0-2-.4-2.8-1.2-1.6-1.6-1.6-4 0-5.6l52.4-52.4c1.6-1.6 4-1.6 5.6 0s1.6 4 0 5.6l-52.4 52.4c-.8.8-1.6 1.2-2.8 1.2zM320 279.2c-1.2 0-2-.4-2.8-1.2-1.6-1.6-1.6-4 0-5.6l52.4-52.4c1.6-1.6 4-1.6 5.6 0s1.6 4 0 5.6L322.8 278c-.8.8-2 1.2-2.8 1.2z"></path>
                    <path d="M337.2 318.4c-1.2 0-2-.4-2.8-1.2L213.2 196.4c-1.6-1.6-1.6-4 0-5.6s4-1.6 5.6 0L340 311.6c1.6 1.6 1.6 4 0 5.6-.8.8-2 1.2-2.8 1.2zM427.6 282c-1.2 0-2-.4-2.8-1.2l-55.2-55.2c-1.6-1.6-1.6-4 0-5.6s4-1.6 5.6 0l55.2 55.2c1.6 1.6 1.6 4 0 5.6-.8.8-2 1.2-2.8 1.2zM304.4 215.6c-13.2 0-24-10.8-24-24s10.8-24 24-24c4.8 0 9.6 1.6 13.6 4.4 2 1.2 2.4 3.6.8 5.6-1.2 2-3.6 2.4-5.6.8-2.8-2-6-2.8-9.2-2.8-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16c0-2.4 1.6-4 4-4s4 1.6 4 4c.4 13.2-10.4 24-23.6 24z"></path>
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
                    une photo
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    de couverture
                  </p>
                  <p style={{ paddingRight: "5px" }}>à votre</p>
                  <p style={{ paddingRight: "5px" }}>Groupe</p>
                  <p style={{ paddingRight: "5px" }}>Whatsapp</p>
                  <p style={{ paddingRight: "5px" }}>et si</p>
                  <p style={{ paddingRight: "5px" }}>vous voulez</p>
                  <p style={{ paddingRight: "5px" }}>changer</p>
                  <p style={{ paddingRight: "5px" }}>la photo</p>
                  <p style={{ paddingRight: "5px" }}>de couverture</p>
                  <p style={{ paddingRight: "5px" }}>recliquer</p>
                  <p style={{ paddingRight: "5px" }}>sur l'image</p>
                  <p style={{ paddingRight: "5px" }}>que vous</p>
                  <p style={{ paddingRight: "5px" }}>avez ajouter</p>
                  <p style={{ paddingRight: "5px" }}>et choisissez</p>
                  <p style={{ paddingRight: "5px" }}>la nouvelle</p>
                  <p style={{ paddingRight: "5px" }}>photo de</p>
                  <p style={{ paddingRight: "5px" }}>couverture</p>
                </div>
                {/* display-indice-two */}

                {/* display-indice-two */}
                {/* display-indice-two */}
                {/* display-indice-two */}
                <div className="display-indice-two">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ paddingRight: "5px" }}
                    width="20px"
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
                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    écrire
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    la
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    description
                  </p>
                  <p style={{ paddingRight: "5px" }}>de votre</p>
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
                    style={{ paddingRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M3.548 20.938h16.9a.5.5 0 000-1h-16.9a.5.5 0 000 1zM9.71 17.18a2.587 2.587 0 001.12-.65l9.54-9.54a1.75 1.75 0 000-2.47l-.94-.93a1.788 1.788 0 00-2.47 0l-9.54 9.53a2.473 2.473 0 00-.64 1.12L6.04 17a.737.737 0 00.19.72.767.767 0 00.53.22zm.41-1.36a1.468 1.468 0 01-.67.39l-.97.26-1-1 .26-.97a1.521 1.521 0 01.39-.67l.38-.37 1.99 1.99zm1.09-1.08l-1.99-1.99 6.73-6.73 1.99 1.99zm8.45-8.45L18.65 7.3l-1.99-1.99 1.01-1.02a.748.748 0 011.06 0l.93.94a.754.754 0 010 1.06z"></path>
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
                    la
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    description
                  </p>
                  <p style={{ paddingRight: "5px" }}>de</p>
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
    </>
  );
}
