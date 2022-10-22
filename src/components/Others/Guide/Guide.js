import { useNavigate } from "react-router-dom";
import GuideDetails from "./GuideDetails";

export default function Guide() {
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
      <div className="guide">
        <div className="align">
          <div className="title">
            <div className="hr">
              <hr />
            </div>

            <p>Guide</p>

            <div className="hr">
              <hr />
            </div>
          </div>
        </div>
        <GuideDetails />
      </div>
    </div>
  );
}
