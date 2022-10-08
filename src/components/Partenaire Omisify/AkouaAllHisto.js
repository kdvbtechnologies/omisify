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
          to="/akoua-histo-fifteen"
        >
          <div className="one-historical">
            <p>
              [Nouveau] 07/10/2022 - 234 messages, 28 commentaires et 2
              publications du Progra..
            </p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-fourteen"
        >
          <div className="one-historical">
            <p>06/10/2022 - 49 messages, 21 commentaires et 1 pu..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-thirty"
        >
          <div className="one-historical">
            <p>06/10/2022 - 138 messages et 20 commentaires publi..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-twelve"
        >
          <div className="one-historical">
            <p>
              05/10/2022 - 353 messages, 31 commentaires et 1 publication du
              Pro..
            </p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-eleven"
        >
          <div className="one-historical">
            <p>04/10/2022 - 8 messages whatsapp, 130 messa..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-ten"
        >
          <div className="one-historical">
            <p>03/10/2022 - 45 messages et 6 commentai..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-nine"
        >
          <div className="one-historical">
            <p>03/10/2022 - 1 personne c'est inscrite avec le Code Bo..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-eight"
        >
          <div className="one-historical">
            <p>02/10/2022 - 1 like d'une publication récente, 99 messa..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-seven"
        >
          <div className="one-historical">
            <p>
              01/10/2022 - 1 publication du programme d'affiliation Devenir
              Parte..
            </p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-six"
        >
          <div className="one-historical">
            <p>30/09/2022 - 34 commentaires Face..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-five"
        >
          <div className="one-historical">
            <p>30/09/2022 - 89 Commentaires et 1 Publica..</p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>

        <NavLink
          className="one-historical-text-decoration"
          to="/akoua-histo-four"
        >
          <div className="one-historical">
            <p>29/09/2022 - Première Publication du Programme d'Affilia..</p>
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
            <p>
              29/09/2022 - Commentaires Faceboook, Messages et Publications
              Cha..
            </p>
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
            <p>29/09/2022 - Première Pub de Omisi..</p>
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
              <p>
                28/09/2022 - Le Code Bonus Les_chroniques_de_josi a été appli..
              </p>
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
