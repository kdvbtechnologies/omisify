export default function Test() {
  async function Download(e) {
    e.preventDefault();
    window.location = "https://jamelfase.com";
  }

  async function Print(e) {
    e.preventDefault();
    window.print();
  }

  async function Back() {
    window.history.back();
  }

  return (
    <>
      <button onClick={Download}>Download</button>
      <br />
      <button onClick={Print}>Imprimer</button>
      <br />
      <button onClick={Back}>Retour</button>
    </>
  );
}
