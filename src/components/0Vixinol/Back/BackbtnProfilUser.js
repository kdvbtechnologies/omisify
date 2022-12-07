import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThePopupToRight from "../ProfilUser/PopupToRight";

export default function BackbtnProfilUser() {
  const [popup, setPopup] = useState(false);
  const [popupTranslate, setPopupTranslate] = useState(false);

  function PopupToRight() {
    setPopup(!popup);
  }

  function PopupTranslate() {
    setPopupTranslate(!popupTranslate);
  }

  return (
    <>
      <div className="back-btn-profil-user">
        <div className="justify">
          <div></div>

          <div className="b">
            <svg
              onClick={PopupTranslate}
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              cursor="pointer"
              viewBox="0 0 256 256"
            >
              <path d="M239.126 212.422l-56-112a8 8 0 00-14.31 0l-21.698 43.395a88.012 88.012 0 01-47.152-16.9A103.639 103.639 0 00127.666 64h24.305a8 8 0 000-16h-56V32a8 8 0 00-16 0v16h-56a8 8 0 100 16h87.632a87.713 87.713 0 01-23.64 52.341A87.63 87.63 0 0168.98 85.332a8 8 0 10-15.083 5.338 103.559 103.559 0 0022.082 36.27A87.528 87.528 0 0123.97 144a8 8 0 100 16 103.485 103.485 0 0064.014-22.09 104.142 104.142 0 0051.441 21.292l-26.61 53.22a8 8 0 0014.311 7.156L140.915 192h70.111l13.79 27.578a8 8 0 0014.31-7.156zM148.915 176l27.056-54.111L203.026 176z"></path>
            </svg>

            <NavLink to="/favorite-vi">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="20px"
                cursor="pointer"
                enableBackground="new 0 0 394.749 394.749"
                version="1.1"
                viewBox="0 0 394.749 394.749"
                xmlSpace="preserve"
              >
                <path
                  fill="#73D0F4"
                  d="M230.896 109.757l-34.864-70.643-34.865 70.643a12 12 0 01-9.035 6.564l-77.96 11.329 56.412 54.987a12.001 12.001 0 013.451 10.622l-13.317 77.645 69.73-36.659a11.999 11.999 0 0111.168 0l69.729 36.659-13.316-77.645a12 12 0 013.451-10.622l56.412-54.987-77.96-11.329a12 12 0 01-9.036-6.564z"
                ></path>
                <path
                  fill="#3D6889"
                  d="M355.091 115.563a12.001 12.001 0 00-9.688-8.167l-95.778-13.918-42.833-86.79a12 12 0 00-21.521 0l-42.834 86.79-95.778 13.918a12.002 12.002 0 00-6.651 20.469l69.306 67.556-16.361 95.391a11.999 11.999 0 0017.411 12.65l85.668-45.038 85.666 45.038a11.988 11.988 0 005.583 1.378 11.997 11.997 0 0011.828-14.028l-16.36-95.391 69.306-67.556a12.001 12.001 0 003.036-12.302zm-93.612 67.075a12.001 12.001 0 00-3.451 10.622l13.316 77.645-69.729-36.659a11.999 11.999 0 00-11.168 0l-69.73 36.659 13.317-77.645a12 12 0 00-3.451-10.622L74.171 127.65l77.96-11.329a12 12 0 009.035-6.564l34.865-70.643 34.864 70.643a12 12 0 009.035 6.564l77.96 11.329-56.411 54.988zM29.763 177.838c-6.627 0-12 5.373-12 12v192.911c0 6.627 5.373 12 12 12s12-5.373 12-12V189.838c0-6.627-5.373-12-12-12zM364.986 177.838c-6.627 0-12 5.373-12 12v192.911c0 6.627 5.373 12 12 12s12-5.373 12-12V189.838c0-6.627-5.373-12-12-12zM280.508 324.356c-6.627 0-12 5.372-12 12v46.393c0 6.627 5.373 12 12 12s12-5.373 12-12v-46.393c0-6.628-5.373-12-12-12z"
                ></path>
                <path
                  fill="#3D6889"
                  d="M196.032 286.708c-6.627 0-12 5.372-12 12v84.041c0 6.627 5.373 12 12 12s12-5.373 12-12v-84.041c0-6.628-5.373-12-12-12zM111.554 324.356c-6.627 0-12 5.372-12 12v46.393c0 6.627 5.373 12 12 12s12-5.373 12-12v-46.393c0-6.628-5.373-12-12-12z"
                ></path>
              </svg>
            </NavLink>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              onClick={PopupToRight}
              width="20px"
              cursor="pointer"
              enableBackground="new 0 0 296.999 296.999"
              version="1.1"
              viewBox="0 0 296.999 296.999"
              xmlSpace="preserve"
            >
              <path d="M173.062 0h-49.126c-10.419 0-18.895 8.476-18.895 18.895v49.126c0 10.419 8.476 18.895 18.895 18.895h49.126c10.419 0 18.895-8.476 18.895-18.895V18.895C191.958 8.476 183.481 0 173.062 0zm-.871 67.15h-47.383V19.767h47.383V67.15zM173.062 105.041h-49.126c-10.419 0-18.895 8.476-18.895 18.895v49.126c0 10.419 8.476 18.895 18.895 18.895h49.126c10.419 0 18.895-8.476 18.895-18.895v-49.126c.001-10.418-8.476-18.895-18.895-18.895zm-.871 67.151h-47.383v-47.383h47.383v47.383zM173.062 210.083h-49.126c-10.419 0-18.895 8.476-18.895 18.895v49.126c0 10.419 8.476 18.895 18.895 18.895h49.126c10.419 0 18.895-8.476 18.895-18.895v-49.126c.001-10.419-8.476-18.895-18.895-18.895zm-.871 67.15h-47.383V229.85h47.383v47.383z"></path>
            </svg>
          </div>
        </div>
      </div>

      {popup && (
        <div onClick={PopupToRight}>
          <ThePopupToRight />
        </div>
      )}

      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {/* popup translate */}
      {popupTranslate && (
        <>
          <div className="popup-translate-opacity">
            <div className="align">
              <div className="back-btn-popup-translate">
                <svg
                  onClick={PopupTranslate}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  fill="white"
                  width="20px"
                  cursor="pointer"
                  enableBackground="new 0 0 511.893 511.893"
                  version="1.1"
                  viewBox="0 0 511.893 511.893"
                  xmlSpace="preserve"
                >
                  <path d="M391.253 255.947l117.76-104.96c2.56-2.56 3.413-5.973 2.56-9.387-.853-2.56-4.267-5.12-7.68-5.12h-376.32c-1.707 0-4.267.853-5.973 2.56L4.693 245.707l-.853.853c-5.12 5.973-5.12 14.507 0 20.48l.853.853L121.6 372.853c1.707 1.707 4.267 2.56 5.973 2.56h376.32c3.413 0 6.827-2.56 7.68-5.12.853-3.413 0-6.827-2.56-9.387l-117.76-104.959zm-260.266 102.4l-113.493-102.4 113.493-102.4h350.72l-102.4 92.16s-.853 0-.853.853c-5.12 5.973-5.12 14.507 0 20.48l.853.853 102.4 90.453h-350.72z"></path>
                </svg>
              </div>
              {/* back-btn-popup-translate */}

              <div className="card">
                <div className="en">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    cursor="pointer"
                    width="20px"
                    ariaHidden="true"
                    className="iconify iconify--emojione"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#ed4c5c"
                      d="M48 6.6C43.3 3.7 37.9 2 32 2v4.6h16"
                    ></path>
                    <path
                      fill="#fff"
                      d="M32 11.2h21.6C51.9 9.5 50 7.9 48 6.6H32v4.6z"
                    ></path>
                    <path
                      fill="#ed4c5c"
                      d="M32 15.8h25.3c-1.1-1.7-2.3-3.2-3.6-4.6H32v4.6z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M32 20.4h27.7c-.7-1.6-1.5-3.2-2.4-4.6H32v4.6"
                    ></path>
                    <path
                      fill="#ed4c5c"
                      d="M32 25h29.2c-.4-1.6-.9-3.1-1.5-4.6H32V25z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M32 29.7h29.9c-.1-1.6-.4-3.1-.7-4.6H32v4.6"
                    ></path>
                    <path
                      fill="#ed4c5c"
                      d="M61.9 29.7H32V32H2c0 .8 0 1.5.1 2.3h59.8c.1-.8.1-1.5.1-2.3 0-.8 0-1.6-.1-2.3"
                    ></path>
                    <path
                      fill="#fff"
                      d="M2.8 38.9h58.4c.4-1.5.6-3 .7-4.6H2.1c.1 1.5.3 3.1.7 4.6"
                    ></path>
                    <path
                      fill="#ed4c5c"
                      d="M4.3 43.5h55.4c.6-1.5 1.1-3 1.5-4.6H2.8c.4 1.6.9 3.1 1.5 4.6"
                    ></path>
                    <path
                      fill="#fff"
                      d="M6.7 48.1h50.6c.9-1.5 1.7-3 2.4-4.6H4.3c.7 1.6 1.5 3.1 2.4 4.6"
                    ></path>
                    <path
                      fill="#ed4c5c"
                      d="M10.3 52.7h43.4c1.3-1.4 2.6-3 3.6-4.6H6.7c1 1.7 2.3 3.2 3.6 4.6"
                    ></path>
                    <path
                      fill="#fff"
                      d="M15.9 57.3h32.2c2.1-1.3 3.9-2.9 5.6-4.6H10.3c1.7 1.8 3.6 3.3 5.6 4.6"
                    ></path>
                    <path
                      fill="#ed4c5c"
                      d="M32 62c5.9 0 11.4-1.7 16.1-4.7H15.9c4.7 3 10.2 4.7 16.1 4.7"
                    ></path>
                    <path
                      fill="#428bc1"
                      d="M16 6.6c-2.1 1.3-4 2.9-5.7 4.6-1.4 1.4-2.6 3-3.6 4.6-.9 1.5-1.8 3-2.4 4.6-.6 1.5-1.1 3-1.5 4.6-.4 1.5-.6 3-.7 4.6-.1.8-.1 1.6-.1 2.4h30V2c-5.9 0-11.3 1.7-16 4.6"
                    ></path>
                    <g fill="#fff">
                      <path d="M25 3l.5 1.5H27l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM29 9l.5 1.5H31l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM21 9l.5 1.5H23l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM25 15l.5 1.5H27l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM17 15l.5 1.5H19l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM9 15l.5 1.5H11l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM29 21l.5 1.5H31l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM21 21l.5 1.5H23l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM13 21l.5 1.5H15l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM25 27l.5 1.5H27l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM17 27l.5 1.5H19l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM9 27l.5 1.5H11l-1.2 1 .4 1.5-1.2-.9-1.2.9.4-1.5-1.2-1h1.5zM11.8 13l1.2-.9 1.2.9-.5-1.5 1.2-1h-1.5L13 9l-.5 1.5h-1.4l1.2.9-.5 1.6M3.8 25l1.2-.9 1.2.9-.5-1.5 1.2-1H5.5L5 21l-.5 1.5h-1c0 .1-.1.2-.1.3l.8.6-.4 1.6"></path>
                    </g>
                  </svg>
                  <p style={{ paddingBottom: "25px", cursor: "pointer" }}>
                    English
                  </p>
                </div>
                {/* en */}

                <div className="fr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    enableBackground="new 0 0 473.684 473.684"
                    version="1.1"
                    viewBox="0 0 473.684 473.684"
                    xmlSpace="preserve"
                  >
                    <path
                      fill="#E61E25"
                      d="M315.802 13.535l-27.639 76.632c25.512 84.193 25.512 209.156 0 293.353l27.639 76.624c91.975-32.523 157.882-120.195 157.882-223.31 0-103.099-65.907-190.775-157.882-223.299z"
                    ></path>
                    <g fill="#E4E4E4">
                      <path d="M315.802 90.167V13.535C291.102 4.8 264.536.002 236.84.002c36.521 0-14.117 123.773 78.962 90.165zM236.84 473.682c27.695 0 54.262-4.798 78.962-13.534v-76.624c-92.144-9.196-78.962 90.158-78.962 90.158z"></path>
                    </g>
                    <path
                      fill="#3757A6"
                      d="M0 236.837C0 340.297 66.355 428.2 158.806 460.461V13.229C66.355 45.49 0 133.393 0 236.837z"
                    ></path>
                    <path
                      fill="#EF4F4E"
                      d="M315.802 90.167V383.52c25.515-84.197 25.515-209.161 0-293.353z"
                    ></path>
                    <path
                      fill="#F3F4F5"
                      d="M315.802 383.523V90.167C299.677 36.938 273.361.002 236.84.002a236.342 236.342 0 00-78.034 13.227v447.234a236.338 236.338 0 0078.034 13.22c36.521-.001 62.837-36.937 78.962-90.16z"
                    ></path>
                  </svg>
                  <p style={{ paddingBottom: "25px", cursor: "pointer" }}>
                    Français
                  </p>
                </div>
                {/* fr */}

                <div className="br">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <circle cx="256" cy="256" r="256" fill="#00C85F"></circle>
                    <path
                      fill="#FFF046"
                      d="M246.207 103.892L28.673 248.915c-5.241 3.495-5.241 11.196 0 14.69l217.534 145.022a17.653 17.653 0 0019.586 0l217.534-145.022c5.241-3.495 5.241-11.196 0-14.69L265.793 103.892a17.653 17.653 0 00-19.586 0z"
                    ></path>
                    <circle
                      cx="256"
                      cy="256"
                      r="105.931"
                      fill="#4B82E1"
                    ></circle>
                    <path
                      fill="#FFF"
                      d="M165.515 201.127a105.399 105.399 0 00-8.758 18.111c49.205-3.345 128.166 5.419 197.503 76.211a105.005 105.005 0 005.692-19.229c-67.857-65.077-143.214-76.763-194.437-75.093z"
                    ></path>
                  </svg>

                  <p style={{ paddingBottom: "25px", cursor: "pointer" }}>
                    Portuguais
                  </p>
                </div>
                {/* pt */}

                <div className="es">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <path
                      fill="#FFDA44"
                      d="M0 256c0 31.314 5.633 61.31 15.923 89.043L256 367.304l240.077-22.261C506.367 317.31 512 287.314 512 256s-5.633-61.31-15.923-89.043L256 144.696 15.923 166.957C5.633 194.69 0 224.686 0 256z"
                    ></path>
                    <g fill="#D80027">
                      <path d="M496.077 166.957C459.906 69.473 366.071 0 256 0S52.094 69.473 15.923 166.957h480.154zM15.923 345.043C52.094 442.527 145.929 512 256 512s203.906-69.473 240.077-166.957H15.923z"></path>
                    </g>
                  </svg>
                  <p style={{ paddingBottom: "20px", cursor: "pointer" }}>
                    Spanish
                  </p>
                </div>
                {/* es */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-translate-opacity */}
        </>
      )}
    </>
  );
}
