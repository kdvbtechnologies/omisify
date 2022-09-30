import { useNavigate } from "react-router-dom";

export default function AkouaHistoFour() {
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
            <p>89 Commentaires et 1 Publication Facebook</p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Création de Site internet; Devenir
              Partenaire Omisify
            </p>
            <p>Date : 30/09/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>Publication : 1 point</p>
                <p>1 like : 0.0001€</p>
                <p>89 commentaires : 89 points</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 30/09/2022, 14:07 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
