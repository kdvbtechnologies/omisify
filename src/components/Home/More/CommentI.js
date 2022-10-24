import { NavLink } from "react-router-dom";

export default function CommentI() {
  return (
    <div className="comment-i-shrink">
      <div className="comment-i-a">
        <i>Commentaire</i>
      </div>

      <div className="comment-i-b">
        <p>
          Gagner de l'argent sur tout commentaires laissés sur votre publication
        </p>
      </div>

      <div className="comment-i-c">
        <p>
          Avec Omisify vous gagnez de l'argent lorsque vos abonnés commentent
          votre publication
        </p>
        <p>
          Avec Omisify vous gagnez de l'argent lorsque vos abonnés commentent
          votre vidéo
        </p>
        <p>
          Omisify donne la possibilité aux influenceurs de gagner de l'argent
          lorsque leur abonnés commente leur publication, peu importe la nature
          du commentaire, vous gagnerez de l'argent sur tout commentaires
          laissés sur votre publication par vos abonnés
        </p>
        <p>
          Avec Omisify toutes les conditions ont été réunies pour vous permettre
          de transformer un simple complément de revenue en succèss incroyable
        </p>
        <div className="align-button">
          <NavLink to="/signup">
            <button>Devenir Partenaire Omisify</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
