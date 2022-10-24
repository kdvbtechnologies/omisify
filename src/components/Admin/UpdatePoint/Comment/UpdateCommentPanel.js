import axios from "axios";
import { useState } from "react";
import LoginNav from "../../../Auth/LoginNav";
import PanelNav from "../../Navigation/PanelNav";

export default function UpdateCommentPanel() {
  const [userId, setUserId] = useState("");
  const [pointtcommentlife, setpointtcommentlife] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
      data: {
        pointtcommentlife,
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

      <h3>Ajouter les points des commentaires</h3>
      <h4>Entrer le userId</h4>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        name="userId"
      />

      <p>Entrer le nombre des points total des Commentaires</p>
      <input
        type="text"
        placeholder="Commentaires"
        value={pointtcommentlife}
        onChange={(e) => setpointtcommentlife(e.target.value)}
        name="pointtcommentlife"
      />

      <button onClick={Validate}>Valider</button>
    </div>
  );
}
