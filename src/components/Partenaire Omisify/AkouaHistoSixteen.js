import { useNavigate } from "react-router-dom";

export default function AkouaHistoSixteen() {
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
            <p> Samedi 08 Octobre • 244 messages et 5 commentaires</p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Devenir Partenaire Omisify; Création de
              site internet
            </p>
            <p>Date : 08/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>244 messages : 244 point(s)</p>
                <p>5 commentaires : 5 point(s)</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 08/10/2022, 20:05 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
