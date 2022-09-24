import { NavLink } from "react-router-dom";
import Programme from "../Programme";
import DeborahNavigation from "./DeborahNavigation";

export default function DeborahKongoloAction() {
  return (
    <>
      <DeborahNavigation />
      <div className="introduce">
        <div className="profil">
          <div className="partner-profil">
            <h1>@Deborah Kongolo</h1>
            <p>Partenaire Omisify</p>
            <hr />
            <hr />
            <br />
          </div>
          <div className="partner-myprofil">
            <p>Noms de naissance : Deborah Kongolo</p>
            <p>Sexe : Femme</p>
            <p>Pays : RDC</p>
            <p>Age : 24 ans</p>
            <p>Date d'inscription : 24/09/2022</p>
          </div>
        </div>
        <div className="posts">
          <div className="post">
            <h1>Mes Points</h1>
            <li>Commentaire = 0 point</li>
            <li>Publication groupe = 0 point</li>
            <li>Message/utilisateur = 0 point</li>
            <li>Message/page = 0 point</li>
            <li>Invitation = 0 point</li>
            <li>Total des points : 0 point = 0€</li>
          </div>
          <p className="gain">Gains : 0€</p>
        </div>
        <NavLink to="/deborah-contact">
          <p className="remuneration" align="center">
            Demander ma rémunération
          </p>
        </NavLink>
      </div>
      <Programme />
    </>
  );
}
