import axios from "axios";
import { useState } from "react";

export default function UpdateemailPanel() {
  const [userId, setUserId] = useState("");
  const [pointtemaillife, setpointtemaillife] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateemail/${userId}`,
      data: {
        pointtemaillife,
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
      <h3>Ajouter les points des emailaires</h3>
      <p>Entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        name="userId"
      />

      <p>Entrer le nombre des points total des emailaires</p>
      <input
        type="text"
        placeholder="emailaires"
        value={pointtemaillife}
        onChange={(e) => setpointtemaillife(e.target.value)}
        name="pointtemaillife"
      />

      <button onClick={Validate}>Valider</button>
    </div>
  );
}
