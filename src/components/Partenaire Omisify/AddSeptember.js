import axios from "axios";

export default function AddSeptember() {
  const userId = "6344c8869e261cca2e3cde7b";

  const total = 0;

  async function AddSeptember() {
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
    window.location.reload();
  }

  return (
    <>
      <h1>Septembre</h1>
      <button>Choisir un nouveau mois</button>
      <p>Cliquer sur commencer pour commencer à actualiser vos points</p>
      <button onClick={AddSeptember}>Commencer</button>
    </>
  );
}
