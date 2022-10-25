export default function NewCommentPanel() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      <div className="back-btn">
        <button>Retour</button>
      </div>
      <div style={family} className="new-comment-panel">
        <div className="title">
          <p>Commentaire</p>
        </div>
        <div className="align">
          <p>Entrer le nombre de nouveau(x) commentaire(s)</p>
          <input type="number" placeholder="Nombre de commentaire(s)" />
          <button>Valider</button>
        </div>
      </div>
    </>
  );
}
