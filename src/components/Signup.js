import { useState } from "react";
import axios from "axios";
import Loader from "./Partenaire Omisify/Loader";

export default function Signup() {
  const [shortname, setShortname] = useState("");
  const [partnername, setPartnername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Button(e) {
    setIsLoading(true);
    e.preventDefault();
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/signup`,
      data: {
        shortname,
        partnername,
        name,
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
    window.location = "/after-signup";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      <div style={family}>
        <div className="signup-shrink">
          <div className="login-border">
            <div>
              <p>Bienvenue sur le Portail des Partenaires Omisify</p>
              <div className="input">
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
                  required
                />
                <input
                  type="text"
                  placeholder="Nom court"
                  value={shortname}
                  name="shortname"
                  onChange={(e) => setShortname(e.target.value)}
                  required
                />
                <input
                  type="text"
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
                    <button onClick={Button}>S'inscrire</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
