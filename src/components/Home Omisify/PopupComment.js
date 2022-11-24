import comment from "./img/comment.jpg";

export default function PopupComment() {
  return (
    <>
      <div className="popup-comment-background">
        <div className="card">
          <img src={comment} alt="comment" />
          <h3>
            Gagnez de l'argent en faisant de la publicité pour des entreprises
            en commentaire
          </h3>
          <p>
            Publier les affiches publicitaires des entreprises en commentaire
          </p>

          <p>
            Publier en commentaire le contenu publicitaire des entreprises et
            gagnez de l'argent avec Omisify
          </p>

          <p>
            Publier des commentaires sur votre publication ou sur la publication
            d'une autre personne
          </p>

          <p>
            Faites de la publicité pour des entreprises en publiant leur affiche
            publicitaire en commentaire
          </p>
        </div>
      </div>
    </>
  );
}
