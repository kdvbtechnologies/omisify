import { NavLink } from "react-router-dom";

export default function DescriptionAjouterSuccess() {
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
            fill="#666666"
            viewBox="0 0 30 30"
          >
            <path d="M19.5 9c-.492-.004-.916.242-1.092.47l-2.737 3.457c-.17.208-.55.073-.727-.03l-2.455-1.547c-.29-.19-.62-.35-.988-.35-.38 0-.786.114-1.072.434l-3.293 3.724c-.445.498.3 1.166.746.668l3.294-3.724c.218-.234.535-.05.765.084l2.46 1.552.012.006c.306.19.65.252.988.256.34.004.71-.027.985-.36l2.767-3.5c.217-.263.534-.14.744.04l2.254 1.688c.527.477 1.205-.375.62-.78l-2.252-1.69C20.252 9.188 19.913 9 19.5 9zm-12 8h15a.499.499 0 110 1h-15a.499.499 0 110-1zM11 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 1c.558 0 1 .442 1 1s-.442 1-1 1-1-.442-1-1 .442-1 1-1zm14 19.5a.5.5 0 01-.5.5.5.5 0 01-.5-.5.5.5 0 01.5-.5.5.5 0 01.5.5zm-19 0a.5.5 0 01-.5.5.5.5 0 01-.5-.5.5.5 0 01.5-.5.5.5 0 01.5.5zm9-1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 1c.563 0 1 .437 1 1s-.437 1-1 1-1-.437-1-1 .437-1 1-1zM26.5 3c-.665 0-.648 1 0 1h2c.286 0 .5.214.5.5v14c0 .286-.214.5-.5.5h-2c-.654 0-.66 1 0 1h2c.822 0 1.5-.678 1.5-1.5v-14c0-.822-.678-1.5-1.5-1.5zm-25 0C.678 3 0 3.678 0 4.5v14c0 .822.678 1.5 1.5 1.5h2c.66 0 .665-1 0-1h-2a.488.488 0 01-.5-.5v-14c0-.286.214-.5.5-.5h2c.66 0 .66-1 0-1zm5-1C5.678 2 5 2.678 5 3.5v16c0 .822.678 1.5 1.5 1.5h17c.822 0 1.5-.678 1.5-1.5v-16c0-.822-.678-1.5-1.5-1.5zm0 1h17c.286 0 .5.214.5.5v16c0 .286-.214.5-.5.5h-17a.488.488 0 01-.5-.5v-16c0-.286.214-.5.5-.5z"></path>
          </svg>
        </div>
        {/* column */}

        <div className="align">
          <p>
            La photo de couverture que vous avez remplacé est en attente de
            validation
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
