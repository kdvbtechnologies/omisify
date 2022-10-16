import { useState } from "react";

export default function ResetPassword() {
  const [userId, setUserId] = useState("");

  function Button(e) {
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

      <button onClick={Button}>Valider</button>
    </>
  );
}
