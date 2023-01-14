import { NavLink } from "react-router-dom";

export default function MenuIcon() {
  return (
    <>
      <div className="popup-menu-icon-opacity">
        <div className="align">
          <div className="card">
            <div className="title">
              <p>Menu</p>
            </div>
            {/* title */}

            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/update"
            >
              <div className="display">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  enableBackground="new 0 0 512 512"
                  version="1.1"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g fill="black">
                    <path d="M256 0L114.759 194.207 211.862 194.207 211.862 300.138 300.138 300.138 300.138 194.207 397.241 194.207z"></path>
                    <path d="M282.483 335.448h-52.966c-9.71 0-17.655 7.945-17.655 17.655s7.945 17.655 17.655 17.655h52.966c9.71 0 17.655-7.945 17.655-17.655s-7.945-17.655-17.655-17.655M282.483 406.069h-52.966c-9.71 0-17.655 7.945-17.655 17.655s7.945 17.655 17.655 17.655h52.966c9.71 0 17.655-7.945 17.655-17.655s-7.945-17.655-17.655-17.655M282.483 476.69h-52.966c-9.71 0-17.655 7.945-17.655 17.655S219.807 512 229.517 512h52.966c9.71 0 17.655-7.945 17.655-17.655 0-9.711-7.945-17.655-17.655-17.655"></path>
                  </g>
                </svg>
                <p>Mise à jour</p>
              </div>
              {/* display */}
            </NavLink>

            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/generation-connected"
            >
              <div className="display">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  cursor="pointer"
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
              </div>
              {/* display */}
            </NavLink>

            {/*
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/get-money-gc"
            >
              <div className="display">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  fill="#000"
                  enableBackground="new 0 0 490.766 490.766"
                  version="1.1"
                  viewBox="0 0 490.766 490.766"
                  xmlSpace="preserve"
                >
                  <path d="M472.554 319.199c-9.4-.7-28.8 9.8-34.1 12.5-18.9 9.5-45.2 24.4-62.5 36.3-1.2.8-2.8 1.9-4 2.7-7.8 5-16 8.3-25.1 10.3-50.2 10.7-123.3 11.8-123.3 11.8l-4.3.2c-3.2.2-6.1-2.1-6.5-5.2-.5-3.4 2-6.6 5.6-6.9l108.7-10.3c12-1.3 21.5-12.5 20.2-25.1s-12.9-21.8-24.9-20.5l-96.7-1.2c-6.6-.1-17.1-1.7-23.4-3.6-62.3-18.2-97.5-1.2-116.2 6.8-4.2-6.9-12.1-11.4-20.9-10.8l-41.7 2.8c-13.9.9-24.3 12.5-23.4 25.9l6.7 92.6c1 13.4 13 23.5 26.9 22.5l41.7-2.8c8.8-.6 16-6 19.1-13.4l183.2 7.9c20.4 2.2 39.5-.3 57.5-9.7l5.2-2.7 138.5-81c6.8-4 11.6-10.9 11.9-18.5.3-9.3-5-19.6-18.2-20.6zm-423.6 118.9c-7.8 0-14.2-6.1-14.2-13.7s6.4-13.7 14.2-13.7 14.2 6.1 14.2 13.7-6.4 13.7-14.2 13.7zm320.6-87c.2-2.5.2-5.1-.1-7.7-.3-3.3-1.1-6.4-2.1-9.4.1-.2.2-.4.2-.6 14.6-8 43.2-21.8 58.8-27.9 7.8-3.1 15.5-2.9 22.6 1.9-5.6 2-10.8 4.5-15.7 6.9-16.4 8.2-45.3 23.9-59.4 33.8-1.4 1-2.9 2-4.3 3zm41.8-54.9c-11.3 5-33 12.6-43.3 18.3l-7 3.8c-.7.4-1.3.8-1.9 1.3-3.1-3.7-6.8-6.8-10.9-9.3 9.6-5.1 31-12 40.7-15.8 7.8-3.1 15.3-2.9 22.4 1.7zm-155.3-231.6c-29.7 0-53.7 24.1-53.7 53.7s24.1 53.7 53.7 53.7c29.7 0 53.7-24.1 53.7-53.7s-24-53.7-53.7-53.7zm15.4 74.9c-2.3 2.8-5.4 4.8-9 5.7-1.6.4-2.2 1.2-2.2 2.9.1 1.6 0 3.2 0 4.8 0 1.4-.7 2.2-2.1 2.2h-5.1c-1.5 0-2.2-.9-2.2-2.3v-3.5c0-2.6-.1-2.7-2.6-3.1-3.1-.5-6.2-1.2-9.1-2.6-2.3-1.1-2.5-1.7-1.8-4 .5-1.8 1-3.5 1.5-5.3.6-2 1.2-2.3 3-1.3 3.2 1.7 6.6 2.6 10.1 3 2.3.3 4.5.1 6.6-.9 3.9-1.7 4.6-6.3 1.2-9.1-1.1-.9-2.4-1.6-3.8-2.2-3.5-1.5-7.1-2.7-10.3-4.6-5.3-3.2-8.7-7.5-8.3-14 .4-7.3 4.6-11.9 11.3-14.3 2.8-1 2.8-1 2.8-3.9v-2.9c.1-2.2.4-2.5 2.6-2.6h2c4.6 0 4.6 0 4.6 4.6 0 3.3 0 3.3 3.3 3.8 2.5.4 4.9 1.1 7.2 2.1 1.3.6 1.8 1.4 1.4 2.8-.6 2-1.1 4-1.8 6-.6 1.9-1.2 2.1-3 1.3-3.6-1.7-7.4-2.5-11.4-2.3-1 .1-2.1.2-3 .6-3.4 1.5-4 5.3-1.1 7.6 1.5 1.2 3.2 2 4.9 2.8 3 1.3 6.1 2.5 9 4.1 9.4 5.2 11.8 16.7 5.3 24.6zm77.7-21.2c0 8.2-6.7 14.9-14.9 14.9s-14.9-6.7-14.9-14.9 6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9zm-156.3 0c0 8.2-6.7 14.9-14.9 14.9s-14.9-6.7-14.9-14.9 6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9zm180.2-87.6h-234c-13.5 0-24.5 11-24.5 24.5v126.2c0 13.5 11 24.5 24.5 24.5h234c13.5 0 24.5-11 24.5-24.5v-126.2c0-13.5-11-24.5-24.5-24.5zm3.6 127.2c-2-.5-4-.8-6.1-.8-13.7 0-24.8 11.1-24.8 24.8 0 1 .1 2.1.2 3.1h-181.7c.3-1.5.4-3 .4-4.6 0-13.7-11.1-24.8-24.8-24.8-1.5 0-2.9.1-4.4.4v-75.4c1.4.3 2.9.4 4.4.4 13.7 0 24.8-11.1 24.8-24.8 0-1.6-.1-3.1-.4-4.6h182.2c-.5 1.9-.8 4-.8 6.1 0 13.7 11.1 24.8 24.8 24.8 2.1 0 4.2-.3 6.1-.8v76.2h.1zm-261.7 75.1c0-5.8 4.7-10.5 10.5-10.5h261.7c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5h-261.8c-5.7 0-10.4-4.7-10.4-10.5zm0 38c0-5.8 4.7-10.5 10.5-10.5h261.7c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5h-261.8c-5.7 0-10.4-4.7-10.4-10.5z"></path>
                </svg>
                <p>Rémunération</p>
              </div>
              display 
            </NavLink>
              */}

            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/settings-new-omisify"
            >
              <div className="display">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  enableBackground="new 0 0 478.703 478.703"
                  version="1.1"
                  viewBox="0 0 478.703 478.703"
                  xmlSpace="preserve"
                >
                  <path d="M454.2 189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7-6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2a29.54 29.54 0 00-29.2-24.7h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5-7.9 0-15.4 3.1-20.9 8.7l-29.9 29.8c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6a29.54 29.54 0 00-24.7 29.2v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13l5.6 33.6a29.54 29.54 0 0029.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5 7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6a29.54 29.54 0 0024.7-29.2v-42.1c.2-14.5-10.2-26.8-24.5-29.2zm-2.3 71.3c0 1.3-.9 2.4-2.2 2.6l-42 7c-5.3.9-9.5 4.8-10.8 9.9-3.8 14.7-9.6 28.8-17.4 41.9-2.7 4.6-2.5 10.3.6 14.7l24.7 34.8c.7 1 .6 2.5-.3 3.4l-29.8 29.8c-.7.7-1.4.8-1.9.8-.6 0-1.1-.2-1.5-.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-.6-13.1 7.8-27.2 13.6-41.9 17.4-5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-.9-2.6-2.2l-7-42c-.9-5.3-4.8-9.5-9.9-10.8-14.3-3.7-28.1-9.4-41-16.8-2.1-1.2-4.5-1.8-6.8-1.8-2.7 0-5.5.8-7.8 2.5l-35 24.9c-.5.3-1 .5-1.5.5-.4 0-1.2-.1-1.9-.8l-29.8-29.8c-.9-.9-1-2.3-.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2.6-14.8-7.8-13-13.8-27.1-17.6-41.8-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-.2-2.2-1.3-2.2-2.6v-42.1c0-1.3.9-2.4 2.2-2.6l41.7-7c5.3-.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-.7-14.6l-24.9-35c-.7-1-.6-2.5.3-3.4l29.8-29.8c.7-.7 1.4-.8 1.9-.8.6 0 1.1.2 1.5.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4.9 2.6 2.2l7 41.7c.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-.6l34.5-24.8c.5-.3 1-.5 1.5-.5.4 0 1.2.1 1.9.8l29.8 29.8c.9.9 1 2.3.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3.2 2.2 1.3 2.2 2.6v42.1h-.1z"></path>
                  <path d="M239.4 136.001c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3-46.3-103.3-103.3-103.3zm0 179.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3-34.2 76.3-76.3 76.3z"></path>
                </svg>
                <p>Paramètres</p>
              </div>
              {/* display */}
            </NavLink>

            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/logout"
            >
              <div className="display">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="20px"
                  cursor="pointer"
                  version="1.1"
                  viewBox="0 0 64 64"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M52.45 28.768l-5-5a.968.968 0 00-1.367 1.368l3.317 3.316H35.267v2h14.132l-3.316 3.317a.966.966 0 101.367 1.367l5-5.001a.967.967 0 000-1.367z"></path>
                    <path d="M40.267 39.452a1 1 0 00-1 1v10.79c0 1.043-.831 2.21-1.944 2.21h-6.056V9.868l-1.248-.534-15.942-6.77-.261-.112h23.507c1.217 0 1.944.993 1.944 1.952v15.048a1 1 0 102 0V4.404A3.951 3.951 0 0037.323.452H12.267a.99.99 0 00-.983.913l-.017-.008v53.677l17.185 7.306 2.815 1.208v-8.096h6.056c2.359 0 3.944-2.176 3.944-4.21v-10.79a1 1 0 00-1-1zm-11-28.213v49.213l-16-6.776V4.452l15.99 6.773.01.004v.01z"></path>
                  </g>
                </svg>
                <p>Déconnexion</p>
              </div>
              {/* display */}
            </NavLink>
          </div>
          {/* card */}
        </div>
        {/* align */}
      </div>
      {/* popup-menu-icon-opacity */}
    </>
  );
}
