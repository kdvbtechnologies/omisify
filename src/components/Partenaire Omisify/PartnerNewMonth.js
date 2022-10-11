import axios from "axios";
import { useState } from "react";

export default function PartnerNewMonth() {
  //month
  const [month, setMonth] = useState("");
  const userId = "6344c8869e261cca2e3cde7b";

  async function NewMonth(e) {
    e.preventDefault();
    await axios({
      method: "post",
      url: "https://famous-peplum-dove.cyclic.app/api/month/add",
      data: {
        userId,
        month,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <h1>Nouveau mois</h1>
      <p>Commencer avec un nouveau mois</p>
      <input
        type="text"
        placeholder="Entrer le nouveau mois"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        name="month"
      />
      <button onClick={NewMonth}>Commencer</button>
    </>
  );
}
