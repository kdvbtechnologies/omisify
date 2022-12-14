import { useNavigate } from "react-router-dom";

export default function AkouaHistoNine() {
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
            <p>1 personne c'est inscrite avec le Code Bonus Kamagate_djeny</p>
          </div>
          <div className="less-important">
            <p>Programme d'Affiliation : Devenir Partenaire Omisify</p>
            <p>Date : 03/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>Code Bonus : 2 points</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 03/10/2022, 12:09 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
