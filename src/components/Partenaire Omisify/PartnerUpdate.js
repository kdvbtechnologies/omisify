import { useNavigate } from "react-router-dom";

export default function PartnerUpdate() {
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Actualiser mes points</p>
      </div>
      <p>
        Entrer la date à laquelle vous avez faite la publication ou envoyer le
        message
      </p>
      <input type="text" placeholder="Date de creation" />
      <p>Entrer le nombre de points de messages</p>
      <input type="text" placeholder="Nombre de points de messages" />

      <p>Entrer le nombre de points de likes</p>
      <input type="text" placeholder="Nombre de points de likes" />

      <p>Entrer la date d'aujourd'hui</p>
      <input type="text" placeholder="Date d'aujourd'hui" />
      <button>valider</button>

      <h1>Nouveau mois</h1>
      <p>Commencer avec un nouveau mois</p>
      <input type="text" placeholder="Entrer le nouveau mois" />
      <button>commencer</button>
    </div>
  );
}
