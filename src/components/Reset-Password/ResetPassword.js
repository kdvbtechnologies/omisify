import { useState } from "react";
import Loader from "../Partenaire Omisify/Loader";

export default function ResetPassword() {
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.setItem("https://omisify.com/userId", userId);
    window.location = "/secure-reset-password";
  }

  return (
    <>
      <h1>Réinitialiser votre mot de passe</h1>
      <p>Entrer votre adresse e-mail ou votre id</p>
      <input
        type="email"
        placeholder="E-mail ou Id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        name="userId"
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
