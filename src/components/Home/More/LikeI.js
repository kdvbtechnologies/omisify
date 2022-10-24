import { NavLink } from "react-router-dom";

export default function LikeI() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

  return (
    <div className="like-i">
      <div className="like-i-a">
        <p>Influenceur</p>
        <div className="hr">
          <hr />
        </div>

        <div className="hr">
          <hr />
        </div>
      </div>

      <div className="shrink">
        <div className="like-i-b">
          <i>Like</i>
        </div>
        <div className="like-i-c">
          <p>Laisser vos abonnés vous faire gagner de l'argent</p>
        </div>

        <div className="like-i-d">
          <p>
            Avec Omisify vous gagnez de l'argent lorsque vos abonnés like votre
            publication sur les réseaux sociaux
          </p>
          <p>
            Avec Omisify vous gagnez de l'argent lorsque vos abonnés like votre
            photo
          </p>
          <p>
            Avec Omisify vous gagnez de l'argent lorsque vos abonnés like votre
            vidéo
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
    </div>
  );
}
