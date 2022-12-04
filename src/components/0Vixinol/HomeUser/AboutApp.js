import { NavLink } from "react-router-dom";

export default function AboutApp() {
  return (
    <>
      <NavLink style={{ textDecoration: "none" }} to="/">
        <div className="about-app">
          <div className="title">
            <p>A Propos de l'application</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="17px"
              cursor="pointer"
              enableBackground="new 0 0 486.963 486.963"
              version="1.1"
              viewBox="0 0 486.963 486.963"
              xmlSpace="preserve"
            >
              <path d="M483 233.869l-139-139c-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1l116 116H13.5c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h427.4l-116 116c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l139-139c5.4-5.4 5.4-14 .1-19.2z"></path>
            </svg>
          </div>
        </div>
        {/* about-app */}

        <div className="after-about-app">
          <p>
            Avec l'application Omisify vous pourrez accéder directement à votre
            compte Omisify. Installer l'application Omisify pour commencer à
            travailler avec Omisify. Calculer automatiquement les résultats de
            votre travail et bénéficier de tout les Bonus offerts aux
            Partenaires Omisify
          </p>
        </div>
        {/* after-about-app */}
      </NavLink>
    </>
  );
}
