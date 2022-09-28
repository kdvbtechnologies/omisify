import { useNavigate } from "react-router-dom";
import WilfriedActiveHistoOne from "./WilfriedActiveHistoOne";

export default function WilfriedHistoOne() {
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
      <WilfriedActiveHistoOne />
    </div>
  );
}
