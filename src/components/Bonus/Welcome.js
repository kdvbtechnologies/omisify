import axios from "axios";
import { useState } from "react";

export default function Welcome() {
  const [codewelcome, setCodeWelcome] = useState("");
  const userId = localStorage.getItem("https://omisify.com/userId");

  async function Validate() {
    await axios({
      method: "put",
      url: `https://omisify-api.onrender.com/api/user/update/${userId}`,
      data: {
        codewelcome,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <p>Bonus de Bienvenue</p>
      <p>
        Le Bonus de Bienvenue de 100 points est offert à chaque nouveau arivant
        après avoir entrer le Code de Bienvenue de son mentor
      </p>
      <p>Entrer le Code de Bienvenue de votre mentor</p>
      <input
        type="text"
        placeholder="Code de Bienvenue"
        value={codewelcome}
        onChange={(e) => setCodeWelcome(e.target.value)}
        name="codewelcome"
      />
      <button onClick={Validate}>Valider</button>
    </>
  );
}
