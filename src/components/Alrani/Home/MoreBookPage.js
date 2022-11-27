import { NavLink, useNavigate } from "react-router-dom";
import Back from "../Back/Back";
import book2 from "../img/book2.jpg";
import book3 from "../img/book3.jpg";
import book4 from "../img/book4.jpg";
import book5 from "../img/book5.jpg";

export default function MoreBookPage() {
  const navigate = useNavigate();

  const api = [
    {
      imagebook: `${book2}`,
      nameofbook: "L'autoroute du Millionnaire",
      authorbook: "MJ Demarco",
      numberinthechart: "1",
      categorieofthebook: "Investir et Entreprendre",
    },

    {
      imagebook: `${book3}`,
      nameofbook: "Tout le monde n'a pas eu la chance de rater ses études",
      authorbook: "Olivier Roland",
      categorieofthebook: "Satisfaction Professionnelle",
    },

    {
      imagebook: `${book4}`,
      nameofbook: "Le Principe de Pareto",
      authorbook: "Luca CANNIZARO",
      categorieofthebook: "Finances et Economie",
    },

    {
      imagebook: `${book5}`,
      nameofbook: "Réfléchissez et devenez Riche",
      authorbook: "Napoleon Hill",
      numberinthechart: "5",
      categorieofthebook: "Investir et Entreprendre",
    },
  ];

  return (
    <>
      <div
        onClick={() => navigate(-1)}
        style={{ background: "#eee", position: "fixed", width: "100%" }}
      >
        <Back />
      </div>

      <div className="more-book">
        <div className="a">
          <p style={{ paddingTop: "50px" }}>
            Les personnes qui ont consultées La Semaine de 4 heures de Tim
            Feriss ont également consultées L'autoroute du Millionaire de MJ
            Demarco et plusieurs autres ouvrages
          </p>
        </div>

        <div className="flex">
          {api.map((api) => (
            <>
              <NavLink
                style={{ color: "black", textDecoration: "none" }}
                to="/"
              >
                <div className="book">
                  <img src={api.imagebook} alt="" />
                  <div className="nameofbook">
                    <p>{api.nameofbook}</p>
                  </div>
                  <p style={{ fontWeight: "bold", padding: "1px 0px" }}>
                    {api.authorbook}
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
                          <p>{api.categorieofthebook}</p>
                        </NavLink>
                      </>
                    )}
                  </div>
                  {/* chart */}
                </div>
                {/* book */}
              </NavLink>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
