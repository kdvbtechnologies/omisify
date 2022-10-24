import { NavLink, useNavigate } from "react-router-dom";

export default function Others() {
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
      <div className="others">
        <div className="title">
          <p>Autres</p>
        </div>
        <div className="a">
          <div className="hr">
            <hr />
          </div>
          <NavLink className="navlink" to="/guide">
            <p>Guide</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>
          <NavLink className="navlink" to="/ask-poster">
            <p>Demande d'Affiches</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/vocabulary">
            <p>Vocabulaire</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
