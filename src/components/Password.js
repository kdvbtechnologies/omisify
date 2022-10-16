export default function Password() {
  function Button(e) {
    e.preventDefault();
    window.location = "/reset-password";
  }

  return (
    <>
      <h1>Réinitialiser votre mot de passe</h1>
      <input type="email" placeholder="Entrer votre adresse email" />
      <button onClick={Button}>Valider</button>
    </>
  );
}
