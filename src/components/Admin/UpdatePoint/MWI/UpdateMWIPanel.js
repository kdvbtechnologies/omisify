import axios from "axios";
import { useState } from "react";
import LoginNav from "../../../Auth/LoginNav";
import PanelNav from "../../Navigation/PanelNav";

export default function UpdatemwiPanel() {
  const [userId, setUserId] = useState("");
  const [pointtmwilife, setpointtmwilife] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatemwi/${userId}`,
      data: {
        pointtmwilife,
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
      <LoginNav />
      <PanelNav />
      <h3>Ajouter les points des mwiaires</h3>
      <p>Entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        name="userId"
      />

      <p>Entrer le nombre des points total des mwiaires</p>
      <input
        type="text"
        placeholder="mwiaires"
        value={pointtmwilife}
        onChange={(e) => setpointtmwilife(e.target.value)}
        name="pointtmwilife"
      />

      <button onClick={Validate}>Valider</button>
    </div>
  );
}
