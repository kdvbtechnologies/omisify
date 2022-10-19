import { NavLink } from "react-router-dom";

export default function PanelNav() {
  return (
    <>
      <div className="panel-nav">
        <div className="a">
          <NavLink className=".navlink" to="/panel-kdvb-home">
            <li>Accueil</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-user">
            <li>Partenaires</li>
          </NavLink>
          <NavLink className=".navlink" to="/panel-kdvb-welcome-bonus">
            <li>Bonus de Bienvenue</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-comment-october">
            <li>Comment Octobre 2022</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
