import LoginNav from "../Auth/LoginNav";

export default function Update() {
  async function Download() {
    window.location.reload();
  }

  return (
    <>
      <LoginNav />
      <p>Obtenir la dernière version d'Omisify</p>
      <button onClick={Download}>Télécharger</button>
    </>
  );
}
