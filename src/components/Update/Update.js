import LoginNav from "../Auth/LoginNav";

export default function Update() {
  async function Download() {
    window.document.reload();
  }

  return (
    <>
      <LoginNav />
      <p>Obtenir la dernière version de Omisify</p>
      <button onClick={Download}>Télécharger</button>
    </>
  );
}
