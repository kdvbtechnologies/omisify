import { useNavigate } from "react-router-dom";

export default function AkouaHistoNineteen() {
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
            <p> 8 MWI, 11 commentaires et 7 messages</p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Devenir Partenaire Omisify; Création de
              site internet
            </p>
            <p>Date : 11/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>7 messages : 0.7 point(s)</p>
                <p>8 MWI : 40 point(s)</p>
                <p>11 commentaires : 11 point(s)</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 12/10/2022, 05:28 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
