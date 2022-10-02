import { useNavigate } from "react-router-dom";

export default function WilfriedHistoOne() {
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
              Première Pub du Programme d'Affiliation Devenir Partenaire Omisify
              de Omisify.com
            </p>
          </div>
          <div className="less-important">
            <p>Programme d'Affiliation : Devenir Partenaire Omisify</p>
            <p>
              lien de la publication :{" "}
              <a href="https://omisify.com" target="_blank" rel="noreferrer">
                https://facebook.com/post
              </a>
            </p>
            <p>Date : 27/09/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>Publication : 1 point</p>
                <p>228 likes : 0.0228€</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 02/10/2022, 01:59 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
