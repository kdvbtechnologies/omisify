import { NavLink, useNavigate } from "react-router-dom";

export default function GbetindeAllHistorical() {
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
            to="/gbetinde-histo-one"
          >
            <div className="one-historical">
              <p>[Nouveau] 1 message Facebook pour le Pro..</p>
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
