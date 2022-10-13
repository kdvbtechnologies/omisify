import axios from "axios";

export default function AddSeptember() {
  const userId = "6344c8869e261cca2e3cde7b";

  const total = 0;

  async function AddSeptember(e) {
    e.preventDefault();

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
  }

  return (
    <>
      <p>Cliquer sur commencer pour commencer à actualiser vos points</p>

      <button onClick={AddSeptember}>Commencer</button>
    </>
  );
}
