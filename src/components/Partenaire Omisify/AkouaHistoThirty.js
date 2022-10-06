import { useNavigate } from "react-router-dom";

export default function AkouaHistoThirty() {
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
            <p>138 messages et 20 commentaires publiés</p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Création de Site internet; Devenir
              Partenaire Omisify
            </p>
            <p>Date : 06/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>138 messages : 138 points</p>
                <p>20 commentaires : 20 points</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 06/10/2022, 15:21 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
