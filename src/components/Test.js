export default function Test() {
  async function Download(e) {
    e.preventDefault();
    window.location = "https://jamelfase.com";
  }

  async function Print(e) {
    e.preventDefault();
    window.print();
  }

  return (
    <>
      <button onClick={Download}>Download</button>
      <br />
      <button align="center" onClick={Print}>
        Imprimer
      </button>
    </>
  );
}
