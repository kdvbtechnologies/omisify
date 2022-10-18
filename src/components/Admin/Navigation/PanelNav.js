import { NavLink } from "react-router-dom";

export default function PanelNav() {
  return (
    <>
      <div className="panel">
        <NavLink to="/panel-kdvb-home">
          <h3>Accueil</h3>
        </NavLink>
        <NavLink to="/panel-kdvb-user">
          <h3>Partenaires</h3>
        </NavLink>
        <NavLink to="/panel-kdvb-welcome-bonus">
          <h3>Bonus de Bienvenue</h3>
        </NavLink>
      </div>
    </>
  );
}
