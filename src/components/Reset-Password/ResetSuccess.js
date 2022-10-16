import LoginNav from "../Auth/LoginNav";

export default function ResetSuccess() {
  function Next(e) {
    e.preventDefault();
    window.location = "/partner";
  }
  return (
    <>
      <LoginNav />
      <div className="reset-success">
        <div className="title">
          <p>Modification réussi !</p>
        </div>

        <p>
          Pour vous connecter, cliquez sur continuer afin d'aller sur la page de
          connexion pour vous connecter avec votre nouveau mot de passe
        </p>
        <div className="button">
          <button onClick={Next}>Continuer</button>
        </div>
      </div>
    </>
  );
}
