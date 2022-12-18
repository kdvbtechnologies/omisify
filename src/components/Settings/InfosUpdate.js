import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateInfos } from "../../feature/infos.slice";
import Loader from "../Partenaire Omisify/Loader";
import { useDispatch } from "react-redux";
import Back from "../Back/Back";
import PopupMaintenance from "../Home Omisify/Maintenance/PopupMaintenance";

export default function InfosUpdate() {
  const getname = localStorage.getItem("https://omisify.com/name");
  // const getshortname = localStorage.getItem("https://omisify.com/shortname");
  const userId = localStorage.getItem("https://omisify.com/userId");
  const dispatch = useDispatch();

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
  const getpaymentmethod = localStorage.getItem(
    "https://omisify.com/paymentmethod"
  );
  
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
*/

  const [name, setname] = useState(getname);
  //const [shortname, setshortname] = useState(getshortname);
  const [partnername, setpartnername] = useState(getpartnername);
  /*
  const [genre, setgenre] = useState(getgenre);
  const [age, setage] = useState(getage);
  const [country, setcountry] = useState(getcountry);
  const [birthcountry, setbirthcountry] = useState(getbirthcountry);
  const [dateofbirth, setdateofbirth] = useState(getdateofbirth);
  */
  const [email, setemail] = useState(getemail);
  /*
  const [paymentmethod, setpaymentmethod] = useState(getpaymentmethod);
  const [codewelcome, setcodewelcome] = useState(getcodewelcome);
  const [groupwhatsapp, setgroupwhatsapp] = useState(getgroupwhatsapp);
  const [numberwhatsapp, setnumberwhatsapp] = useState(getnumberwhatsapp);
  const [grouptelegram, setgrouptelegram] = useState(getgrouptelegram);
  const [numbertelegram, setnumbertelegram] = useState(getnumbertelegram);
  */
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();

    const data = {
      name,
      //shortname,
      partnername,
      /*
      genre,
      age,
      country,
      birthcountry,
      dateofbirth,
      */
      email,
      /*
      paymentmethod,
      codewelcome,
      groupwhatsapp,
      grouptelegram,
      numbertelegram,
      numberwhatsapp,
      */
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

  const [popupMaintenance, setPopupMaintenance] = useState(false);
  function Maintenance() {
    setPopupMaintenance(!popupMaintenance);
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="infos-update">
        <div className="title">
          <p>Modifications des informations personnelles</p>
        </div>

        <div onClick={() => navigate(-1)}>
          <Back />
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

          {/*
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
           */}

          {/*
          {getgenre ? (
            <>
              <p>Genre</p>
              <select
                value={genre}
                onChange={(e) => setgenre(e.target.value)}
                name="genre"
                id="genre"
              >
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Trans">Trans</option>
              </select>
            </>
          ) : (
            <>
              <p>Genre</p>
              <select
                value={genre}
                onChange={(e) => setgenre(e.target.value)}
                name="genre"
                id="genre"
              >
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Trans">Trans</option>
              </select>
            </>
          )}

          {getage ? (
            <>
              <p>Age</p>
              <select
                value={age}
                onChange={(e) => setage(e.target.value)}
                name="age"
                id="age"
              >
                <option value="10">10 ans</option>
                <option value="11">11 ans</option>
                <option value="12">12 ans</option>
                <option value="13">13 ans</option>
                <option value="14">14 ans</option>
                <option value="15">15 ans</option>
                <option value="16">16 ans</option>
              </select>
            </>
          ) : (
            <>
              <p>Age</p>
              <select
                value={age}
                onChange={(e) => setage(e.target.value)}
                name="age"
                id="age"
              >
                <option value="10">10 ans</option>
                <option value="11">11 ans</option>
                <option value="12">12 ans</option>
                <option value="13">13 ans</option>
                <option value="14">14 ans</option>
                <option value="15">15 ans</option>
                <option value="16">16 ans</option>
              </select>
            </>
          )}

          {getcountry ? (
            <>
              <p>Pays actuel</p>
              <select
                value={country}
                onChange={(e) => setcountry(e.target.value)}
                name="country"
                id="country"
              >
                <option value="Brésil">Brésil</option>
                <option value="Congo">Congo</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Cameroun">Cameroun</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Guinée Équatoriale">Guinée Équatoriale</option>
                <option value="Inde">Inde</option>
                <option value="USA">USA</option>
              </select>
            </>
          ) : (
            <>
              <p>Pays actuel</p>
              <select
                value={country}
                onChange={(e) => setcountry(e.target.value)}
                name="country"
                id="country"
              >
                <option value="Brésil">Brésil</option>
                <option value="Congo">Congo</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Cameroun">Cameroun</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Guinée Équatoriale">Guinée Équatoriale</option>
                <option value="Inde">Inde</option>
                <option value="USA">USA</option>
              </select>
            </>
          )}

          {getbirthcountry ? (
            <>
              <p></p>
              <input type="text" placeholder="Pays de naissance" />

              <p>Pays de naissance</p>
              <select
                value={birthcountry}
                onChange={(e) => setbirthcountry(e.target.value)}
                name="birthcountry"
                id="birthcountry"
              >
                <option value="Brésil">Brésil</option>
                <option value="Congo">Congo</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Cameroun">Cameroun</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Guinée Équatoriale">Guinée Équatoriale</option>
                <option value="Inde">Inde</option>
                <option value="USA">USA</option>
              </select>
            </>
          ) : (
            <>
              <p>Pays de naissance</p>
              <select
                value={birthcountry}
                onChange={(e) => setbirthcountry(e.target.value)}
                name="birthcountry"
                id="birthcountry"
              >
                <option value="Brésil">Brésil</option>
                <option value="Congo">Congo</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Cameroun">Cameroun</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Guinée Équatoriale">Guinée Équatoriale</option>
                <option value="Inde">Inde</option>
                <option value="USA">USA</option>
              </select>
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
          */}
          <p onClick={Maintenance}>..</p>

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

          {/* 
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
          */}

          <p onClick={Maintenance}>..</p>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Validate}>Valider</button>
            </>
          )}
        </div>
      </div>

      {popupMaintenance && (
        <div onClick={Maintenance}>
          <PopupMaintenance />
        </div>
      )}
    </div>
  );
}
