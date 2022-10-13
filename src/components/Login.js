import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Button(e) {
    e.preventDefault();
    await axios({
      method: "post",
      url: "https://famous-peplum-dove.cyclic.app/api/user/login",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res.data.id);
        const userId = res.data.id;
        localStorage.setItem("https://omisify.com/userId", userId);
      })
      .catch((err) => console.log(err));
    window.location.reload();
  }

  return (
    <>
      <div className="connexion">
        <p>Portail des Partenaires Omisify</p>
        <h1>Connexion</h1>
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
        <button onClick={Button}>Se connecter</button>
      </div>
    </>
  );
}
