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

        <NavLink
          className="one-historical-text-decoration"
          to="/wilfried-histo-five"
        >
          <div className="one-historical">
            <p>[Nouveau] 13 commentaires..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/wilfried-histo-four"
        >
          <div className="one-historical">
            <p>12 commentaires face..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/wilfried-histo-three"
        >
          <div className="one-historical">
            <p>Publication whatsapp, Teleg..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/wilfried-histo-two"
        >
          <div className="one-historical">
            <p>1 personne c'est inscrite avec le Code Bo..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <div>
          <NavLink
            className="one-historical-text-decoration"
            to="/wilfried-histo-one"
          >
            <div className="one-historical">
              <p>Première Pub de Omisi..</p>
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
