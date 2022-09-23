import { NavLink } from "react-router-dom";
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
          </div>
        </div>
        <div className="posts">
          <div className="post">
            <h1>Mes Points</h1>
            <li>Commentaire = 0 point</li>
            <li>Publication groupe = 0 point</li>
            <li>Message/utilisateur = 0 point</li>
            <li>Message/page = 0 point</li>
            <li>Affilié = 0 point</li>
            <li>Total des points : 0 point = 0€</li>
          </div>
          <p className="gain">Gains : 0€</p>
        </div>
        <NavLink to="/saliou-contact">
          <p className="remuneration" align="center">
            Demander ma rémunération
          </p>
        </NavLink>
      </div>
    </>
  );
}
