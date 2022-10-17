export default function Update() {
  async function Download() {
    window.document.reload();
  }

  return (
    <>
      <p>Obtenir la dernière version de Omisify</p>
      <button onClick={Download}>Télécharger</button>
    </>
  );
}
