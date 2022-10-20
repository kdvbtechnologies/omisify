import { NavLink } from "react-router-dom";

export default function DaysOfGenerositySuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="welcome-bonus">
        <div className="title">
          <p>Bonus Activé !</p>
        </div>
        <p style={{ padding: "0px 10px", fontSize: "17px" }}>
          Vos journées de générosité ont été sauvegardé et le bonus a été activé
        </p>

        <NavLink to="/bonus">
          <button>Terminé</button>
        </NavLink>
      </div>
    </div>
  );
}
