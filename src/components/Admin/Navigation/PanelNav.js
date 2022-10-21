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

          <NavLink className=".navlink" to="/panel-kdvb-update-e10k-2022">
            <li>Ajouter les points des e10k</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-update-email-2022">
            <li>Ajouter les points des e-mails</li>
          </NavLink>

          <NavLink
            className=".navlink"
            to="/panel-kdvb-update-likescomment-2022"
          >
            <li>Ajouter les points des likes (commentaire)</li>
          </NavLink>

          <NavLink
            className=".navlink"
            to="/panel-kdvb-update-likespublication-2022"
          >
            <li>Ajouter les points des likes (publication)</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-update-m10k-2022">
            <li>Ajouter les points des m10k</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-update-message-2022">
            <li>Ajouter les points des messages</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-update-mwi-2022">
            <li>Ajouter les points des mwi</li>
          </NavLink>

          <NavLink
            className=".navlink"
            to="/panel-kdvb-update-publication-2022"
          >
            <li>Ajouter les points des publications</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-update-pwi-2022">
            <li>Ajouter les points des pwi</li>
          </NavLink>

          <NavLink className=".navlink" to="/panel-kdvb-update-pwp-2022">
            <li>Ajouter les points des pwp</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
