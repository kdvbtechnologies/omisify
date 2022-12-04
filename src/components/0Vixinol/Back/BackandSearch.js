import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ProfilAppPopupToRight from "../HomeUser/ProfilApp/ProfilAppPopupToRight";

export default function BackAndSearch() {
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  function PopupToRight() {
    setPopup(!popup);
  }

  return (
    <>
      <div className="back-and-search">
        <div className="justify">
          <div onClick={() => navigate(-1)} className="a">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
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

          <div className="b">
            <NavLink to="/search-app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="20px"
                cursor="pointer"
                enableBackground="new 0 0 487.95 487.95"
                version="1.1"
                viewBox="0 0 487.95 487.95"
                xmlSpace="preserve"
              >
                <path d="M481.8 453l-140-140.1c27.6-33.1 44.2-75.4 44.2-121.6C386 85.9 299.5.2 193.1.2S0 86 0 191.4s86.5 191.1 192.9 191.1c45.2 0 86.8-15.5 119.8-41.4l140.5 140.5c8.2 8.2 20.4 8.2 28.6 0 8.2-8.2 8.2-20.4 0-28.6zM41 191.4c0-82.8 68.2-150.1 151.9-150.1s151.9 67.3 151.9 150.1-68.2 150.1-151.9 150.1S41 274.1 41 191.4z"></path>
              </svg>
            </NavLink>

            <svg
              onClick={PopupToRight}
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
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
          <ProfilAppPopupToRight />
        </div>
      )}
    </>
  );
}
