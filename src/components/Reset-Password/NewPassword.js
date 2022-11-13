import axios from "axios";
import { useState } from "react";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";
import Back from "../Back/Back";

export default function NewPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Create() {
    setIsLoading(true);
    const userId = localStorage.getItem("https://omisify.com/userId");
    if (userId) {
      await axios({
        method: "put",
        url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
        data: {
          password,
        },
      })
        .then((res) => {
          console.log(res);
          const name = res.data.name;
          localStorage.setItem("https://omisify.com/name", name);
        })
        .catch((err) => console.log(err));
      window.location = "/after-new-password";
    }
  }

  return (
    <>
      <div onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div className="reset-password">
        <div className="title">
          <p>Créer un nouveau mot de passe</p>
        </div>
        <p>Créer un nouveau mot de passe pour votre compte Omisify</p>
        <input
          type="text"
          placeholder="Nouveau mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          required
        />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button onClick={Create}>Créer</button>
          </>
        )}
      </div>
    </>
  );
}
