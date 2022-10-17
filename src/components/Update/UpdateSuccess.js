import { NavLink } from "react-router-dom";
import LoginNav from "../Auth/LoginNav";

export default function UpdateSuccess() {
  return (
    <>
      <LoginNav />
      <p>Terminé !</p>
      <p>Le téléchargement de la dernière mise à jour à réussi</p>
      <NavLink to="/partner">
        <button>Retourner sur la page d'accueil</button>
      </NavLink>
    </>
  );
}
