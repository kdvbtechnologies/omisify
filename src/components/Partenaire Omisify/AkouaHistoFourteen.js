import { useNavigate } from "react-router-dom";

export default function AkouaHistoFourteen() {
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
      <div className="historical-active">
        <div className="historic-active">
          <div className="historic-title">
            <p>
              {" "}
              49 messages, 21 commentaires et 1 publication du Programme
              d'affiliation Création de site internet
            </p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Devenir Partenaire Omisify; Création de
              site internet
            </p>
            <p>Date : 06/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>49 messages : 49 point(s)</p>
                <p>21 commentaires : 21 point(s)</p>
                <p>1 publication : 1 point(s)</p>
                <p>12 likes : 0.00012€</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 07/10/2022, 08:24 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
