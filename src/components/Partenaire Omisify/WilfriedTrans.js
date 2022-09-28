import { useNavigate } from "react-router-dom";

export default function WilfriedTrans() {
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
      <div className="transparence">
        <div className="transparence-title">
          <p>Informations de la Page Partenaire </p>
        </div>
        <div className="transparence-desc">
          <div className="a">
            <p>Administrateur : Wilfried MBoundja</p>
          </div>
          <p>E-mail : _ _ _</p>
          <p>Date de création : 26/09/2022</p>
          <div className="b">
            <p>
              Dernière mise à jour de la page : 27/09/2022, 15:01 (Heure de
              Brasilia)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
