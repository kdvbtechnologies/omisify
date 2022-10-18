import { NavLink, useNavigate } from "react-router-dom";

export default function Infos() {
  const navigate = useNavigate();

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif ',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="infos">
        <div className="title-main">
          <div className="title">
            <p>Informations personnelles</p>

            <NavLink to="/infos-update">
              <button>Modifier</button>
            </NavLink>
          </div>
        </div>

        <p>Noms de naissance : Kilendo Dingha Veil Brillant</p>
        <p>Genre : Homme</p>
        <p>Age : 22 ans</p>
        <p>Pays actuel : Brésil</p>
        <p>Pays de naissance : Congo</p>
        <p>Date de naissance : 10/02/2000</p>
        <p>Email : kilendodingha@gmail.com</p>
        <p>Méthode de paiement préféré : Western Union</p>
        <p>Code de Bienvenue : KDVB</p>
        <p>Groupe Whatsapp : https://</p>
        <p>Groupe Telegram : https://</p>
        <p>Numéro Whatsapp : +55122244555555</p>
        <p>Numéro Telegram : +55122244555555</p>
      </div>
    </div>
  );
}
