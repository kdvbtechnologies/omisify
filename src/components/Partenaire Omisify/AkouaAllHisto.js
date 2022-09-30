import { NavLink, useNavigate } from "react-router-dom";

export default function AkouaAllHisto() {
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

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-four"
        >
          <div className="one-historical">
            <p>Première Publication du Programme d'Affilia..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-three"
        >
          <div className="one-historical">
            <p>Commentaires Faceboook, Messages et Publications Cha..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-two"
        >
          <div className="one-historical">
            <p>Première Pub de Omisi..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <div>
          <NavLink
            className="one-historical-text-decoration"
            to="/akoua-histo-one"
          >
            <div className="one-historical">
              <p>Le Code Bonus Les_chroniques_de_josi a été appli..</p>
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
