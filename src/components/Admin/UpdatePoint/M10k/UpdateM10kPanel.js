import axios from "axios";
import { useState } from "react";
import LoginNav from "../../../Auth/LoginNav";
import PanelNav from "../../Navigation/PanelNav";

export default function Updatem10kPanel() {
  const [userId, setUserId] = useState("");
  const [pointtm10klife, setpointtm10klife] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatem10k/${userId}`,
      data: {
        pointtm10klife,
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
      <h3>Ajouter les points des m10kaires</h3>
      <p>Entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        name="userId"
      />

      <p>Entrer le nombre des points total des m10kaires</p>
      <input
        type="text"
        placeholder="m10kaires"
        value={pointtm10klife}
        onChange={(e) => setpointtm10klife(e.target.value)}
        name="pointtm10klife"
      />

      <button onClick={Validate}>Valider</button>
    </div>
  );
}
