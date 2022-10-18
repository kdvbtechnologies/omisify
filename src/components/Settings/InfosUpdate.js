import { useState } from "react";

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

  async function Validate() {
    //
  }

  return (
    <>
      <div className="title">
        <p>Informations personnelles</p>
      </div>

      <p>Noms de naissance</p>
      <input
        type="text"
        placeholder="Noms de naissance"
        value={name}
        onChange={(e) => setname(e.target.value)}
        name="name"
      />

      <p>Noms principal</p>
      <input
        type="text"
        placeholder="Noms principal"
        value={partnername}
        onChange={(e) => setpartnername(e.target.value)}
        name="partnername"
      />

      <p>Noms court</p>
      <input
        type="text"
        placeholder="Noms court"
        value={shortname}
        onChange={(e) => setshortname(e.target.value)}
        name="shortname"
      />

      <p>Genre</p>
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setgenre(e.target.value)}
        name="genre"
      />

      <p>Age</p>
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setage(e.target.value)}
        name="age"
      />

      <p>Pays actuel</p>
      <input
        type="text"
        placeholder="Pays actuel"
        value={country}
        onChange={(e) => setcountry(e.target.value)}
        name="country"
      />

      <p>Pays de naissance</p>
      <input
        type="text"
        placeholder="Pays de naissance"
        value={birthcountry}
        onChange={(e) => setbirthcountry(e.target.value)}
        name="birthcountry"
      />

      <p>Date de naissance</p>
      <input
        type="text"
        placeholder="Date de naissance"
        value={dateofbirth}
        onChange={(e) => setdateofbirth(e.target.value)}
        name="dateofbirth"
      />

      <p>Email</p>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        name="email"
      />

      <p>Méthode de paiement préféré</p>
      <input
        type="text"
        placeholder="Méthode de paiement préféré"
        value={paymentmethod}
        onChange={(e) => setpaymentmethod(e.target.value)}
        name="paymentmethod"
      />

      <p>Code de Bienvenue</p>
      <input
        type="text"
        placeholder="Code de Bienvenue"
        value={codewelcome}
        onChange={(e) => setcodewelcome(e.target.value)}
        name="codewelcome"
      />

      <p>Groupe Whatsapp</p>
      <input
        type="text"
        placeholder="Groupe Whatsapp"
        value={groupwhatsapp}
        onChange={(e) => setgroupwhatsapp(e.target.value)}
        name="groupwhatsapp"
      />

      <p>Groupe Telegram</p>
      <input
        type="text"
        placeholder="Groupe Telegram"
        value={grouptelegram}
        onChange={(e) => setgrouptelegram(e.target.value)}
        name="grouptelegram"
      />

      <p>Numéro Whatsapp</p>
      <input
        type="text"
        placeholder="Numéro Whatsapp"
        value={numberwhatsapp}
        onChange={(e) => setnumberwhatsapp(e.target.value)}
        name="numberwhatsapp"
      />

      <p>Numéro Telegram</p>
      <input
        type="text"
        placeholder="Numéro Telegram"
        value={numbertelegram}
        onChange={(e) => setnumbertelegram(e.target.value)}
        name="numbertelegram"
      />

      <button onClick={Validate}>Valider</button>
    </>
  );
}
