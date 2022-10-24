import { NavLink } from "react-router-dom";

export default function LikesP() {
  return (
    <div className="email-shrink">
      <div className="email-a">
        <i>Likes P</i>
      </div>

      <div className="email-c">
        <p>
          Même si vous n'êtes pas influenceur, Omisify vous donne la possibilité
          de gagner de l'argent lorsque vos amis like votre publication, like
          votre photo, like votre vidéo
        </p>
        <p>Commencer maintenant et gagnez de l'argent avec Omisify</p>
        <div className="align-button">
          <NavLink to="/signup">
            <button>Devenir Partenaire Omisify</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
