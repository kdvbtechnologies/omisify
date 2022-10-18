import { NavLink, useNavigate } from "react-router-dom";

export default function Infos() {
  const navigate = useNavigate();
  const getname = localStorage.getItem("https://omisify.com/name");
  const getshortname = localStorage.getItem("https://omisify.com/shortname");
  const getpartnername = localStorage.getItem(
    "https://omisify.com/partnername"
  );
  const getgenre = localStorage.getItem("https://omisify.com/genre");
  const getage = localStorage.getItem("https://omisify.com/age");
  const getcountry = localStorage.getItem("https://omisify.com/country");
  const getbirthcountry = localStorage.getItem(
    "https://omisify.com/birthcountry"
  );
  const getdateofbirth = localStorage.getItem(
    "https://omisify.com/dateofbirth"
  );
  const getpaymentmethod = localStorage.getItem(
    "https://omisify.com/paymentmethod"
  );
  const getemail = localStorage.getItem("https://omisify.com/email");
  const getcodewelcome = localStorage.getItem(
    "https://omisify.com/codewelcome"
  );
  const getgroupwhatsapp = localStorage.getItem(
    "https://omisify.com/groupwhatsapp"
  );
  const getgrouptelegram = localStorage.getItem(
    "https://omisify.com/grouptelegram"
  );
  const getnumberwhatsapp = localStorage.getItem(
    "https://omisify.com/numberwhatsapp"
  );
  const getnumbertelegram = localStorage.getItem(
    "https://omisify.com/numbertelegram"
  );

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

        <p>Noms de naissance : {getname}</p>
        <p>Noms principal : {getshortname}</p>
        <p>Noms court : {getpartnername}</p>
        <p>Genre : {getgenre}</p>
        <p>Age : {getage}</p>
        <p>Pays actuel :{getcountry}</p>
        <p>Pays de naissance : {getbirthcountry}</p>
        <p>Date de naissance : {getdateofbirth}</p>
        <p>Email : {getemail}</p>
        <p>Méthode de paiement préféré : {getpaymentmethod}</p>
        <p>Code de Bienvenue : {getcodewelcome}</p>
        <p>Groupe Whatsapp : {getgroupwhatsapp}</p>
        <p>Groupe Telegram : {getgrouptelegram}</p>
        <p>Numéro Whatsapp : {getnumberwhatsapp}</p>
        <p>Numéro Telegram : {getnumbertelegram}</p>
      </div>
    </div>
  );
}
