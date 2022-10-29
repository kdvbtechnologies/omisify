import { NavLink } from "react-router-dom";

export default function ValidateAccessCode() {
  const accesscode = localStorage.getItem("https://omisify.com/accesscode");

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
  };

  return (
    <div style={family}>
      <div className="validate-access-code">
        <div className="title">
          <p>Votre Code d'accès a été Créé !</p>
        </div>

        <p>
          Le code d'accès {accesscode} vous permettra désormais d'accéder aux
          fonctionnalités en cours de développement
        </p>

        <NavLink to="/dev">
          <button>Terminer</button>
        </NavLink>
      </div>
    </div>
  );
}
