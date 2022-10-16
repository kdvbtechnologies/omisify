import { useState } from "react";
import axios from "axios";
import Loader from "./Partenaire Omisify/Loader";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Button(e) {
    setIsLoading(true);
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
        const shortname = res.data.shortname;
        if (shortname) {
          localStorage.setItem("https://omisify.com/shortname", shortname);
        }

        if (userId) {
          localStorage.setItem("https://omisify.com/userId", userId);
        }
      })
      .catch((err) => console.log(err));

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
              type="email"
              placeholder="E-mail"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Mot de passe"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <button onClick={Button}>Se connecter</button>
              </>
            )}
          </div>
          <NavLink className="navlink" to="/reset-password">
            <div className="forgot-password">
              <p>Mot de passe oublié</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
