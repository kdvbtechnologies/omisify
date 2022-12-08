import omisifyred from "../img/omisify-red.jpg";
import { NavLink } from "react-router-dom";

export default function SearchOnInternet() {
  const api = [
    {
      imageOfApp: `${omisifyred}`,
      altImageOfApp: "imagee de l'application",
      nameOfApp: "inizel",
    },
  ];

  return (
    <>
      <div className="app-by-categorie">
        <div className="sous-categorie">
          <p>Recherche sur internet</p>
        </div>
        {/* sous-categorie */}

        <div className="overflow">
          {api.map((api) => (
            <NavLink style={{ textDecoration: "none" }} to="/profil-app">
              <div className="images">
                <img src={api.imageOfApp} alt={api.altImageOfApp} />
                <p>{api.nameOfApp}</p>
              </div>
              {/* images */}
            </NavLink>
          ))}

          <div className="next">
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                cursor="pointer"
                width="20px"
                enableBackground="new 0 0 477.175 477.175"
                version="1.1"
                viewBox="0 0 477.175 477.175"
                xmlSpace="preserve"
              >
                <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
              </svg>
            </NavLink>
          </div>
          {/* next */}
        </div>
        {/* overflow */}
      </div>
      {/* app-by-categorie */}
    </>
  );
}
