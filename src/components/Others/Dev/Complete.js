import { NavLink } from "react-router-dom";

export default function Complete() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <NavLink to="/after-dev">
          <button>Retour</button>
        </NavLink>
      </div>
      <div className="others">
        <p style={{ padding: "0px 20px" }}>Attention !</p>
        <p style={{ padding: "20px" }}>
          Toutes les Fonctionnalités présentes sur cette page fonctionne très
          bien mais il y'a certaines amélioration qui doivent etre apporté dans
          le futur et le développement de leur design n'est pas encore terminé.
          Vous pouvez les utiliser en attendant que le développement du design
          soit terminé
        </p>

        <div className="a">
          <div className="hr">
            <hr />
          </div>
          <NavLink className="navlink" to="/before-calcul-best-partner-bonus">
            <p>Bonus EP</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/before-calcul-comment">
            <p>Commentaire</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          {/* 
          <NavLink className="navlink" to="/before-calcul-e10k">
            <p>E10k</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/before-calcul-likes-comment">
            <p>Likes C</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/before-calcul-likes-publication">
            <p>Likes P</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/before-calcul-m10k">
            <p>M10k</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/before-calcul-message">
            <p>Message</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/before-calcul-mwi">
            <p>MWI</p>
          </NavLink>

          <div className="hr">
            <hr />
          </div>
          */}

          <NavLink className="navlink" to="/before-calcul-publication">
            <p>Publication</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
