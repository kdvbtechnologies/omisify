import { NavLink } from "react-router-dom";

export default function Connexion() {
  return (
    <>
      <div className="connexion">
        <p>Portail des Partenaires Omisify</p>
        <h1>Connexion</h1>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Mot de passe" />
        <NavLink to="/partner">
          <button>Se connecter</button>
        </NavLink>
      </div>
    </>
  );
}
