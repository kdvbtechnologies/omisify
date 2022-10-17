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

  return (
    <>
      <LoginNav />
      <p>
        Partenaire {shortname}, Souhaitez-vous vraiment vous quitter Omisify ?
      </p>
      <button onClick={No}>Non, je suis toujours là</button>
      <button onClick={Yes}>Oui, je reviens bientot</button>
    </>
  );
}
