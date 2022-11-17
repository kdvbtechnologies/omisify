import { NavLink } from "react-router-dom";

export default function ChooseaAd() {
  return (
    <>
      <div className="ad-menu">
        <div className="title">
          <p>Publicité</p>

          <NavLink to="/create-a-ad">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              cursor="pointer"
              width="20px"
              enableBackground="new 0 0 489.8 489.8"
              version="1.1"
              viewBox="0 0 489.8 489.8"
              xmlSpace="preserve"
            >
              <path d="M438.2 0H51.6C23.1 0 0 23.2 0 51.6v386.6c0 28.5 23.2 51.6 51.6 51.6h386.6c28.5 0 51.6-23.2 51.6-51.6V51.6c0-28.4-23.2-51.6-51.6-51.6zm27.1 438.2c0 14.9-12.2 27.1-27.1 27.1H51.6c-14.9 0-27.1-12.2-27.1-27.1V51.6c0-14.9 12.2-27.1 27.1-27.1h386.6c14.9 0 27.1 12.2 27.1 27.1v386.6z"></path>
              <path d="M337.4 232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v80.3h-80.3c-6.8 0-12.3 5.5-12.3 12.2 0 6.8 5.5 12.3 12.3 12.3h80.3v80.3c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3v-80.3h80.3c6.8 0 12.3-5.5 12.3-12.3 0-6.8-5.5-12.2-12.3-12.2z"></path>
            </svg>
          </NavLink>
        </div>

        <div className="a">
          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/real-time-results">
            <p>Chaussure à vendre à Bon Prix</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink">
            <p>John Foster à vendre</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
