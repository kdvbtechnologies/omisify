import { useNavigate } from "react-router-dom";
import Back from "../../Back/Back";

export default function Geolocation() {
  const navigate = useNavigate();

  return (
    <>
      <div className="geolocation">
        <div className="title">
          <p>Géolocalisation</p>
        </div>

        <div onClick={() => navigate(-1)}>
          <Back />
        </div>

        <div className="a">
          <p>Dernière connexion : 10/11/2022, 17:57</p>
          <p>Lieu : Brésil</p>
          <p>Ville : Fortaleza</p>
          <p>Adresse IP : 88.103.996.25</p>
        </div>
      </div>
    </>
  );
}
