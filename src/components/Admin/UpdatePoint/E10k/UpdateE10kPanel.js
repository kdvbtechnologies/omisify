import axios from "axios";
import { useState } from "react";

export default function Updatee10kPanel() {
  const [userId, setUserId] = useState("");
  const [pointte10klife, setpointte10klife] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatee10k/${userId}`,
      data: {
        pointte10klife,
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
      <h3>Ajouter les points des e10kaires</h3>
      <p>Entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        name="userId"
      />

      <p>Entrer le nombre des points total des e10kaires</p>
      <input
        type="text"
        placeholder="e10kaires"
        value={pointte10klife}
        onChange={(e) => setpointte10klife(e.target.value)}
        name="pointte10klife"
      />

      <button onClick={Validate}>Valider</button>
    </div>
  );
}
