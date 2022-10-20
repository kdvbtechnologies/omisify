import axios from "axios";
import { useState } from "react";
import LoginNav from "../../../Auth/LoginNav";
import PanelNav from "../../Navigation/PanelNav";

export default function UpdateCommentPanel() {
  const [userId, setUserId] = useState("");
  const [numbertcommentlife, setNumbertcommentlife] = useState("");
  const [pointtlife, setPointtlife] = useState("");
  const [gaintlife, setGaintlife] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
      data: {
        numbertcommentlife,
        pointtlife,
        gaintlife,
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
      <p>Entrer le userId</p>
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
        value={numbertcommentlife}
        onChange={(e) => setNumbertcommentlife(e.target.value)}
        name="numbertcommentlife"
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
      <button onClick={Validate}>Valider</button>
    </div>
  );
}
