import { NavLink } from "react-router-dom";

export default function Connexion() {
  return (
    <>
      <div
        className="connexion"
        style={{ textAlign: "center", paddingTop: "200px" }}
      >
        <p>Portail des Partenaires Omisify</p>
        <h1>Connexion</h1>
        <input type="text" placeholder="E-mail" />
        <NavLink to="/partner">
          <button>Se connecter</button>
        </NavLink>
      </div>
    </>
  );
}
