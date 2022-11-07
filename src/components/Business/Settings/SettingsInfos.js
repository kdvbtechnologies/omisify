import { NavLink, useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function SettingsInfos() {
  const navigate = useNavigate();

  return (
    <>
      <div className="settings-infos-b">
        <div className="title-main">
          <div className="title">
            <p>Informations de l'entreprise</p>

            <NavLink to="/settings-infos-update">
              <button>Modifier</button>
            </NavLink>
          </div>
        </div>

        <div onClick={() => navigate(-1)}>
          <Back />
        </div>

        <div className="a">
          <p>Noms de l'entreprise : Rinabel Group</p>
          <p>Email : group@rinabelgroup.com</p>
          <p>Téléphone : +55164208822</p>
          <p>Date de création : 22/05/1994</p>
          <p>
            Adresse du Siège social : 55 avenue delabelle, Fortaleza, Brésil
          </p>
          <p>Site internet : https://rinabelgroup.com</p>
        </div>
      </div>
    </>
  );
}
