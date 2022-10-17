import { NavLink } from "react-router-dom";
import PartnerNav from "./PartnerNav";

export default function UpdateSeptember() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <PartnerNav />
      <div className="update-point">
        <div className="update-title">
          <p>Actualiser vos points</p>
        </div>
        <p>Choisissez une option :</p>
        <NavLink className="navlink" to="/secure-comment">
          <p>Commentaire</p>
        </NavLink>
        <NavLink className="navlink" to="/secure-email">
          <p>Email</p>
        </NavLink>
        <NavLink className="navlink" to="/secure-like-comment">
          <p>Like (commentaire)</p>
        </NavLink>
        <NavLink className="navlink" to="/secure-like-publication">
          <p>Like (publication)</p>
        </NavLink>
        <NavLink className="navlink" to="/secure-m10k">
          <p>M10k</p>
        </NavLink>
        <NavLink className="navlink" to="/secure-message">
          <p>Message</p>
        </NavLink>
        <NavLink className="navlink" to="/secure-mwi">
          <p>MWI</p>
        </NavLink>
        <NavLink className="navlink" to="/secure-publication">
          <p>Publication</p>
        </NavLink>
        <NavLink className="navlink" to="/secure-pwi">
          <p>PWI</p>
        </NavLink>
      </div>
    </div>
  );
}
