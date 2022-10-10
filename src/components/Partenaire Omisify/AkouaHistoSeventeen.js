import { useNavigate } from "react-router-dom";

export default function AkouaHistoSeventeen() {
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
              2e Dimanche du mois d'Octobre • 8 messages avec interaction (MWI),
              120 messages, 6 commentaires et 8 publications
            </p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Devenir Partenaire Omisify; Création de
              site internet
            </p>
            <p>Date : 09/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>120 messages : 12 point(s)</p>
                <p>8 MWI : 40 point(s)</p>
                <p>6 commentaires : 6 point(s)</p>
                <p>8 publications : 8 points</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 10/10/2022, 04:52 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
