import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateInfos } from "../../feature/infos.slice";
import Loader from "../Partenaire Omisify/Loader";
import { useDispatch } from "react-redux";

export default function InfosUpdate() {
  const getname = localStorage.getItem("https://omisify.com/name");
  const getshortname = localStorage.getItem("https://omisify.com/shortname");
  const userId = localStorage.getItem("https://omisify.com/userId");
  const dispatch = useDispatch();

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

  const [name, setname] = useState(getname);
  const [shortname, setshortname] = useState(getshortname);
  const [partnername, setpartnername] = useState(getpartnername);
  const [genre, setgenre] = useState(getgenre);
  const [age, setage] = useState(getage);
  const [country, setcountry] = useState(getcountry);
  const [birthcountry, setbirthcountry] = useState(getbirthcountry);
  const [dateofbirth, setdateofbirth] = useState(getdateofbirth);
  const [paymentmethod, setpaymentmethod] = useState(getpaymentmethod);
  const [email, setemail] = useState(getemail);
  const [codewelcome, setcodewelcome] = useState(getcodewelcome);
  const [groupwhatsapp, setgroupwhatsapp] = useState(getgroupwhatsapp);
  const [numberwhatsapp, setnumberwhatsapp] = useState(getnumberwhatsapp);
  const [grouptelegram, setgrouptelegram] = useState(getgrouptelegram);
  const [numbertelegram, setnumbertelegram] = useState(getnumbertelegram);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();

    const data = {
      name,
      shortname,
      partnername,
      genre,
      age,
      country,
      birthcountry,
      dateofbirth,
      paymentmethod,
      email,
      codewelcome,
      groupwhatsapp,
      grouptelegram,
      numbertelegram,
      numberwhatsapp,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));
      })
      .catch((err) => console.log(err));
    window.location = "/infos-update-success";
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
                value={name}
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
                placeholder="Noms principal"
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
                placeholder="Noms court"
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
                placeholder="Genre"
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
                placeholder="Age"
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
                placeholder="E-mail"
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
                placeholder="Méthode de paiement préféré"
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
                placeholder="Code de Bienvenue"
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

          {getgrouptelegram ? (
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

          {getgroupwhatsapp ? (
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

          {getnumbertelegram ? (
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

          {getnumberwhatsapp ? (
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

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Validate}>Valider</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
