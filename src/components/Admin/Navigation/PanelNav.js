import { NavLink } from "react-router-dom";

export default function PanelNav() {
  return (
    <>
      <div className="panel">
        <NavLink to="/panel-kdvb">
          <h3>Accueil</h3>
        </NavLink>
        <NavLink to="/panel-kdvb-user">
          <h3>Partenaires</h3>
        </NavLink>
      </div>
    </>
  );
}
