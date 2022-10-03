import { useNavigate } from "react-router-dom";

export default function ClaudiaHistoOne() {
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
              Le Code Bonus Kamagate_djeny a été appliqué à votre Page
              Partenaire
            </p>
          </div>
          <div className="less-important">
            <p>Code Bonus : Kamagate_djeny</p>
            <p>Date : 03/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>Bonus de Bienvenue : 100 points</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 03/10/2022, 12:01 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
