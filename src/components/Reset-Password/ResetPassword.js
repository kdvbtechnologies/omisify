import { useState } from "react";

export default function ResetPassword() {
  const [userId, setUserId] = useState("");

  function Button(e) {
    e.preventDefault();
    localStorage.setItem("https://omisfy.com/userId", userId);
    window.location = "/secure-reset-password";
  }

  return (
    <>
      <h1>Réinitialiser votre mot de passe</h1>
      <input
        type="email"
        placeholder="Entrer votre adresse e-mail ou votre id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        name="userId"
        required
      />

      <button onClick={Button}>Valider</button>
    </>
  );
}
