import omisifyred from "../../img/omisify-red.jpg";
import { NavLink } from "react-router-dom";

export default function SponsoredApp() {
  const api = [
    {
      largeImageSponsoredApp: `${omisifyred}`,
      altOfLargeImageSponsoredApp: "grande imagee application sponsorisé",
      shortImageSponsoredApp: `${omisifyred}`,
      altOfShortImageSponsoredApp: "courte imagee application sponsorisé",
      preuveSocialSponsoredApp:
        "135 personnes ont installé l'application Omisify",
      numberinthechart: "1",
      categorieoftheapp: "Productivité",
      nameOfApp: "Omisify",
    },

    {
      largeImageSponsoredApp: `${omisifyred}`,
      altOfLargeImageSponsoredApp: "grande imagee application sponsorisé",
      shortImageSponsoredApp: `${omisifyred}`,
      altOfShortImageSponsoredApp: "courte imagee application sponsorisé",
      preuveSocialSponsoredApp:
        "207 personnes ont installé l'application Lydia",
      nameOfApp: "Lydia - La Super App pour gérer votre argent",
    },

    {
      largeImageSponsoredApp: `${omisifyred}`,
      altOfLargeImageSponsoredApp: "grande imagee application sponsorisé",
      shortImageSponsoredApp: `${omisifyred}`,
      altOfShortImageSponsoredApp: "courte imagee application sponsorisé",
      preuveSocialSponsoredApp:
        "1310 personnes ont installé l'application Alrani",
      nameOfApp: "Alrani",
    },

    {
      largeImageSponsoredApp: `${omisifyred}`,
      altOfLargeImageSponsoredApp: "grande imagee application sponsorisé",
      shortImageSponsoredApp: `${omisifyred}`,
      altOfShortImageSponsoredApp: "courte imagee application sponsorisé",
      preuveSocialSponsoredApp:
        "360 personnes ont installé l'application inizel",
      nameOfApp: "inizel",
    },
  ];

  return (
    <>
      <div className="sponsored-app">
        <div className="title">
          <p>• Sponsorisé</p>
        </div>
        {/* title */}

        <div className="display-sponsored-app-api">
          {api.map((api) => (
            <>
              <div className="align">
                <div className="column">
                  <NavLink style={{ textDecoration: "none" }} to="/profil-app">
                    <div className="images">
                      <img
                        src={api.largeImageSponsoredApp}
                        alt={api.altOfLargeImageSponsoredApp}
                      />
                    </div>
                    {/* images */}

                    <div className="display">
                      <div className="short-image">
                        <img
                          src={api.shortImageSponsoredApp}
                          alt={api.altOfShortImageSponsoredApp}
                        />
                      </div>
                      {/* short-image */}

                      <div className="a">
                        <div className="nameOfApp">
                          <p>{api.nameOfApp}</p>
                        </div>
                        {/* nameOfApp */}

                        <div className="note">
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
                        </div>
                        {/* note */}
                      </div>
                      {/* a */}
                    </div>
                    {/* display */}

                    <div className="chart">
                      {api.numberinthechart && (
                        <>
                          <p
                            style={{
                              background: "#00cc00",
                              padding: "5px",
                              marginRight: "5px",
                              width: "25px",
                              color: "white",
                              fontSize: "15px",
                            }}
                          >
                            N°{api.numberinthechart}
                          </p>

                          <p
                            style={{
                              color: "#444",
                              paddingRight: "5px",
                              fontSize: "15px",
                            }}
                          >
                            dans
                          </p>

                          <NavLink
                            style={{
                              color: "#444",
                              marginRight: "5px",
                              fontSize: "15px",
                            }}
                            to="/categorie"
                          >
                            <p>{api.categorieoftheapp}</p>
                          </NavLink>
                        </>
                      )}
                    </div>
                    {/* chart */}

                    <div className="preuve-social">
                      <p>{api.preuveSocialSponsoredApp}</p>
                    </div>
                    {/* preuve-social */}
                  </NavLink>
                </div>
                {/* column */}
              </div>
              {/* align */}
            </>
          ))}

          <div className="see-more">
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                cursor="pointer"
                enableBackground="new 0 0 495 495"
                version="1.1"
                viewBox="0 0 495 495"
                xmlSpace="preserve"
              >
                <path
                  fill="#FFDA44"
                  d="M207.5 247.5c0-22.056 17.944-40 40-40V0C111.028 0 0 111.028 0 247.5S111.028 495 247.5 495V287.5c-22.056 0-40-17.944-40-40zm-70 40c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"
                ></path>
                <path
                  fill="#FFCD00"
                  d="M247.5 0v207.5c22.056 0 40 17.944 40 40s-17.944 40-40 40V495C383.972 495 495 383.972 495 247.5S383.972 0 247.5 0zm110 287.5c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"
                ></path>
                <path
                  fill="#2488FF"
                  d="M317.5 247.5c0 22.056 17.944 40 40 40v-80c-22.056 0-40 17.944-40 40z"
                ></path>
                <path
                  fill="#005ECE"
                  d="M357.5 207.5v80c22.056 0 40-17.944 40-40s-17.944-40-40-40z"
                ></path>
                <path
                  fill="#2488FF"
                  d="M207.5 247.5c0 22.056 17.944 40 40 40v-80c-22.056 0-40 17.944-40 40z"
                ></path>
                <path
                  fill="#005ECE"
                  d="M287.5 247.5c0-22.056-17.944-40-40-40v80c22.056 0 40-17.944 40-40z"
                ></path>
                <path
                  fill="#2488FF"
                  d="M97.5 247.5c0 22.056 17.944 40 40 40v-80c-22.056 0-40 17.944-40 40z"
                ></path>
                <path
                  fill="#005ECE"
                  d="M137.5 207.5v80c22.056 0 40-17.944 40-40s-17.944-40-40-40z"
                ></path>
              </svg>
            </NavLink>
          </div>
          {/* see-more */}
        </div>
        {/* display-sponsored-app-api */}
      </div>
      {/* sponsored-app */}
    </>
  );
}
