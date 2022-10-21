import { NavLink } from "react-router-dom";

export default function PanelNav() {
  return (
    <>
      <div className="panel-nav">
        <div className="a">
          <NavLink className=".navlink" to="/panel-kdvb">
            <li>Accueil</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-user">
            <li>Partenaires</li>
          </NavLink>
          <NavLink className=".navlink" to="/panel-kdvb-welcome-bonus">
            <li>Bonus de Bienvenue</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-comment-october-2022">
            <li>Commentaires Octobre 2022</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-e10k-october-2022">
            <li>E10k Octobre 2022</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-email-october-2022">
            <li>Email Octobre 2022</li>
          </NavLink>

          <NavLink
            className=".navlink"
            to="/panel-kdvb-likescomment-october-2022"
          >
            <li>Likes (commentaire) Octobre 2022</li>
          </NavLink>

          <NavLink
            className=".navlink"
            to="/panel-kdvb-likespublication-october-2022"
          >
            <li>Likes (Publication) Octobre 2022</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-m10k-october-2022">
            <li>M10k Octobre 2022</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-message-october-2022">
            <li>Message Octobre 2022</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-mwi-october-2022">
            <li>MWI Octobre 2022</li>
          </NavLink>

          <NavLink
            className=".navlink"
            to="/panel-kdvb-publication-october-2022"
          >
            <li>Publication Octobre 2022</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-pwi-october-2022">
            <li>PWI Octobre 2022</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-pwp-october-2022">
            <li>PWP Octobre 2022</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-update-comment-2022">
            <li>Ajouter les points des commentaires</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
