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
    document.getElementById("demo").innerHTML = "langue détecté sur le navigateur de l'utilisateur : " + navigator.language;
  }
  console.log(GetLanguage)

  return (
    <>
      <button onClick={Download}>Download</button>
      <br />
      <button onClick={Print}>Imprimer</button>
      <br />
      <button onClick={Back}>Retour</button>
      <p id="demo"></p>
      <p>{GetLanguage}</p>
    </>
  );
}
