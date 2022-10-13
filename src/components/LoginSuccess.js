import axios from "axios";

export default function LoginSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const total = 0;

  async function Success() {
    await axios({
      method: "post",
      url: "https://famous-peplum-dove.cyclic.app/api/point/add/tseptember",
      data: {
        userId,
        total,
      },
    })
      .then((res) => {
        console.log(res.data.message);
        const idtotal = res.data.message;
        localStorage.setItem("https://omisify.com/idtotal", idtotal);
      })
      .catch((err) => console.log(err));
    window.location = "/partner";
  }

  return (
    <>
      <h1>Connexion réussie !</h1>
      <button onClick={Success}>Continuer</button>
    </>
  );
}
