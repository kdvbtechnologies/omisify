import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InfosUpdate() {
  const [name, setname] = useState("");
  const [shortname, setshortname] = useState("");
  const [partnername, setpartnername] = useState("");
  const [genre, setgenre] = useState("");
  const [age, setage] = useState("");
  const [country, setcountry] = useState("");
  const [birthcountry, setbirthcountry] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [paymentmethod, setpaymentmethod] = useState("");
  const [email, setemail] = useState("");
  const [codewelcome, setcodewelcome] = useState("");
  const [groupwhatsapp, setgroupwhatsapp] = useState("");
  const [numberwhatsapp, setnumberwhatsapp] = useState("");
  const [grouptelegram, setgrouptelegram] = useState("");
  const [numbertelegram, setnumbertelegram] = useState("");
  const navigate = useNavigate();

  const getname = localstorage.getItem("https://omisify.com/name");
  const getshortname = localstorage.getItem("https://omisify.com/shortname");
  const getpartnername = localstorage.getItem(
    "https://omisify.com/partnername"
  );
  const getgenre = localstorage.getItem("https://omisify.com/genre");
  const getage = localstorage.getItem("https://omisify.com/age");
  const getcountry = localstorage.getItem("https://omisify.com/country");
  const getbirthcountry = localstorage.getItem(
    "https://omisify.com/birthcountry"
  );
  const getdateofbirth = localstorage.getItem(
    "https://omisify.com/dateofbirth"
  );
  const getpaymentmethod = localstorage.getItem(
    "https://omisify.com/paymentmethod"
  );
  const getemail = localstorage.getItem("https://omisify.com/email");
  const getcodewelcome = localstorage.getItem(
    "https://omisify.com/codewelcome"
  );
  const getgroupwhatsapp = localstorage.getItem(
    "https://omisify.com/groupwhatsapp"
  );
  const getgrouptelegram = localstorage.getItem(
    "https://omisify.com/grouptelegram"
  );
  const getnumberwhatsapp = localstorage.getItem(
    "https://omisify.com/numberwhatsapp"
  );
  const getnumbertelegram = localstorage.getItem(
    "https://omisify.com/numbertelegram"
  );

  async function Validate() {
    //
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="infos-update">
        <div className="title">
          <p>Modifications des informations personnelles</p>
        </div>

        <div className="a">
          {getname ? (
            <>
              <p>Noms de naissance</p>
              <input
                type="text"
                placeholder="Noms de naissance"
                value={getname}
                onChange={(e) => setname(e.target.value)}
                name="name"
              />
            </>
          ) : (
            <>
              <p>Noms de naissance</p>
              <input
                type="text"
                placeholder="Noms de naissance"
                value={name}
                onChange={(e) => setname(e.target.value)}
                name="name"
              />
            </>
          )}

          {getpartnername ? (
            <>
              <p>Noms principal</p>
              <input
                type="text"
                placeholder={partnername}
                value={partnername}
                onChange={(e) => setpartnername(e.target.value)}
                name="partnername"
              />
            </>
          ) : (
            <>
              <p>Noms principal</p>
              <input
                type="text"
                placeholder="Noms principal"
                value={partnername}
                onChange={(e) => setpartnername(e.target.value)}
                name="partnername"
              />
            </>
          )}

          {getshortname ? (
            <>
              <p>Noms court</p>
              <input
                type="text"
                placeholder={shortname}
                value={shortname}
                onChange={(e) => setshortname(e.target.value)}
                name="shortname"
              />
            </>
          ) : (
            <>
              <p>Noms court</p>
              <input
                type="text"
                placeholder="Noms court"
                value={shortname}
                onChange={(e) => setshortname(e.target.value)}
                name="shortname"
              />
            </>
          )}

          {getgenre ? (
            <>
              <p>Genre</p>
              <input
                type="text"
                placeholder={genre}
                value={genre}
                onChange={(e) => setgenre(e.target.value)}
                name="genre"
              />
            </>
          ) : (
            <>
              <p>Genre</p>
              <input
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e) => setgenre(e.target.value)}
                name="genre"
              />
            </>
          )}

          {getage ? (
            <>
              <p>Age</p>
              <input
                type="text"
                placeholder={age}
                value={age}
                onChange={(e) => setage(e.target.value)}
                name="age"
              />
            </>
          ) : (
            <>
              <p>Age</p>
              <input
                type="text"
                placeholder="Age"
                value={age}
                onChange={(e) => setage(e.target.value)}
                name="age"
              />
            </>
          )}

          {getcountry ? (
            <>
              <p>Pays actuel</p>
              <input
                type="text"
                placeholder="Pays actuel"
                value={country}
                onChange={(e) => setcountry(e.target.value)}
                name="country"
              />
            </>
          ) : (
            <>
              <p>Pays actuel</p>
              <input
                type="text"
                placeholder="Pays actuel"
                value={country}
                onChange={(e) => setcountry(e.target.value)}
                name="country"
              />
            </>
          )}

          {getbirthcountry ? (
            <>
              <p>Pays de naissance</p>
              <input
                type="text"
                placeholder="Pays de naissance"
                value={birthcountry}
                onChange={(e) => setbirthcountry(e.target.value)}
                name="birthcountry"
              />
            </>
          ) : (
            <>
              <p>Pays de naissance</p>
              <input
                type="text"
                placeholder="Pays de naissance"
                value={birthcountry}
                onChange={(e) => setbirthcountry(e.target.value)}
                name="birthcountry"
              />
            </>
          )}

          {getdateofbirth ? (
            <>
              <p>Date de naissance</p>
              <input
                type="text"
                placeholder="Date de naissance"
                value={dateofbirth}
                onChange={(e) => setdateofbirth(e.target.value)}
                name="dateofbirth"
              />
            </>
          ) : (
            <>
              <p>Date de naissance</p>
              <input
                type="text"
                placeholder="Date de naissance"
                value={dateofbirth}
                onChange={(e) => setdateofbirth(e.target.value)}
                name="dateofbirth"
              />
            </>
          )}

          {getemail ? (
            <>
              <p>Email</p>
              <input
                type="email"
                placeholder={email}
                value={email}
                onChange={(e) => setemail(e.target.value)}
                name="email"
              />
            </>
          ) : (
            <>
              <p>Email</p>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                name="email"
              />
            </>
          )}

          {getpaymentmethod ? (
            <>
              <p>Méthode de paiement préféré</p>
              <input
                type="text"
                placeholder={paymentmethod}
                value={paymentmethod}
                onChange={(e) => setpaymentmethod(e.target.value)}
                name="paymentmethod"
              />
            </>
          ) : (
            <>
              <p>Méthode de paiement préféré</p>
              <input
                type="text"
                placeholder="Méthode de paiement préféré"
                value={paymentmethod}
                onChange={(e) => setpaymentmethod(e.target.value)}
                name="paymentmethod"
              />
            </>
          )}

          {getcodewelcome ? (
            <>
              <p>Code de Bienvenue</p>
              <input
                type="text"
                placeholder={codewelcome}
                value={codewelcome}
                onChange={(e) => setcodewelcome(e.target.value)}
                name="codewelcome"
              />
            </>
          ) : (
            <>
              <p>Code de Bienvenue</p>
              <input
                type="text"
                placeholder="Code de Bienvenue"
                value={codewelcome}
                onChange={(e) => setcodewelcome(e.target.value)}
                name="codewelcome"
              />
            </>
          )}

          {getgroupwhatsapp ? (
            <>
              <p>Groupe Whatsapp</p>
              <input
                type="text"
                placeholder={groupwhatsapp}
                value={groupwhatsapp}
                onChange={(e) => setgroupwhatsapp(e.target.value)}
                name="groupwhatsapp"
              />
            </>
          ) : (
            <>
              <p>Groupe Whatsapp</p>
              <input
                type="text"
                placeholder="Groupe Whatsapp"
                value={groupwhatsapp}
                onChange={(e) => setgroupwhatsapp(e.target.value)}
                name="groupwhatsapp"
              />
            </>
          )}

          {getgrouptelegram ? (
            <>
              <p>Groupe Telegram</p>
              <input
                type="text"
                placeholder={grouptelegram}
                value={grouptelegram}
                onChange={(e) => setgrouptelegram(e.target.value)}
                name="grouptelegram"
              />
            </>
          ) : (
            <>
              <p>Groupe Telegram</p>
              <input
                type="text"
                placeholder="Groupe Telegram"
                value={grouptelegram}
                onChange={(e) => setgrouptelegram(e.target.value)}
                name="grouptelegram"
              />
            </>
          )}

          {getnumberwhatsapp ? (
            <>
              <p>Numéro Whatsapp</p>
              <input
                type="text"
                placeholder={numberwhatsapp}
                value={numberwhatsapp}
                onChange={(e) => setnumberwhatsapp(e.target.value)}
                name="numberwhatsapp"
              />
            </>
          ) : (
            <>
              <p>Numéro Whatsapp</p>
              <input
                type="text"
                placeholder="Numéro Whatsapp"
                value={numberwhatsapp}
                onChange={(e) => setnumberwhatsapp(e.target.value)}
                name="numberwhatsapp"
              />
            </>
          )}

          {getnumbertelegram ? (
            <>
              <p>Numéro Telegram</p>
              <input
                type="text"
                placeholder={numbertelegram}
                value={numbertelegram}
                onChange={(e) => setnumbertelegram(e.target.value)}
                name="numbertelegram"
              />
            </>
          ) : (
            <>
              <p>Numéro Telegram</p>
              <input
                type="text"
                placeholder="Numéro Telegram"
                value={numbertelegram}
                onChange={(e) => setnumbertelegram(e.target.value)}
                name="numbertelegram"
              />
            </>
          )}

          <button onClick={Validate}>Valider</button>
        </div>
      </div>
    </div>
  );
}
