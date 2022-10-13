import { useNavigate } from "react-router-dom";

export default function AkouaHistoTwenty() {
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
            <p>10 M10k, 2 MWI, 3 publications, 1 E-mail et 31 commentaires</p>
          </div>
          <div className="less-important">
            <p>
              Programme d'Affiliation : Devenir Partenaire Omisify; Création de
              site internet
            </p>
            <p>Date : 12/10/2022</p>
          </div>

          <div className="historic-money-center">
            <div className="historic-money">
              <div className="a">
                <p>Gains :</p>
              </div>
              <div className="b">
                <p>10 M10k : 10 point(s)</p>
                <p>2 MWI : 10 point(s)</p>
                <p>3 publications : 3 point(s)</p>
                <p>1 E-mail : 1 point(s)</p>
                <p>31 commentaires : 31 point(s)</p>
              </div>
            </div>
          </div>

          <div className="recap">
            <p>
              Dernière mise à jour du récapitulatif : 13/10/2022, 05:10 (Heure
              de Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
