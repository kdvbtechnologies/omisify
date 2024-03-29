import { NavLink } from "react-router-dom";
import BackbtnUserNotConnected from "../Back/BackbtnUserNotConnected";
import NavbarBottomProfilVI from "../Navigation/NavbarBottomProfil";

export default function ProfilUserNotConnectedVI() {
  return (
    <>
      <BackbtnUserNotConnected />

      <div className="profil-user-not-connected">
        <div className="display">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 402.161 402.161"
            version="1.1"
            viewBox="0 0 402.161 402.161"
            xmlSpace="preserve"
          >
            <path d="M201.08 49.778c-38.794 0-70.355 31.561-70.355 70.355 0 18.828 7.425 40.193 19.862 57.151 14.067 19.181 32 29.745 50.493 29.745 18.494 0 36.426-10.563 50.494-29.745 12.437-16.958 19.862-38.323 19.862-57.151 0-38.794-31.562-70.355-70.356-70.355zm0 142.251c-13.396 0-27.391-8.607-38.397-23.616-10.46-14.262-16.958-32.762-16.958-48.28 0-30.523 24.832-55.355 55.355-55.355s55.355 24.832 55.355 55.355c.001 31.691-26.063 71.896-55.355 71.896z"></path>
            <path d="M201.08 0C109.387 0 34.788 74.598 34.788 166.292c0 91.693 74.598 166.292 166.292 166.292s166.292-74.598 166.292-166.292S292.773 0 201.08 0zm0 317.584c-30.099-.001-58.171-8.839-81.763-24.052.82-22.969 11.218-44.503 28.824-59.454 6.996-5.941 17.212-6.59 25.422-1.615 8.868 5.374 18.127 8.099 27.52 8.099 9.391 0 18.647-2.724 27.511-8.095 8.201-4.97 18.39-4.345 25.353 1.555a81.795 81.795 0 0128.895 59.512c-23.592 15.212-51.664 24.05-81.762 24.05zm95.901-34.366a96.8 96.8 0 00-33.337-60.64c-11.89-10.074-29.1-11.256-42.824-2.939-12.974 7.861-26.506 7.86-39.483-.004-13.74-8.327-30.981-7.116-42.906 3.01-18.31 15.549-30.035 37.115-33.265 60.563-33.789-27.77-55.378-69.868-55.378-116.915C49.788 82.869 117.658 15 201.08 15c83.423 0 151.292 67.869 151.292 151.292 0 47.053-21.594 89.156-55.391 116.926zM302.806 352.372H99.354a7.5 7.5 0 000 15h203.452a7.5 7.5 0 000-15zM302.806 387.161H99.354a7.5 7.5 0 000 15h203.452a7.5 7.5 0 000-15z"></path>
          </svg>

          <div className="block">
            <p
              style={{
                paddingRight: "5px",
              }}
            >
              Inscrivez-vous gratuitement
            </p>

            <p
              style={{
                paddingRight: "5px",
              }}
            >
              pour accéder à
            </p>

            <p
              style={{
                color: "#fd7e14",
                paddingRight: "5px",
              }}
            >
              votre historique d'installations,
            </p>

            <p
              style={{
                paddingRight: "5px",
              }}
            >
              pour
            </p>

            <p
              style={{
                paddingRight: "5px",
              }}
            >
              ajouter des applications à
            </p>

            <p
              style={{
                color: "#fd7e14",
                paddingRight: "5px",
              }}
            >
              votre liste de favoris,
            </p>

            <p
              style={{
                paddingRight: "5px",
              }}
            >
              pour donner
            </p>

            <p
              style={{
                color: "#fd7e14",
                paddingRight: "5px",
              }}
            >
              votre avis sur une application
            </p>

            <p>et bien plus encore...</p>
          </div>
          {/* block */}
        </div>
        {/* display */}

        <div className="profil-user-not-connected-display-btn">
          <div className="a">
            <NavLink to="/">
              <button>S'inscrire gratuitement</button>
            </NavLink>
          </div>

          <div className="b">
            <NavLink to="/">
              <button>Se connecter</button>
            </NavLink>
          </div>
        </div>
        {/* profil-user-not-connected-display-btn */}
      </div>
      {/* profil-user-not-connected */}

      <p style={{ marginBottom: "110px" }}></p>

      <NavbarBottomProfilVI />
    </>
  );
}
