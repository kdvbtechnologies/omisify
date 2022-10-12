import { useNavigate } from "react-router-dom";

export default function AkouaHistoNineteen() {
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
              31 commentaires, 7 messages avec interaction (MWI), 252 messages
              et 14 publications
            </p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Devenir Partenaire Omisify; Création de
              site internet
            </p>
            <p>Date : 11/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>252 messages : 25.2 point(s)</p>
                <p>7 MWI : 35 point(s)</p>
                <p>31 commentaires : 31 point(s)</p>
                <p>14 publications : 14 points</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 12/10/2022, 04:49 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
