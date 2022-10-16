import axios from "axios";
import { useState } from "react";
import Loader from "../Partenaire Omisify/Loader";

export default function NewPassword() {
  const userId = localStorage.getItem("https://omisfy.com/userId");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Validate() {
    setIsLoading(true);
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

  return (
    <>
      <h1>Créer un nouveau mot de passe</h1>
      <input
        type="text"
        placeholder="Entrer un nouveau mot de passe"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name="password"
        required
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button onClick={Validate}>Valider</button>
        </>
      )}
    </>
  );
}
