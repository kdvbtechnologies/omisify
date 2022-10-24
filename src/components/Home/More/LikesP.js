import { NavLink } from "react-router-dom";

export default function LikesP() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

  return (
    <div className="email-shrink">
      <div className="email-a">
        <i>Likes P</i>
      </div>

      <div className="email-c">
        <p>
          Même si vous n'êtes pas influenceur, Omisify vous donne la possibilité
          de gagner de l'argent lorsque vos amis like votre publication, like
          votre photo, like votre vidéo
        </p>
        <p>Commencer maintenant et gagnez de l'argent avec Omisify</p>
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
