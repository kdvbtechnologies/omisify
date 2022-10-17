import axios from "axios";
import { useEffect, useState } from "react";

export default function InfosUpdate() {
  const [name, setName] = useState("");

  useEffect(() => {
    async function get() {
      await axios
        .get("https://omisify-api.onrender.com/api/point/all/september")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    get();
  }, []);

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
        onChange={(e) => setName(e.target.value)}
        name="name"
      />

      <p>Genre</p>
      <input type="text" placeholder="Genre" />

      <p>Age : </p>
      <p>Pays actuel : </p>
      <p>Pays de naissance : </p>
      <p>Date de naissance : </p>
      <p>Email : </p>
      <p>Méthode de paiement préféré :</p>
      <p>Code de Bienvenue : </p>
      <p>Groupe Whatsapp : </p>
      <p>Groupe Whatsapp : </p>
      <p>Numéro Telegram : </p>
      <p>Numéro Telegram : </p>
      <button>Valider</button>
    </>
  );
}
