import { NavLink } from "react-router-dom";

export default function BestPartnerBonusSuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="welcome-bonus">
        <div className="title">
          <p>Demande Envoyé !</p>
        </div>
        <p style={{ padding: "0px 10px", fontSize: "17px" }}>
          Votre demande du Bonus d'Excellent Partenaire a été envoyé avec success !
        </p>
        <p style={{ padding: "0px 10px", fontSize: "17px" }}>
          Status : En attente de validation
        </p>

        <NavLink to="/bonus">
          <button>Terminé</button>
        </NavLink>
      </div>
    </div>
  );
}
