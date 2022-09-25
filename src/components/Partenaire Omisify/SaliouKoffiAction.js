import { NavLink } from "react-router-dom";
import Programme from "../Programme";
import SaliouNavigation from "./SaliouNavigation";

export default function SaliouKoffiAction() {
  return (
    <>
      <SaliouNavigation />
      <div className="introduce">
        <div className="profil">
          <div className="partner-profil">
            <h1>@Saliou Koffi</h1>
            <p>Partenaire Omisify</p>
            <hr />
            <hr />
            <br />
          </div>
          <div className="partner-myprofil">
            <p>Noms de naissance : Saliou Koffi Jean Donatien</p>
            <p>Sexe : Homme</p>
            <p>Pays : Côte d'Ivoire</p>
            <p>Age : 33 ans</p>
            <p>Date d'inscription : 23/09/2022</p>
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
        <NavLink to="/saliou-contact">
          <p className="remuneration" align="center">
            Demander ma rémunération
          </p>
        </NavLink>
      </div>
      <Programme />
    </>
  );
}
