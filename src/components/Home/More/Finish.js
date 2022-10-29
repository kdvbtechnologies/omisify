import { NavLink } from "react-router-dom";

export default function Finish() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

  return (
    <>
      <div className="email-shrink">
        <div className="email-c">
          <p>
            Devenez Partenaire Omisify, Travaillez à n'importe quel moment et
            Gagnez de l'argent avec Omisify
          </p>
          <p>
            Omisify a réunie toutes les conditions pour vous permettre de
            transformer un simple complément de revenue en succèss incroyable
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
    </>
  );
}
