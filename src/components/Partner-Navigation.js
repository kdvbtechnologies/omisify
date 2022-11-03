import { NavLink } from "react-router-dom";

export default function PartnerNavigation() {
  //const userId = localStorage.getItem("https://omisify.com/userId");
  //const partnername = localStorage.getItem("https://omisify.com/partnername");
  //const shortname = localStorage.getItem("https://omisify.com/shortname");
  //const name = localStorage.getItem("https://omisify.com/name");

  return (
    <>
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/">
            <li>Omisify</li>
          </NavLink>
        </div>

        <div className="right-navigation">
          <div className="svg">
            <NavLink to="/translation" className="navlink">
              <li>
                <svg
                  width="20px"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7.25"
                    stroke="#FBFBFE"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 15.25C7.7649 15.25 7.48181 15.1442 7.15894 14.8321C6.83246 14.5165 6.50419 14.0235 6.21224 13.3562C5.62932 12.0239 5.25 10.1307 5.25 8C5.25 5.86928 5.62932 3.97615 6.21224 2.64376C6.50419 1.97645 6.83246 1.48352 7.15894 1.16789C7.48181 0.855751 7.7649 0.75 8 0.75C8.2351 0.75 8.51819 0.855751 8.84106 1.16789C9.16754 1.48352 9.49581 1.97645 9.78776 2.64376C10.3707 3.97615 10.75 5.86928 10.75 8C10.75 10.1307 10.3707 12.0239 9.78776 13.3562C9.49581 14.0235 9.16754 14.5165 8.84106 14.8321C8.51819 15.1442 8.2351 15.25 8 15.25Z"
                    stroke="#FBFBFE"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="1"
                    y1="5.75"
                    x2="15"
                    y2="5.75"
                    stroke="#FBFBFE"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="1"
                    y1="10.25"
                    x2="15"
                    y2="10.25"
                    stroke="#FBFBFE"
                    strokeWidth="1.5"
                  />
                </svg>
              </li>
            </NavLink>

            <NavLink className="navlink" to="/partner">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="white"
                  data-name="03 - Account"
                  viewBox="0 0 30 30"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 1a8 8 0 108 8 8 8 0 00-8-8zm0 2a6 6 0 11-6 6 6 6 0 016-6z"
                    data-name="Path 217"
                    transform="translate(-1 -1)"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M16 19.2c-5.657 0-10.558 1.175-13 2.82a3.865 3.865 0 00-2 3.08 3.865 3.865 0 002 3.08C5.442 29.825 10.343 31 16 31s10.558-1.175 13-2.82a3.865 3.865 0 002-3.08 3.865 3.865 0 00-2-3.08c-2.442-1.645-7.343-2.82-13-2.82zm0 2a26.973 26.973 0 0110.867 1.909 5.8 5.8 0 011.694 1.132 1.06 1.06 0 010 1.718 5.8 5.8 0 01-1.694 1.132A26.973 26.973 0 0116 29a26.973 26.973 0 01-10.867-1.909 5.8 5.8 0 01-1.694-1.132 1.06 1.06 0 010-1.718 5.8 5.8 0 011.694-1.132A26.973 26.973 0 0116 21.2z"
                    data-name="Path 218"
                    transform="translate(-1 -1)"
                  ></path>
                </svg>
              </li>
            </NavLink>

            <NavLink className="navlink" to="/menu">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  fill="white"
                  width="22px"
                  enableBackground="new 0 0 377 377"
                  version="1.1"
                  viewBox="0 0 377 377"
                  xmlSpace="preserve"
                >
                  <circle cx="15" cy="88.5" r="15"></circle>
                  <path d="M75 73.5H377V103.5H75z"></path>
                  <circle cx="15" cy="288.5" r="15"></circle>
                  <path d="M75 273.5H377V303.5H75z"></path>
                  <circle cx="15" cy="188.5" r="15"></circle>
                  <path d="M75 173.5H377V203.5H75z"></path>
                </svg>
              </li>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

/*

{userId && shortname && partnername && name ? (
            <>
              <NavLink className="navlink" to="/partner">
                <li>{shortname}</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="navlink" to="/partner">
                <li>Con</li>
              </NavLink>
            </>
          )}

          {userId && shortname && partnername && name ? (
            <>
              <NavLink className="navlink" to="/secure-menu">
                <li>Menu</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="navlink" to="/menu">
                <li>Menu</li>
              </NavLink>
            </>
          )}

*/
