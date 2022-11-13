export default function SignupSuccess() {
  function Success() {
    window.location = "/auth";
  }

  return (
    <>
      <div className="login-success">
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          Inscription réussie !
        </p>
        <p
          style={{
            fontSize: "16px",
            paddingTop: "20px",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          Cliquer sur Continuer pour aller sur la page de connexion
        </p>
        <div className="button">
          <button onClick={Success}>Continuer</button>
        </div>
      </div>
    </>
  );
}
