import { NavLink } from "react-router-dom";

export default function UpdatePoint() {
  /*
  
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
  
  
  */
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <NavLink to="/secure-menu">
        <div className="back-btn">
          <button>Retour</button>
        </div>
      </NavLink>
      <div className="update-point">
        <div className="update-title">
          <p>Actualisation des points</p>
        </div>
        <p>Choisir une option :</p>
        <NavLink className="navlink" to="/secure-update-comment">
          <p>Commentaire</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-e10k">
          <p>E10k</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-email">
          <p>Email</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-likecomment">
          <p>Likes (commentaire)</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-likepublication">
          <p>Likes (publication)</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-m10k">
          <p>M10k</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-message">
          <p>Message</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-mwi">
          <p>MWI</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-publication">
          <p>Publication</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-pwi">
          <p>PWI</p>
        </NavLink>

        <NavLink className="navlink" to="/secure-update-pwp">
          <p>PWP</p>
        </NavLink>
      </div>
    </div>
  );
}
