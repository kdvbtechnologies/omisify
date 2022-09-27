import { useNavigate } from "react-router-dom";

export default function OyonaHistoricalAction() {
  const navigate = useNavigate();
  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="historical">
        <div className="historic">
          <p>Historique vide !</p>
        </div>
      </div>
    </>
  );
}
