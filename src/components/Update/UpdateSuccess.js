import { NavLink } from "react-router-dom";
import LoginNav from "../Auth/LoginNav";

export default function UpdateSuccess() {
  return (
    <>
      <LoginNav />
      <div className="update-success">
        <div className="title">
          <p>Terminé !</p>
        </div>

        <div className="a">
          <p>Le téléchargement de la dernière mise à jour à réussi</p>
          <NavLink to="/partner">
            <button>Retourner sur la page d'accueil</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
