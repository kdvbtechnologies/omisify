import axios from "axios";
import { useState } from "react";

export default function GenerosityDaysBonus() {
  const [userId, setUserId] = useState("");
  const [generositydaysbonus, setGenerositydaysbonus] = useState("");
  const [pointtlife, setPointtlife] = useState("");
  const [gaintlife, setGaintlife] = useState("");

  // generosity days bonus
  async function Add(e) {
    e.preventDefault();
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        generositydaysbonus,
        pointtlife,
        gaintlife,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h3>Bonus des journées de générosité</h3>
      <p>Commencer entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <p>Entrer le Bonus des journées de générosité</p>
      <input
        type="text"
        placeholder="Bonus des journées de générosité"
        value={generositydaysbonus}
        onChange={(e) => setGenerositydaysbonus(e.target.value)}
        name="bestpartnerbonus"
      />

      <input
        type="text"
        placeholder="Nouveau Point Total"
        value={pointtlife}
        onChange={(e) => setPointtlife(e.target.value)}
        name="pointtlife"
      />

      <input
        type="text"
        placeholder="Nouveau Gain (dans la vie)"
        value={gaintlife}
        onChange={(e) => setGaintlife(e.target.value)}
        name="gaintlife"
      />

      <button onClick={Add}>Ajouter le Bonus des journées de générosité</button>
    </>
  );
}
