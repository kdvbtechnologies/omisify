import axios from "axios";
import { useState } from "react";

export default function BestPartnerBonus() {
  const [userId, setUserId] = useState("");
  const [bestpartnerbonus, setBestpartnerbonus] = useState("");

  // best partner bonus
  async function AddBestPartnerBonus(e) {
    e.preventDefault();
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        bestpartnerbonus,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h3>Ajouter le Bonus d'Excellent Partenaire</h3>
      <p>Commencer entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <p>Entrer le Bonus d'excellent Partenaire</p>
      <input
        type="text"
        placeholder="Bonus d'excellent Partenaire"
        value={bestpartnerbonus}
        onChange={(e) => setBestpartnerbonus(e.target.value)}
        name="bestpartnerbonus"
      />

      <button onClick={AddBestPartnerBonus}>
        Ajouter le Bonus d'Excellent Partenaire
      </button>
    </>
  );
}
