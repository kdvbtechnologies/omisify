import { NavLink } from "react-router-dom";
import omisifyicon from "../../../img/omisify-icon.jpg";
import lemondeicon from "../../../img/lemonde-icon.png";
import lydiaicon from "../../../img/lydia-icon.png";
import snapicon from "../../../img/snap-icon.png";

const api = [
  {
    imageapp: `${omisifyicon}`,
    nameofapp: "Omisify",
    numberinthechart: "1",
    categorieoftheapp: "Productivité",
  },

  {
    imageapp: `${lemondeicon}`,
    nameofapp: "Le Monde",
    categorieoftheapp: "Actualités",
  },

  {
    imageapp: `${lydiaicon}`,
    nameofapp: "Lydia - La Super App pour gérer votre argent",
    categorieoftheapp: "Finances et Economie",
  },

  {
    imageapp: `${snapicon}`,
    nameofapp: "SnapChat",
    numberinthechart: "5",
    categorieoftheapp: "Réseaux sociaux",
  },
  {
    imageapp: `${omisifyicon}`,
    nameofapp: "Omisify",
    numberinthechart: "1",
    categorieoftheapp: "Productivité",
  },

  {
    imageapp: `${lemondeicon}`,
    nameofapp: "Le Monde",
    categorieoftheapp: "Actualités",
  },

  {
    imageapp: `${lydiaicon}`,
    nameofapp: "Lydia - La Super App pour gérer votre argent",
    categorieoftheapp: "Finances et Economie",
  },

  {
    imageapp: `${snapicon}`,
    nameofapp: "SnapChat",
    numberinthechart: "5",
    categorieoftheapp: "Réseaux sociaux",
  },
];

export default function MoreApp() {
  return (
    <>
      <div className="more-app">
        <div className="a">
          <p>
            Les personnes qui ont installées l'application Web Omisify ont aussi
            installées ces applications
          </p>
        </div>

        <div className="flex">
          {api.map((api) => (
            <>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/"
              >
                <div className="app">
                  <img src={api.imageapp} alt="" />
                  <div className="nameofapp">
                    <p>{api.nameofapp}</p>
                  </div>
                  <p style={{ fontWeight: "bold", padding: "1px 0px" }}>
                    {api.authorapp}
                  </p>

                  <div className="stars">
                    {!api.numberinthechart && (
                      <>
                        <p>4.5</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          width="20px"
                          fill="#fcff07"
                          enableBackground="new 0 0 55.867 55.867"
                          version="1.1"
                          viewBox="0 0 55.867 55.867"
                          xmlSpace="preserve"
                        >
                          <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                        </svg>
                      </>
                    )}
                  </div>
                  {/* stars */}

                  <div className="chart">
                    {api.numberinthechart && (
                      <>
                        <p
                          style={{
                            background: "#00cc00",
                            padding: "5px",
                            width: "25px",
                            color: "white",
                          }}
                        >
                          N°{api.numberinthechart}
                        </p>

                        <p> dans</p>

                        <NavLink style={{ color: "#444" }} to="/categorie">
                          <p>{api.categorieoftheapp}</p>
                        </NavLink>
                      </>
                    )}
                  </div>
                  {/* chart */}
                </div>
                {/* app */}
              </NavLink>
            </>
          ))}
        </div>
      </div>

      <NavLink to="/more-app">
        <div className="more-app-svg" align="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="30px"
            cursor="pointer"
            fill="blue"
            enableBackground="new 0 0 283.535 283.535"
            version="1.1"
            viewBox="0 0 283.535 283.535"
            xmlSpace="preserve"
          >
            <path d="M40.687 101.082C18.252 101.082 0 119.333 0 141.768s18.252 40.686 40.687 40.686 40.686-18.251 40.686-40.686-18.252-40.686-40.686-40.686zm0 63.371c-12.51 0-22.687-10.177-22.687-22.686s10.177-22.686 22.687-22.686c12.509 0 22.686 10.177 22.686 22.686s-10.178 22.686-22.686 22.686zM141.768 101.082c-22.435 0-40.686 18.251-40.686 40.686s18.251 40.686 40.686 40.686 40.686-18.251 40.686-40.686-18.252-40.686-40.686-40.686zm0 63.371c-12.509 0-22.686-10.177-22.686-22.686s10.177-22.686 22.686-22.686 22.686 10.177 22.686 22.686-10.178 22.686-22.686 22.686zM242.849 101.082c-22.435 0-40.686 18.251-40.686 40.686s18.251 40.686 40.686 40.686 40.687-18.251 40.687-40.686-18.253-40.686-40.687-40.686zm0 63.371c-12.509 0-22.686-10.177-22.686-22.686s10.177-22.686 22.686-22.686c12.51 0 22.687 10.177 22.687 22.686s-10.178 22.686-22.687 22.686z"></path>
          </svg>
        </div>
      </NavLink>
    </>
  );
}
