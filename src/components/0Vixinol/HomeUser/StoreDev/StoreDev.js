import BackBtnAndGoToInfosOfDevBtn from "./BackBtnAndGoToInfosOfDevBtn";
import iconOfApp from "../../img/omisify-red.jpg";
import { NavLink } from "react-router-dom";

export default function StoreDev() {
  const nameOfDev = localStorage.getItem("https://vixinol.com/nameOfDev");
  const nameOfDevtest = "Omisify";

  const api = [
    {
      nameOfDev: "Omisify",
      nameOfApp: "Lydia - La Super App pour gérer votre argent",
      iconOfApp: `${iconOfApp}`,
      altOfIconOfApp: "icone de l'application Lydia",
    },

    {
      nameOfDev: "Omisify",
      nameOfApp: "Omisify",
      iconOfApp: `${iconOfApp}`,
      altOfIconOfApp: "icone de l'application Lydia",
    },

    {
      nameOfDev: "Omisify",
      nameOfApp: "Omisify",
      iconOfApp: `${iconOfApp}`,
      altOfIconOfApp: "icone de l'application Lydia",
    },
  ];

  return (
    <>
      <BackBtnAndGoToInfosOfDevBtn />

      <div className="store-dev">
        <div className="title">
          <p>
            Application Développer par {nameOfDevtest}
            {nameOfDev}
          </p>
        </div>
      </div>

      <div className="align-icon-of-app">
        <div className="display-icon-of-app">
          {api.map((api) => (
            <div className="icon-of-app">
              <NavLink style={{ textDecoration: "none" }} to="/profil-app">
                <img src={api.iconOfApp} alt={api.altOfIconOfApp} />
                <p>{api.nameOfApp}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
