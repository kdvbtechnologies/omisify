import { useNavigate } from "react-router-dom";
import AddSeptember from "./AddSeptember";
import UpdateSeptember from "./UpdateSeptember";

export default function PartnerUpdate() {
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const idtotal = "634777f3d469d81e78edf3ef";

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Actualiser mes points</p>
      </div>
      {idtotal ? <UpdateSeptember /> : <AddSeptember />}
    </div>
  );
}
