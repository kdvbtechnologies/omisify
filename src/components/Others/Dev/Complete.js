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
      <p>Attention !</p>
      <p>
        Toutes les Fonctionnalités présentes sur cette page fonctionne très bien
        mais il y'a certaines amélioration qui doivent etre apporté dans le
        futur et le développement de leur design n'est pas encore terminé. Vous
        pouvez les utiliser en attendant que le developpement du design soit
        terminé
      </p>

      <NavLink to="/before-calcul-comment">
        <p>Commentaires</p>
      </NavLink>
    </div>
  );
}
