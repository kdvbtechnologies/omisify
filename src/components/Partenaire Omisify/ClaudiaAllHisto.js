import { NavLink, useNavigate } from "react-router-dom";

export default function ClaudiaAllHisto() {
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
      <div className="all-historical">
        <div className="all-historical-title">
          <p>Historique</p>
        </div>
        <div className="hr">
          <hr />
        </div>

        <div>
          <NavLink
            className="one-historical-text-decoration"
            to="/claudia-histo-one"
          >
            <div className="one-historical">
              <p>[Nouveau] Le Code Bonus Kamagate_djeny a été appli..</p>
            </div>
          </NavLink>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
