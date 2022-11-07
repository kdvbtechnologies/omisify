import { NavLink } from "react-router-dom";

export default function SignupFirst() {
  return (
    <>
      <div className="reset-success">
        <div className="title">
          <p>Inscrivez-vous !</p>
        </div>
        <p>
          Inscrivez-vous gratuitement pour créer une publicité pour votre
          entreprise
        </p>

        <NavLink to="/signup-business">
          <button>Terminer</button>
        </NavLink>
      </div>
    </>
  );
}
