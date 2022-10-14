export default function SignupSuccess() {
  function Success() {
    window.location = "/auth";
  }

  return (
    <>
      <div className="login-success">
        <h1>Inscription réussie !</h1>
        <p>Cliquer sur Continuer pour aller sur la page de connexion</p>
        <div className="button">
          <button onClick={Success}>Continuer</button>
        </div>
      </div>
    </>
  );
}
