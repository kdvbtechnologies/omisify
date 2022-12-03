import BackbtnCategorieApp from "../../Back/BackbtnCategorieApp";
import NavbarBottomVI from "../../Navigation/NavbarBottom";
import omisifyred from "../../img/omisify-red.jpg";
import { NavLink } from "react-router-dom";

export default function CategorieApp() {
  const api = [
    {
      rang: 1,
      imageIconApp: `${omisifyred}`,
      nameOfApp: "Omisify",
      noteOfApp: "4.6",
    },

    {
      rang: 2,
      imageIconApp: `${omisifyred}`,
      nameOfApp: "Alrani",
      noteOfApp: "4.3",
    },

    {
      rang: 3,
      imageIconApp: `${omisifyred}`,
      nameOfApp: "Lydia - Une Super App pour gérer votre argent",
      noteOfApp: "4.1",
    },

    {
      rang: 4,
      imageIconApp: `${omisifyred}`,
      nameOfApp: "Jamelfase",
      noteOfApp: "3.5",
    },
  ];

  return (
    <>
      <div className="categorie-app-title">
        <div className="a">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            cursor="pointer"
            width="25px"
            enableBackground="new 0 0 502.422 502.422"
            version="1.1"
            viewBox="0 0 502.422 502.422"
            xmlSpace="preserve"
          >
            <path
              fill="#FFD15C"
              d="M348.387 31.347H21.334C9.84 31.347.436 40.751.436 52.245v428.408c0 11.494 9.404 20.898 20.898 20.898h327.053c11.494 0 20.898-9.404 20.898-20.898V52.245c0-11.494-9.404-20.898-20.898-20.898z"
            ></path>
            <path fill="#FFF" d="M28.125 59.225H340.549V473.005H28.125z"></path>
            <path
              fill="#FF7058"
              d="M255.391 0H114.33c-12.539 0-22.988 10.449-22.988 21.943v57.469h185.992V21.943C278.379 10.449 267.93 0 255.391 0z"
            ></path>
            <g fill="#4CDBC4">
              <path d="M137.317 127.478H319.129V151.511H137.317z"></path>
              <path d="M137.317 212.114H319.129V236.147H137.317z"></path>
              <path d="M137.317 296.751H319.129V320.784H137.317z"></path>
              <path d="M137.317 381.388H319.129V405.421H137.317z"></path>
            </g>
            <g fill="#CDD6E0">
              <path d="M49.546 364.669H107.015V422.138H49.546z"></path>
              <path d="M49.546 280.033H107.015V337.502H49.546z"></path>
              <path d="M49.546 195.396H107.015V252.86499999999998H49.546z"></path>
              <path d="M49.546 110.759H107.015V168.228H49.546z"></path>
            </g>
            <g fill="#40596B">
              <path d="M70.444 157.78L56.86 143.151 64.174 135.837 70.444 142.106 91.342 122.253 98.656 129.567z"></path>
              <path d="M71.489 241.371L57.905 227.788 65.219 220.473 71.489 226.743 92.387 206.89 99.701 214.204z"></path>
            </g>
            <g fill="#334A5E">
              <path d="M424.664 413.78h-36.571l57.469 81.502c5.224 6.269 13.584 8.359 20.898 3.135 6.269-5.224 8.359-13.584 4.18-20.898l-45.976-63.739zM343.162 413.78l-44.931 64.784c-5.224 6.269-3.135 15.673 4.18 20.898 6.269 5.224 15.673 3.135 20.898-3.135l57.469-81.502h-37.616v-1.045z"></path>
            </g>
            <ellipse
              cx="383.913"
              cy="377.208"
              fill="#40596B"
              rx="118.073"
              ry="117.029"
            ></ellipse>
            <path
              fill="#F2F2F2"
              d="M383.913 471.249c-52.245 0-94.041-41.796-94.041-94.041s42.841-94.041 94.041-94.041c52.245 0 94.041 41.796 94.041 94.041 0 51.2-41.796 94.041-94.041 94.041z"
            ></path>
            <g fill="#FF7058">
              <ellipse
                cx="383.913"
                cy="298.841"
                rx="8.359"
                ry="8.359"
              ></ellipse>
              <ellipse
                cx="383.913"
                cy="454.531"
                rx="8.359"
                ry="8.359"
              ></ellipse>
              <ellipse
                cx="462.281"
                cy="377.208"
                rx="8.359"
                ry="8.359"
              ></ellipse>
              <ellipse
                cx="305.546"
                cy="377.208"
                rx="8.359"
                ry="8.359"
              ></ellipse>
            </g>
            <g fill="#FFD15C">
              <path d="M380.779 377.208c0-3.135 3.135-6.269 6.269-6.269h35.527c3.135 0 6.269 3.135 6.269 6.269 0 3.135-3.135 6.269-6.269 6.269h-35.527c-3.135-1.044-6.269-3.134-6.269-6.269z"></path>
              <path d="M383.913 313.469c3.135 0 6.269 3.135 6.269 6.269v56.424c0 3.135-3.135 6.269-6.269 6.269-3.135 0-6.269-3.135-6.269-6.269v-56.424c0-3.134 3.135-6.269 6.269-6.269z"></path>
            </g>
            <ellipse
              cx="383.913"
              cy="377.208"
              fill="#FF7058"
              rx="14.629"
              ry="14.629"
            ></ellipse>
            <path
              fill="#FFD15C"
              d="M347.342 235.102l106.58-105.535-48.065-48.065-106.58 105.535c-1.045 1.045-1.045 2.09-2.09 2.09 0 1.045-1.045 2.09-1.045 2.09l-1.045 2.09-9.404 35.527-6.269 25.078 25.078-6.269 36.571-9.404 2.09-1.045c1.045 0 2.09-1.045 2.09-1.045s1.044-1.047 2.089-1.047z"
            ></path>
            <g fill="#FF7058">
              <path d="M307.636 206.89L419.44 95.086l-14.629-14.629-105.535 106.58c-1.045 1.045-1.045 2.09-2.09 2.09 0 1.045-1.045 2.09-1.045 2.09l-1.045 2.09 12.54 13.583zM347.342 235.102l106.58-105.535-14.629-14.629-111.804 110.76 12.539 12.539 2.09-1.045c1.045 0 2.09-1.045 2.09-1.045 1.044 0 2.089-1.045 3.134-1.045z"></path>
            </g>
            <path
              fill="#334A5E"
              d="M303.456 247.641L285.693 229.878 278.379 254.955z"
            ></path>
            <path
              fill="#40596B"
              d="M494.672 57.469l-18.808-18.808c-8.359-8.359-21.943-8.359-29.257 0L419.44 65.829l48.065 48.065 27.167-27.167c8.36-7.315 8.36-20.898 0-29.258z"
            ></path>
            <path
              fill="#F1543F"
              d="M307.636 206.89L419.44 95.086 439.293 114.939 327.489 225.698z"
            ></path>
            <path
              fill="#FFD15C"
              d="M419.44 66.873L467.505 114.939 452.876 129.567 404.811 81.502z"
            ></path>
          </svg>
          <p>Productivité</p>
        </div>
      </div>

      <BackbtnCategorieApp />

      <div className="categorie-app-popularity">
        <p>Top des applications gratuites dans la catégorie Productivité</p>
      </div>

      <div className="categorie-app">
        {api.map((api) => (
          <>
            <NavLink style={{ textDecoration: "none" }} to="/profil-app">
              <div className="a">
                <p>{api.rang}</p>
                <img src={api.imageIconApp} alt="image icon app" />
                <p>{api.nameOfApp}</p>
                <p>{api.noteOfApp}</p>
              </div>
            </NavLink>
          </>
        ))}
      </div>

      <p style={{ marginBottom: "150px" }}></p>

      <NavbarBottomVI />
    </>
  );
}
