import BackAndSearch from "../Back/BackandSearch";
import imageProfilApp from "../img/omisify-red.jpg";
import AboutApp from "./AboutApp";
import BlockImage from "./ProfilApp/BlockImage";
import ProfilAppNavbarDownloadBtn from "./ProfilAppNavbarDownloadBtn";
import ShortDescriptionApp from "./ShortDescriptionApp";
import StoreApp from "./StoreApp/StoreApp";

export default function ProfilApp() {
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

      <div>
        <StoreApp />
      </div>

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

      <BlockImage />

      <AboutApp />
    </>
  );
}
