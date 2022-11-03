export default function Test() {
  async function Download(e) {
    e.preventDefault();
    window.location = "https://jamelfase.com";
  }

  async function Print(e) {
    e.preventDefault();
    window.print();
  }

  async function Back(e) {
    e.preventDefault();
    window.history.back();
  }

  async function GetLanguage() {
    const l = navigator.language;
    console.log(l);
  }
  console.log(GetLanguage);

  return (
    <>
      <button onClick={Download}>Download</button>
      <br />
      <button onClick={Print}>Imprimer</button>
      <br />
      <button onClick={Back}>Retour</button>
      <p id="demo"></p>
      <button onClick={{ GetLanguage }}>Detect Language</button>
    </>
  );
}
