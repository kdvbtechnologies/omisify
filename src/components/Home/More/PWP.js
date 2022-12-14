import { NavLink } from "react-router-dom";

export default function PWP() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

  return (
    <div className="email-shrink">
      <div className="email-a">
        <i>PWP</i>
      </div>

      <div className="email-c">
        <p></p>
        <p>
          Insérer juste le lien d'affiliation dans votre publication et gagnez
          de l'argent juste en ajoutant le lien d'affiliation à votre
          publication, faites-le et gagner de l'argent avec Omisify
        </p>
        <p>
          Ajouter juste le lien à votre photo, ajouter juste le lien à votre
          vidéo et gagner de l'argent avec Omisify
        </p>
        <div className="align-button">
          {userId && shortname && partnername && name ? (
            <>
              <NavLink to="/partner">
                <button>Devenir Partenaire Omisify</button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signup">
                <button>Devenir Partenaire Omisify</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
