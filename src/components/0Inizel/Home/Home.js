import { NavLink } from "react-router-dom";
import FooterIN from "../Footer/Footer";

export default function HomeIN() {
  return (
    <>
      <div className="home-in">
        <img
          src="https://res.cloudinary.com/rasivyy/image/upload/v1667979773/inizel/inizel%20home/rihanna-inizel_fevtuk.jpg"
          alt="artist image"
        />
        <div className="a">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className="search-svg"
            version="1.1"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
          >
            <g>
              <path d="M53.76 35.696c7.03-7.03 7.028-18.428-.002-25.456-7.03-7.03-18.427-7.028-25.456.002-5.8 5.801-6.8 14.57-3.026 21.411L4.969 51.96l7.07 7.071 20.308-20.307c6.841 3.774 15.612 2.774 21.413-3.028zM12.04 56.203L7.797 51.96l18.576-18.575a18.043 18.043 0 001.931 2.313 18.044 18.044 0 002.311 1.93L12.04 56.202zm17.677-21.92c-6.237-6.238-6.238-16.389 0-22.627A15.895 15.895 0 0141.03 6.969c4.273 0 8.292 1.663 11.314 4.685l.001.001c6.238 6.238 6.238 16.388 0 22.626a15.895 15.895 0 01-11.312 4.688 15.896 15.896 0 01-11.316-4.687z"></path>
              <path d="M50.224 13.776a12.92 12.92 0 00-9.194-3.808 12.914 12.914 0 00-9.192 3.809 1 1 0 001.414 1.414 10.93 10.93 0 017.78-3.222c2.937-.001 5.7 1.143 7.778 3.22a1 1 0 101.414-1.413z"></path>
            </g>
          </svg>
          <input type="text" />
        </div>

        <NavLink to="/search-result-home-in">
          <button>Recherche inizel</button>
        </NavLink>
      </div>

      <div className="more-language-in">
        <NavLink className="navlink" to="">
          <p>English</p>
        </NavLink>

        <NavLink className="navlink" to="">
          <p>Français</p>
        </NavLink>

        <NavLink className="navlink" to="">
          <p>+ Plus de langues</p>
        </NavLink>
      </div>
      <FooterIN />
    </>
  );
}
