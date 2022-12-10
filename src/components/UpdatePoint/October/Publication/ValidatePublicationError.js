import { NavLink } from "react-router-dom";

export default function ValidatePublicationError() {
  return (
    <>
      <div className="icon-validate-comment-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          width="100px"
          enableBackground="new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
        >
          <path
            fill="red"
            d="M256 96.387L392.533 369.453 119.467 369.453z"
          ></path>
          <g fill="#FFF">
            <path d="M256 301.187a8.53 8.53 0 01-8.533-8.533v-93.867a8.53 8.53 0 018.533-8.533 8.53 8.53 0 018.533 8.533v93.867a8.53 8.53 0 01-8.533 8.533M264.533 326.787A8.536 8.536 0 01256 335.32c-4.71 0-8.533-3.823-8.533-8.533s3.823-8.533 8.533-8.533c4.71-.001 8.533 3.822 8.533 8.533"></path>
          </g>
          <g fill="yellow">
            <path d="M358.409 500.945a8.545 8.545 0 01-7.774-5.001 8.535 8.535 0 014.233-11.307c85.086-38.724 140.066-124.134 140.066-217.583C494.933 135.3 387.746 28.122 256 28.122S17.067 135.3 17.067 267.055c0 75.622 36.019 144.623 98.816 189.312 3.84 2.731 4.736 8.064 1.997 11.895-2.722 3.84-8.064 4.745-11.895 2.014C38.63 422.336 0 348.267 0 267.055c0-141.158 114.842-256 256-256s256 114.842 256 256c0 100.122-58.897 191.625-150.067 233.122a8.497 8.497 0 01-3.524.768"></path>
            <path d="M128 437.72L162.133 497.453 93.867 488.92z"></path>
          </g>
        </svg>
      </div>

      <div className="validate-comment-error">
        <div className="title">
          <p>Validation Impossible !</p>
        </div>
        <NavLink to="/before-calcul-publication">
          <button>Réessayer</button>
        </NavLink>
      </div>
    </>
  );
}
