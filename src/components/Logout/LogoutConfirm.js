import LoginNav from "../Auth/LoginNav";

export default function LogoutConfirm() {
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  function Yes() {
    localStorage.removeItem("https://omisify.com/userId");
    localStorage.removeItem("https://omisify.com/shortname");
    window.location = "/after-logout";
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
      <div className="logout-confirm">
        <p>Partenaire {shortname}, Souhaitez-vous vraiment quitter Omisify ?</p>
        <div className="button">
          <div className="no">
            <button onClick={No}>Non, je suis toujours là</button>
          </div>

          <div className="yes">
            <button onClick={Yes}>Oui, je reviens bientot</button>
          </div>
        </div>
      </div>
    </div>
  );
}
