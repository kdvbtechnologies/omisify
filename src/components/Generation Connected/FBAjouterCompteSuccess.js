import { NavLink } from "react-router-dom";

export default function FBAjouterCompteSuccess() {
  return (
    <>
      <div className="change-photo-cover-success">
        <div className="column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            fill="blue"
            data-name="Layer 1"
            viewBox="0 0 16 16"
          >
            <circle cx="12.5" cy="11.5" r="1.5" className="cls-1"></circle>
            <path
              d="M14 4.693l-8.182 8.182L2 9.057 3.636 7.42l2.25 2.25 6.546-6.545z"
              className="cls-2"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            viewBox="0 0 24 24"
            fill="#000"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
          </svg>
        </div>
        {/* column */}

        <div className="align">
          <p>
            Le Compte Facebook que vous avez ajouté est en attente de validation
          </p>

          <NavLink to="/generation-connected">
            <button>Terminer</button>
          </NavLink>
        </div>
        {/* align */}
      </div>
      {/* change-photo-cover-success */}
    </>
  );
}
