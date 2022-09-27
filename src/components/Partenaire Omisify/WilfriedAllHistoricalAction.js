import { NavLink, useNavigate } from "react-router-dom";

export default function WilfriedAllHistoricalAction() {
  const navigate = useNavigate();
  return (
    <>
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
            to="/wilfried-histo-one"
          >
            <div className="one-historical">
              <p>27/09/2022 - Publication - Omisify</p>
            </div>
          </NavLink>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
