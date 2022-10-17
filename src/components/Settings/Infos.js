import axios from "axios";
import { useEffect } from "react";

export default function Infos() {
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
        <button>Modifier</button>
      </div>

      <p>Noms de naissance : </p>
      <p>Genre : </p>
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
    </>
  );
}
