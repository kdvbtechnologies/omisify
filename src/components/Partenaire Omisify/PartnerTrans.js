import { useNavigate } from "react-router-dom";

export default function PartnerTrans() {
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
            <p>Administrateur : _ _ _</p>
          </div>
          <p>E-mail : _ _ _</p>
          <p>Date de création : _ _ _</p>
          <p>Compte Facebook : _ _ _</p>
          <p>Instagram : _ _ _</p>
          <p>Page Facebook : _ _ _</p>
          <p>Chaine Youtube : _ _ _</p>
          <p>Tik Tok : _ _ _</p>
          <p>Whatsapp : _ _ _</p>
          <p>Telegram : _ _ _</p>
          <p>Mentor : _ _ _</p>
          <p>Catégorie : _ _ _</p>
          <div className="b">
            <p>Dernière mise à jour de la page : _ _ _</p>
          </div>
        </div>
      </div>
    </div>
  );
}
