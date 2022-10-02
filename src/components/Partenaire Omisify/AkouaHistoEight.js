import { useNavigate } from "react-router-dom";

export default function AkouaHistoEight() {
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
              1 nouveau like d'une publication récente, 99 messages et 4
              commentaires FB
            </p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Création de Site internet; Devenir
              Partenaire Omisify
            </p>
            <p>Date : 02/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>4 commentaires : 4 points</p>
                <p>99 messages : 99 points</p>
                <p>1 like : 0.0001€</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 02/10/2022, 10:14 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
