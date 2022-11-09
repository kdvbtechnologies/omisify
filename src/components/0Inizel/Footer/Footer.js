import { NavLink } from "react-router-dom";

export default function FooterIN() {
  return (
    <>
      <div className="footer-in">
        <div className="nav">
          <p>© 2022 inizel</p>
          <NavLink className="navlink">
            <p>Connexion</p>
          </NavLink>
          <NavLink className="navlink">
            <p>Historique de recherche</p>
          </NavLink>
          <NavLink className="navlink">
            <p>Filtre adulte</p>
          </NavLink>
          <NavLink className="navlink">
            <p>Partenaire</p>
          </NavLink>
          <NavLink className="navlink">
            <p>inizel Apparition</p>
          </NavLink>
          <NavLink className="navlink">
            <p>Service client</p>
          </NavLink>
          <NavLink className="navlink">
            <p>Condition d'utilisation</p>
          </NavLink>
          <NavLink className="navlink">
            <p>Mentions Légale</p>
          </NavLink>
          <NavLink className="navlink">
            <p>Politique de Confidentialité</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
