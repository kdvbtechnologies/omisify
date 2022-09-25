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
            <h1>Points</h1>
            <li>Commentaires = 0 Point</li>
            <li>Publications = 0 Point</li>
            <li>Messages = 0 Point</li>
            <li>Invitations = 0 Point</li>
            <li>Likes = 0 Point</li>
            <li>Total des Points : 0 Point = 0€</li>
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
