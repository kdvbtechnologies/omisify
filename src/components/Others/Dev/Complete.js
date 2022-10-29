import { NavLink, useNavigate } from "react-router-dom";

export default function Complete() {
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
      <p>Attention !</p>
      <p>
        Toutes les Fonctionnalités présentes sur cette page fonctionne très bien
        mais le développement de leur design n'est pas encore terminé. Vous
        pouvez les utiliser en attendant que le developpement du design soit
        terminé
      </p>

      <NavLink>
        <p>aaa</p>
      </NavLink>

      <NavLink>
        <p>bbb</p>
      </NavLink>
    </div>
  );
}
