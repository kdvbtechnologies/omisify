import { useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function SettingsInfosUpdate() {
  const navigate = useNavigate();

  return (
    <>
      <div className="settings-infos-update">
        <div className="title">
          <p>Modifications des informations de l'entreprise</p>
        </div>

        <div onClick={() => navigate(-1)}>
          <Back />
        </div>

        <div className="a">
          <div className="b">
            <p>Noms de l'entreprise</p>
            <input type="text" placeholder="Rinabel Group" />
          </div>

          <div className="b">
            <p>Email de l'entreprise</p>
            <input type="text" placeholder="group@rinabelgroup.com" />
          </div>

          <div className="b">
            <p>Téléphone</p>
            <input type="number" placeholder="+55164208822" />
          </div>

          <div className="b">
            <p>Date de création</p>
            <input type="text" placeholder="22/05/1994" />
          </div>

          <div className="b">
            <p>Adresse du Siège social</p>
            <input
              type="text"
              placeholder="55 avenue delabelle, Fortaleza, Brésil"
            />
          </div>

          <div className="b">
            <p>Site internet</p>
            <input type="text" placeholder="https://rinabelgroup.com" />
          </div>

          <button>Valider</button>
        </div>
      </div>
    </>
  );
}
