import { NavLink } from "react-router-dom";

export default function DescriptionModifierSuccess() {
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
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z"></path>
            <path d="M16 2L16 4"></path>
            <path d="M8 2L8 4"></path>
            <circle cx="12" cy="11" r="3"></circle>
            <path d="M17 18.5c-1.4-1-3.1-1.5-5-1.5s-3.6.6-5 1.5"></path>
          </svg>
        </div>
        {/* column */}

        <div className="align">
          <p>
            La photo de couverture de votre Liste de Contact Whatsapp que vous
            avez remplacé est en attente de validation
          </p>

          <NavLink to="/about-list-of-contacts">
            <button>Terminer</button>
          </NavLink>
        </div>
        {/* align */}
      </div>
      {/* change-photo-cover-success */}
    </>
  );
}
