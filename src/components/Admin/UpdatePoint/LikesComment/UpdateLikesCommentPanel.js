import axios from "axios";
import { useState } from "react";
import LoginNav from "../../../Auth/LoginNav";
import PanelNav from "../../Navigation/PanelNav";

export default function UpdatelikescommentPanel() {
  const [userId, setUserId] = useState("");
  const [pointtlikescommentlife, setpointtlikescommentlife] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatelikescomment/${userId}`,
      data: {
        pointtlikescommentlife,
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
      <h3>Ajouter les points des likescommentaires</h3>
      <p>Entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        name="userId"
      />

      <p>Entrer le nombre des points total des likescommentaires</p>
      <input
        type="text"
        placeholder="likescommentaires"
        value={pointtlikescommentlife}
        onChange={(e) => setpointtlikescommentlife(e.target.value)}
        name="pointtlikescommentlife"
      />

      <button onClick={Validate}>Valider</button>
    </div>
  );
}
