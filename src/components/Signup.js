import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [shortname, setShortname] = useState("");
  const [partnername, setPartnername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Button(e) {
    e.preventDefault();
    await axios({
      method: post,
      url: "https://famous-peplum-dove.cyclic.app/api/user/signin",
      data: {
        shortname,
        partnername,
        name,
        email,
        password,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="connexion">
        <p>Bienvenue sur le Portail des Partenaires Omisify</p>
        <h1>Inscription</h1>
        <input
          type="text"
          placeholder="Nom de naissance"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom principal"
          value={partnername}
          name="partnername"
          onChange={(e) => setPartnername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom court"
          value={shortname}
          name="shortname"
          onChange={(e) => setShortname(e.target.value)}
        />
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mot de passe"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={Button}>S'inscrire</button>
      </div>
    </>
  );
}
