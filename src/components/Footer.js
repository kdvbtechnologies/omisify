import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-nav">
          <p>© 2022 Omisify</p>
          <NavLink className="navlink" to="/conditions">
            <p>Conditions d'utilisation</p>
          </NavLink>
          <NavLink className="navlink" to="/politique">
            <p>Politique de confidentialité</p>
          </NavLink>
          <NavLink className="navlink" to="/mentions">
            <p>Mentions légales</p>
          </NavLink>
        </div>
      </footer>
    </>
  );
}
