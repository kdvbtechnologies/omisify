import LoginNav from "../Auth/LoginNav";

export default function Logout() {
  function Yes() {
    window.location = "/logout-confirm";
  }

  function No() {
    window.location = "/partner";
  }

  return (
    <>
      <LoginNav />
      <p>Voulez-vous vous déconnectez d'Omisify ?</p>
      <button onClick={Yes}>Oui</button>
      <button onClick={No}>Non</button>
    </>
  );
}
