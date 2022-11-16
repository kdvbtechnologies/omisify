import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavbarAl() {
  const [mobile, setMobile] = useState(false);

  function menuMobile() {
    setMobile(!mobile);
  }

  const [isActiveHome, setIsActiveHome] = useState(true);
  const [isActiveService, setIsActiveService] = useState(false);
  const [isActivePrice, setIsActivePrice] = useState(false);
  const [isActiveProfil, setIsActiveProfil] = useState(false);

  function ActiveHome() {
    if (!isActiveHome) {
      setIsActiveHome(true);
      setIsActiveService(false);
      setIsActivePrice(false);
      setIsActiveProfil(false);
    }
  }

  function ActiveService() {
    if (!isActiveService) {
      setIsActiveHome(false);
      setIsActiveService(true);
      setIsActivePrice(false);
      setIsActiveProfil(false);
    }
  }

  function ActivePrice() {
    if (!isActivePrice) {
      setIsActiveHome(false);
      setIsActiveService(false);
      setIsActivePrice(true);
      setIsActiveProfil(false);
    }
  }

  function ActiveProfil() {
    if (!isActiveProfil) {
      setIsActiveHome(false);
      setIsActiveService(false);
      setIsActivePrice(false);
      setIsActiveProfil(true);
    }
  }

  return (
    <>
      <div className="navbar-alr">
        <div className="pc">
          <div className="mobile">
            <div className="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="logo"
                viewBox="0 0 512 512"
              >
                <path d="M330.7 352l77.72-192H356.9l-53.16 124.07L265.93 160h-39.61l-40.58 124.07-28.63-56.53-25.9 79.46 26.3 45h50.7l36.68-111.27 35 111.27zM48.79 286.09h31.65a93.39 93.39 0 0025.62-3.21l8.18-25.19 22.88-70.39a55.75 55.75 0 00-6-7.82Q113.54 160 79.59 160H0v192h48.79zm41.9-81.92q6.89 6.92 6.88 18.52t-6 18.53q-6.64 7.62-24.44 7.61H48.79v-51.58h18.42q16.59 0 23.48 6.92zm286.16 113.44l14.79-37.25h42.69l-20.26-56.51L439.41 160 512 352h-53.53l-12.4-34.39z"></path>
              </svg>
            </div>

            <div className="menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                className="svg-menu"
                onClick={menuMobile}
                enableBackground="new 0 0 377 377"
                version="1.1"
                viewBox="0 0 377 377"
                xmlSpace="preserve"
              >
                <circle cx="15" cy="88.5" r="15"></circle>
                <path d="M75 73.5H377V103.5H75z"></path>
                <circle cx="15" cy="288.5" r="15"></circle>
                <path d="M75 273.5H377V303.5H75z"></path>
                <circle cx="15" cy="188.5" r="15"></circle>
                <path d="M75 173.5H377V203.5H75z"></path>
              </svg>
            </div>
          </div>

          <div className="links">
            <NavLink className="navlink" to="/home-al">
              <li
                onClick={ActiveHome}
                className={
                  isActiveHome ? "active-class-al" : "no-active-class-al"
                }
              >
                Accueil
              </li>
            </NavLink>

            <NavLink className="navlink" to="">
              <li
                onClick={ActiveService}
                className={
                  isActiveService ? "active-class-al" : "no-active-class-al"
                }
              >
                Service
              </li>
            </NavLink>

            <NavLink className="navlink" to="">
              <li
                onClick={ActivePrice}
                className={
                  isActivePrice ? "active-class-al" : "no-active-class-al"
                }
              >
                Tarifs
              </li>
            </NavLink>

            <NavLink className="navlink" to="/profil-al">
              <li
                onClick={ActiveProfil}
                className={
                  isActiveProfil ? "active-class-al" : "no-active-class-al"
                }
              >
                Profil
              </li>
            </NavLink>
          </div>

          {mobile && (
            <>
              <div className="links-mobile">
                <NavLink className="navlink" to="/home-al">
                  <li
                    onClick={ActiveHome}
                    className={
                      isActiveHome ? "active-class-al" : "no-active-class-al"
                    }
                  >
                    Accueil
                  </li>
                </NavLink>

                <NavLink className="navlink" to="">
                  <li
                    onClick={ActiveService}
                    className={
                      isActiveService ? "active-class-al" : "no-active-class-al"
                    }
                  >
                    Service
                  </li>
                </NavLink>

                <NavLink className="navlink" to="">
                  <li
                    onClick={ActivePrice}
                    className={
                      isActivePrice ? "active-class-al" : "no-active-class-al"
                    }
                  >
                    Tarifs
                  </li>
                </NavLink>

                <NavLink className="navlink" to="/profil-al">
                  <li
                    onClick={ActiveProfil}
                    className={
                      isActiveProfil ? "active-class-al" : "no-active-class-al"
                    }
                  >
                    Profil
                  </li>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
