import { useState } from "react";
import axios from "axios";
import Loader from "./Partenaire Omisify/Loader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
        console.log(res);
        const userId = res.data.id;
        localStorage.setItem("https://omisify.com/userId", userId);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
    window.location = "/after-login";
  }
  console.log(isLoading);

  return (
    <>
      <div className="login-border">
        <div>
          <p>Portail des Partenaires Omisify</p>
          <div className="input">
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
            {Button ? (
              <Loader />
            ) : (
              <>
                <button onClick={Button}>Se connecter</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
