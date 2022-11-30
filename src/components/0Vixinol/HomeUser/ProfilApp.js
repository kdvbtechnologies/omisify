import { useState } from "react";
import BackAndSearch from "../Back/BackandSearch";
import imageProfilApp from "../img/omisify-red.jpg";
//import AboutApp from "./AboutApp";
import BlockImageMobile from "./ProfilApp/BlockImageMobile";
import BlockImageComputer from "./ProfilApp/BlockImageComputer";
import BlockImageTablet from "./ProfilApp/BlockImageTablet";
import ProfilAppNavbarDownloadBtn from "./ProfilAppNavbarDownloadBtn";
import ShortDescriptionApp from "./ShortDescriptionApp";
import ButtonGoToStoreDev from "./StoreDev/ButtonGoToStoreDev";
import NavbarBottomVI from "../Navigation/NavbarBottom";

export default function ProfilApp() {
  const [activeMobile, setActiveMobile] = useState(true);
  const [activeTablet, setActiveTablet] = useState(false);
  const [activeComputer, setActiveComputer] = useState(false);

  function ActiveMobile() {
    setActiveMobile(true);
    setActiveTablet(false);
    setActiveComputer(false);
  }

  function ActiveTablet() {
    setActiveMobile(false);
    setActiveTablet(true);
    setActiveComputer(false);
  }

  function ActiveComputer() {
    setActiveMobile(false);
    setActiveTablet(false);
    setActiveComputer(true);
  }

  // Lydia - La Super App pour gérer votre argent

  return (
    <>
      <ProfilAppNavbarDownloadBtn />
      <BackAndSearch />
      <div className="display-image-and-name-of-app">
        <div className="image-profil-app">
          <img src={imageProfilApp} alt="image Profil App" />
        </div>

        <div className="name-of-app">
          <p>Omisify</p>
        </div>
      </div>

      <ButtonGoToStoreDev />

      <div className="profil-app">
        <div className="app">
          <div className="icon">
            <div className="a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 329.942 329.942"
                version="1.1"
                viewBox="0 0 329.942 329.942"
                xmlSpace="preserve"
              >
                <path d="M329.208 126.666a14.999 14.999 0 00-12.109-10.209l-95.822-13.922-42.854-86.837a15.001 15.001 0 00-26.902 0l-42.851 86.836-95.825 13.922a15 15 0 00-8.313 25.586l69.339 67.582-16.375 95.446a15 15 0 0021.764 15.813l85.711-45.059 85.71 45.059a15.191 15.191 0 007.021 1.723c8.275-.012 14.979-6.723 14.979-15 0-1.152-.13-2.275-.376-3.352l-16.233-94.629 69.339-67.583a14.997 14.997 0 003.797-15.376z"></path>
              </svg>
              <p>4.3 étoiles</p>
            </div>

            <div className="a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 489.701 489.701"
                version="1.1"
                viewBox="0 0 489.701 489.701"
                xmlSpace="preserve"
              >
                <path d="M244.9 0c-9.5 0-17.1 7.7-17.1 17.2v312.3l-77.6-77.6c-6.7-6.7-17.6-6.7-24.3 0-6.7 6.7-6.7 17.6 0 24.3l106.9 106.9c3.2 3.2 7.6 5 12.1 5 4.6 0 8.9-1.8 12.1-5l106.9-107c6.7-6.7 6.7-17.6 0-24.3s-17.6-6.7-24.3 0L262 329.4V17.2c.1-9.5-7.6-17.2-17.1-17.2zM455.8 472.6c0-9.5-7.7-17.2-17.2-17.2H51.1c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.1 17.2 17.1h387.6c9.501.1 17.1-7.6 17.1-17.1z"></path>
              </svg>
              <p>1500 installations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="profil-app-download-btn">
        <button>Installer l'application</button>
      </div>

      <ShortDescriptionApp />

      {/* before-block-image-pc */}
      {/* before-block-image-pc */}
      {/* before-block-image-pc */}
      {/* before-block-image-pc */}
      {/* before-block-image-pc */}
      <div className="before-block-image-pc">
        <div className="icon">
          <div onClick={ActiveMobile} className="mobile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              fill={activeMobile && "#fd7e14"}
              cursor="pointer"
              viewBox="-11.25 0 70 70"
            >
              <path d="M2.902 69.714c-.937-.36-1.998-1.395-2.477-2.417l-.371-.792-.036-31.21C-.02.795-.084 3.316.851 2A4.704 4.704 0 013.095.261c.747-.279.886-.28 20.826-.245l20.074.036.93.458c1.085.534 1.837 1.381 2.282 2.57l.285.763-.035 31.334-.035 31.334-.451.916c-.542 1.1-1.401 1.907-2.451 2.3-.739.276-.964.28-20.821.272-19.806-.01-20.085-.011-20.797-.285zm25.714-4.678c.436-.198.751-.767.751-1.353 0-.309-.133-.566-.467-.899l-.466-.467h-4.415c-4.867 0-5.016.023-5.44.843-.302.584-.158 1.246.369 1.689l.417.351h4.446c3.154 0 4.55-.048 4.805-.164zm14.07-32.444V7.397H4.79V57.786h37.894V32.592zM32.793 4.626c.193-.207.28-.487.28-.9 0-.77-.416-1.215-1.252-1.337-.897-.13-16.351-.022-16.636.117-.663.323-.846 1.547-.31 2.083l.337.337H32.514l.28-.3z"></path>
            </svg>
            <p style={{ color: activeMobile && "#fd7e14", cursor: "pointer" }}>
              Mobile
            </p>
          </div>

          <div onClick={ActiveTablet} className="tablet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="20px"
              cursor="pointer"
              fill={activeTablet && "#fd7e14"}
              enableBackground="new 0 0 472.615 472.615"
              version="1.1"
              viewBox="0 0 472.615 472.615"
              xmlSpace="preserve"
            >
              <path d="M437.333 0H35.282C18.968 0 5.744 13.223 5.744 29.538v413.538c0 16.315 13.224 29.539 29.538 29.539h402.051c16.314 0 29.538-13.223 29.538-29.539V29.538C466.872 13.223 453.647 0 437.333 0zM236.308 441.464c-13.822 0-25.026-11.204-25.026-25.024 0-13.822 11.204-25.026 25.026-25.026 13.821 0 25.025 11.204 25.025 25.026 0 13.82-11.204 25.024-25.025 25.024zm181.337-82.461H54.972V49.229h362.673v309.774z"></path>
            </svg>
            <p style={{ color: activeTablet && "#fd7e14", cursor: "pointer" }}>
              Tablette
            </p>
          </div>

          <div onClick={ActiveComputer} className="computer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              cursor="pointer"
              fill={activeComputer && "#fd7e14"}
              x="0"
              y="0"
              enableBackground="new 0 0 26.498 26.498"
              version="1.1"
              viewBox="0 0 26.498 26.498"
              xmlSpace="preserve"
            >
              <path d="M26.394 22.189l-1.711-6.417V4.162A3.228 3.228 0 0021.458.937H5.041a3.228 3.228 0 00-3.225 3.225v11.611L.105 22.19c-.229.86-.078 1.722.415 2.362.493.642 1.286 1.01 2.176 1.01h21.107c.89 0 1.683-.368 2.176-1.01.492-.641.644-1.502.415-2.363zM5.041 2.695h16.417c.808 0 1.466.657 1.466 1.466v11.318H3.575V4.162c0-.808.656-1.467 1.466-1.467zm19.543 20.786c-.16.207-.438.322-.781.322H2.694c-.344 0-.622-.115-.781-.322-.159-.208-.199-.506-.11-.838l1.741-6.527.006-.05h19.397l.006.05 1.74 6.527c.09.333.05.63-.109.838z"></path>
              <path d="M5.041 14.618h16.417a.59.59 0 00.586-.586V4.21a.589.589 0 00-.586-.586H5.041a.588.588 0 00-.586.586v9.822c0 .322.263.586.586.586z"></path>
              <path d="M9.315 19.741L8.682 22.65 17.229 22.65 16.595 19.741z"></path>
            </svg>
            <p
              style={{ color: activeComputer && "#fd7e14", cursor: "pointer" }}
            >
              Ordinateur
            </p>
          </div>
          {/* computer */}
        </div>
        {/* icon */}
      </div>
      {/* before-block-image-pc */}

      {activeMobile && <BlockImageMobile />}
      {activeTablet && <BlockImageTablet />}
      {activeComputer && <BlockImageComputer />}

      {/* <AboutApp /> */}

      <NavbarBottomVI />
    </>
  );
}
