import LoginNav from "../Auth/LoginNav";

export default function Logout() {
  function Yes() {
    window.location = "/secure-logout-confirm";
  }

  function No() {
    window.location = "/partner";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <div className="logout">
        <p>Voulez-vous vous déconnectez d'Omisify ?</p>

        <div className="button">
          <div className="yes">
            <button onClick={Yes}>Oui</button>
          </div>

          <div className="no">
            <button onClick={No}>Non</button>
          </div>
        </div>
      </div>
    </div>
  );
}
