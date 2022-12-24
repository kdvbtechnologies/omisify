import { NavLink, useNavigate } from "react-router-dom";

export default function Historic() {
  const navigate = useNavigate();

  return (
    <>
      <div className="historic">
        <div className="title">
          <svg
            onClick={() => navigate(-1)}
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="20px"
            cursor="pointer"
            enableBackground="new 0 0 486.975 486.975"
            version="1.1"
            viewBox="0 0 486.975 486.975"
            xmlSpace="preserve"
          >
            <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
          </svg>
          <p>Historique</p>
        </div>
        {/* title */}

        <div className="hr">
          <hr />
        </div>

        <NavLink className="navlink" to="/">
          <div className="a">
            <p>
              [Nouveau] 12/10/2022 - Vous avez reçu 100 points juste pour avoir
              ajouter le logo de la marque Omisify à votre photo de profil
            </p>
          </div>
        </NavLink>
        <div className="hr">
          <hr />
        </div>
      </div>
    </>
  );
}
