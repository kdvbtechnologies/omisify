import { useState } from "react";
import { NavLink } from "react-router-dom";
import Back from "../Back/Back";
import PopupMaintenance from "../Home Omisify/Maintenance/PopupMaintenance";

export default function Infos() {
  // const date = localStorage.getItem("https://omisify.com/date");
  const getname = localStorage.getItem("https://omisify.com/name");
  //const getshortname = localStorage.getItem("https://omisify.com/shortname");
  const getpartnername = localStorage.getItem(
    "https://omisify.com/partnername"
  );

  /*
  const getgenre = localStorage.getItem("https://omisify.com/genre");
  const getage = localStorage.getItem("https://omisify.com/age");
  const getcountry = localStorage.getItem("https://omisify.com/country");
  const getbirthcountry = localStorage.getItem(
    "https://omisify.com/birthcountry"
  );
  const getdateofbirth = localStorage.getItem(
    "https://omisify.com/dateofbirth"
  );
  */

  const getemail = localStorage.getItem("https://omisify.com/email");

  /*
  const getcodewelcome = localStorage.getItem(
    "https://omisify.com/codewelcome"
  );
  const getpaymentmethod = localStorage.getItem(
    "https://omisify.com/paymentmethod"
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
  */

  const [popupMaintenance, setPopupMaintenance] = useState(false);
  function Maintenance() {
    setPopupMaintenance(!popupMaintenance);
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif ',
  };

  return (
    <div style={family}>
      <div className="infos">
        <div className="title-main">
          <div className="title">
            <p>Informations personnelles</p>

            <NavLink to="/infos-update">
              <button>Modifier</button>
            </NavLink>
          </div>
          {/* title */}
        </div>
        {/* title-main */}

        {/*  <div className="back-btn">
      </div> */}
        <NavLink to="/settings-new-omisify">
          <Back />
        </NavLink>

        <p>Noms de naissance : {getname}</p>
        <p>Noms principal : {getpartnername}</p>

        {/*
        <p>Genre : {getgenre}</p>
        <p>Age : {getage}</p>
        <p>Pays actuel : {getcountry}</p>
        <p>Pays de naissance : {getbirthcountry}</p>
        <p>Date de naissance : {getdateofbirth}</p>
        */}
        <p>Email : {getemail}</p>
        {/*
        <p>Noms court : {getshortname}</p>
        <p>Méthode de paiement préféré : {getpaymentmethod}</p>
        <p>Code de Bienvenue : {getcodewelcome}</p>
        <p>Groupe Telegram : {getgrouptelegram}</p>
        <p>Groupe Whatsapp : {getgroupwhatsapp}</p>
        <p>Numéro Telegram : {getnumbertelegram}</p>
        <p>Numéro Whatsapp : {getnumberwhatsapp}</p>
       

        {date && (
          <>
            <p>Dernière actualisation des points : {date}</p>
          </>
        )}
         */}
      </div>

      {popupMaintenance && (
        <div onClick={Maintenance}>
          <PopupMaintenance />
        </div>
      )}
    </div>
  );
}
