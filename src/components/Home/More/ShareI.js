import { NavLink } from "react-router-dom";

export default function ShareI() {
  return (
    <div className="comment-i-shrink">
      <div className="comment-i-a">
        <i>Partage</i>
      </div>
      <div className="comment-i-b">
        <p>
          Gagner un revenu passif chaque fois que vos abonnés partagent vos
          publications
        </p>
      </div>
      <div className="comment-i-c">
        <p>
          Avec Omisify vous gagnez de l'argent lorsque vos abonnés partagent
          votre publication
        </p>
        <p>
          Avec Omisify vous gagnez de l'argent lorsque vos abonnés partagent
          votre vidéo
        </p>
        <p>
          Avec Omisify vous gagnez de l'argent même lorsque vous dormez car vos
          abonnés travaillent pour vous
        </p>
        <p>Commencer maintenant et Gagner de l'argent avec vos abonnés</p>
        <div className="align-button">
          <NavLink to="/signup">
            <button>Devenir Partenaire Omisify</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
