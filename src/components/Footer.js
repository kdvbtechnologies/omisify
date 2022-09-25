import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-link">
          <NavLink className="footer-linkk" to="/conditions">
            <p>Conditions d'utilisation</p>
          </NavLink>
          <NavLink className="footer-linkk" to="/politique">
            <p>Politique de confidentialité</p>
          </NavLink>
          <NavLink className="footer-linkk" to="/mentions">
            <p>Mentions légales</p>
          </NavLink>
        </div>
        <p>© 2022 Omisify</p>
      </footer>
    </>
  );
}
