import { NavLink } from "react-router-dom";

export default function PWI() {
  return (
    <div className="email-shrink">
      <div className="email-a">
        <i>PWI</i>
      </div>

      <div className="email-b">
        <p>Grâce à vos amis vous gagner de l'argent avec Omisify</p>
      </div>

      <div className="email-c">
        <p>
          Les personnes avec lesqueslles vous êtes amis sur les réseaux sociaux
          vous font gagner de l'argent lorsqu'ils commentent votre publication
        </p>

        <p>
          Omisify vous donne la possibilité de gagner de l'argent lorsque vos
          amis commentent votre publication, commentent votre photo, commentent
          votre vidéo, peu importe la nature du commentaire vous gagnez de
          l'argent avec Omisify
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
