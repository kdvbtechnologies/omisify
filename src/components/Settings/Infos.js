import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Infos() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/`)
        .then((res) => setApi(res.data))
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  return (
    <>
      <div className="title">
        <p>Informations personnelles</p>
        <NavLink to="/infos-update">
          <button>Modifier</button>
        </NavLink>
      </div>

      {api.map((api) => (
        <>
          <p>Noms de naissance : {api.name}</p>
          <p>Genre : {api.genre}</p>
          <p>Age : {api.age}</p>
          <p>Pays actuel : {api.country}</p>
          <p>Pays de naissance : {api.birthcountry}</p>
          <p>Date de naissance : {api.dateofbirth}</p>
          <p>Email : {api.email}</p>
          <p>Méthode de paiement préféré :{api.paymentmethod}</p>
          <p>Code de Bienvenue : {api.codewelcome}</p>
          <p>Groupe Whatsapp : {api.groupwhatsapp}</p>
          <p>Groupe Telegram : {api.grouptelegram}</p>
          <p>Numéro Whatsapp : {api.numberwhatsapp}</p>
          <p>Numéro Telegram : {api.numbertelegram}</p>
        </>
      ))}
    </>
  );
}
