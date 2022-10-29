import { NavLink } from "react-router-dom";

export default function Others() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <NavLink to="/secure-menu">
          <button>Retour</button>
        </NavLink>
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

          <NavLink className="navlink" to="/access-code">
            <p>Code d'accès</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/dev">
            <p>Dev</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
