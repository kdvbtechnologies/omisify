import { useNavigate } from "react-router-dom";

export default function GbetindeHistoricalAction() {
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
      <div className="historical">
        <div className="historic">
          <p>Historique vide !</p>
        </div>
      </div>
    </div>
  );
}
