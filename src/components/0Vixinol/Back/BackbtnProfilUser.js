import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThePopupToRight from "../ProfilUser/PopupToRight";

export default function BackbtnProfilUser() {
  const [popup, setPopup] = useState(false);

  function PopupToRight() {
    setPopup(!popup);
  }

  return (
    <>
      <div className="back-btn-profil-user">
        <div className="justify">
          <div></div>

          <div className="b">
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
    </>
  );
}
