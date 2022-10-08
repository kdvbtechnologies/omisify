import { useNavigate } from "react-router-dom";

export default function WilfriedHistoSix() {
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
            <p>Vendredi 07 Octobre • 1 commentaire publié</p>
          </div>
          <div className="less-important">
            <p>Programme d'Affiliation : Devenir Partenaire Omisify</p>
            <p>Date : 07/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>1 commentaire : 1 point</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 08/10/2022, 21:00 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
