import BackbtnfavoriteApp from "../../Back/BackbtnfavoriteApp";
import omisifyred from "../../img/omisify-red.jpg";
import { NavLink } from "react-router-dom";

export default function FavoriteVI() {
  const api = [
    {
      rang: 1,
      imageIconApp: `${omisifyred}`,
      nameOfApp: "Omisify",
      noteOfApp: "4.6",
    },

    {
      rang: 2,
      imageIconApp: `${omisifyred}`,
      nameOfApp: "Alrani",
      noteOfApp: "4.3",
    },

    {
      rang: 3,
      imageIconApp: `${omisifyred}`,
      nameOfApp: "Lydia - Une Super App pour gérer votre argent",
      noteOfApp: "4.1",
    },

    {
      rang: 4,
      imageIconApp: `${omisifyred}`,
      nameOfApp: "Jamelfase",
      noteOfApp: "3.5",
    },
  ];

  return (
    <>
      <div className="favorite-app-title">
        <div className="a">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="25px"
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
          <p>Favoris</p>
        </div>
      </div>

      <BackbtnfavoriteApp />

      <div className="favorite-app-popularity">
        <p>
          Vous avez ajouter 7 Applications et 2 Boutiques d'applications à vos
          Favoris
        </p>
      </div>

      <div className="favorite-app">
        {api.map((api) => (
          <>
            <NavLink style={{ textDecoration: "none" }} to="/profil-app">
              <div className="a">
                <p>{api.rang}</p>
                <img src={api.imageIconApp} alt="imagee icon app" />

                <div className="column">
                  <p>{api.nameOfApp}</p>
                  <div className="note">
                    <p>{api.noteOfApp}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="15px"
                      cursor="pointer"
                      fill="blue"
                      enableBackground="new 0 0 329.942 329.942"
                      version="1.1"
                      viewBox="0 0 329.942 329.942"
                      xmlSpace="preserve"
                    >
                      <path d="M329.208 126.666a14.999 14.999 0 00-12.109-10.209l-95.822-13.922-42.854-86.837a15.001 15.001 0 00-26.902 0l-42.851 86.836-95.825 13.922a15 15 0 00-8.313 25.586l69.339 67.582-16.375 95.446a15 15 0 0021.764 15.813l85.711-45.059 85.71 45.059a15.191 15.191 0 007.021 1.723c8.275-.012 14.979-6.723 14.979-15 0-1.152-.13-2.275-.376-3.352l-16.233-94.629 69.339-67.583a14.997 14.997 0 003.797-15.376z"></path>
                    </svg>
                  </div>
                  {/* note */}
                </div>
                {/* b */}
              </div>
            </NavLink>
          </>
        ))}
      </div>

      <p style={{ marginBottom: "150px" }}></p>
    </>
  );
}
