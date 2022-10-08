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
          to="/wilfried-histo-six"
        >
          <div className="one-historical">
            <p>
              [Nouveau] 07/10/2022 - Vendredi 07 Octobre • 1 commentaire publi..
            </p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/wilfried-histo-five"
        >
          <div className="one-historical">
            <p>02/10/2022 - 13 commentaires..</p>
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
            <p>30/09/2022 - 12 commentaires face..</p>
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
            <p>28/09/2022 - Publication whatsapp, Teleg..</p>
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
            <p>27/09/2022 - 1 personne c'est inscrite avec le Code Bo..</p>
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
              <p>27/09/2022 - Première Pub de Omisi..</p>
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
