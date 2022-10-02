import { useNavigate } from "react-router-dom";

export default function AkouaHistoSeven() {
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
              1 publication du programme d'affiliation Devenir Partenaire
              Omisify et Création de Site Internet, 1 message Whatsapp, 51
              commentaires et 7 messages Facebook
            </p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Création de Site internet; Devenir
              Partenaire Omisify
            </p>
            <p>Date : 01/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>51 commentaires : 51 points</p>
                <p>8 messages : 8 points</p>
                <p>2 publications : 2 points</p>
                <p>2 likes : 0.0002€</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 01/10/2022, 23:01 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
