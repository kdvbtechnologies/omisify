import axios from "axios";
import { useState } from "react";
import LoginNav from "../../Auth/LoginNav";
import PanelNav from "../Navigation/PanelNav";

export default function TotalPointPanel() {
  const [userId, setUserId] = useState("");
  const [pointtlife, setPointtlife] = useState("");
  const [gaintlife, setGaintlife] = useState("");
  const [date, setDate] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatepwp/${userId}`,
      data: {
        pointtlife,
        gaintlife,
        date,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <h3>Ajouter les Points Total et Gain </h3>
      <p>Entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        name="userId"
      />

      <p>Entrer Points Total</p>
      <input
        type="text"
        placeholder="Points Total"
        value={pointtlife}
        onChange={(e) => setPointtlife(e.target.value)}
        name="pointtlife"
      />

      <p>Entrer Gain</p>
      <input
        type="text"
        placeholder="Gain"
        value={gaintlife}
        onChange={(e) => setGaintlife(e.target.value)}
        name="gaintlife"
      />

      <p>Entrer la date de l'utilisateur</p>
      <input
        type="text"
        placeholder="Date de l'utilisateur"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        name="date"
      />
      <button onClick={Validate}>Valider</button>
    </div>
  );
}
