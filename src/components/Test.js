export default function Test() {
  async function Download(e) {
    e.preventDefault();
    window.location = "https://jamelfase.com";
  }

  return (
    <>
      <button onClick={Download}>Download</button>
    </>
  );
}
