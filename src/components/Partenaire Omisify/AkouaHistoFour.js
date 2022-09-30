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
            <p>
              Première Publication du Programme d'Affiliation Création de Site
              internet de Rasivy.com
            </p>
          </div>
          <div className="less-important">
            <p>Programme d'Affiliation : Création de Site internet</p>
            <p>
              lien de la publication :{" "}
              <a href="https://omisify.com" target="_blank" rel="noreferrer">
                https://facebook.com/post
              </a>
            </p>
            <p>Date : 29/09/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>Publication : 1 point</p>
                <p>1 like : 0.0001€</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 30/09/2022, 03:18 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
