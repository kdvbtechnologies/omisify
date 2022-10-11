import { useNavigate } from "react-router-dom";

export default function PartnerSettings() {
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
        <p>Paramètres</p>
      </div>
      <h1>Informations personelles</h1>
      <P>Modifier</P>
      <p></p>
    </div>
  );
}
