import axios from "axios";
import { useState } from "react";
import LoginNav from "../../../Auth/LoginNav";
import PanelNav from "../../Navigation/PanelNav";

export default function UpdateCommentPanel() {
  const [userId, setUserId] = useState("");
  const [pointtcommentlife, setpointtcommentlife] = useState("");
  const [pointtlife, setPointtlife] = useState("");
  const [gaintlife, setGaintlife] = useState("");
  const [date, setDate] = useState("");
  const [pointte10klife, setpointte10klife] = useState("");
  const [pointtemaillife, setpointtemaillife] = useState("");
  const [pointtlikescommentlife, setpointtlikescommentlife] = useState("");
  const [pointtlikespublicationlife, setpointtlikespublicationlife] =
    useState("");
  const [pointtm10klife, setpointtm10klife] = useState("");
  const [pointtmessagelife, setpointtmessagelife] = useState("");
  const [pointtmwilife, setpointtmwilife] = useState("");
  const [pointtpublicationlife, setpointtpublicationlife] = useState("");
  const [pointtpwilife, setpointtpwilife] = useState("");
  const [pointtpwplife, setpointtpwplife] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
      data: {
        pointtcommentlife,
        pointtlife,
        gaintlife,
        date,

        pointte10klife,

        pointtemaillife,

        pointtlikescommentlife,

        pointtlikespublicationlife,

        pointtm10klife,

        pointtmessagelife,

        pointtmwilife,

        pointtpublicationlife,

        pointtpwilife,

        pointtpwplife,
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

      <p>Ajouter les points des e10kaires</p>
      <p>Entrer le userId</p>
      <p>
        Entrer le nombre des points total des e-mails envoyés aux comptes ayant
        entre 10.000 et moins de 1 millions d'abonnés
      </p>
      <input
        type="text"
        placeholder="e10kaires"
        value={pointte10klife}
        onChange={(e) => setpointte10klife(e.target.value)}
        name="pointte10klife"
      />

      <p>Entrer le nombre des points total des emails</p>
      <input
        type="text"
        placeholder="emailaires"
        value={pointtemaillife}
        onChange={(e) => setpointtemaillife(e.target.value)}
        name="pointtemaillife"
      />

      <p>Entrer le nombre des points total des likescommentaires</p>
      <input
        type="text"
        placeholder="likescommentaires"
        value={pointtlikescommentlife}
        onChange={(e) => setpointtlikescommentlife(e.target.value)}
        name="pointtlikescommentlife"
      />

      <p>Entrer le nombre des points total des likespublicationaires</p>
      <input
        type="text"
        placeholder="likespublicationaires"
        value={pointtlikespublicationlife}
        onChange={(e) => setpointtlikespublicationlife(e.target.value)}
        name="pointtlikespublicationlife"
      />

      <p>Entrer le nombre des points total des m10kaires</p>
      <input
        type="text"
        placeholder="m10kaires"
        value={pointtm10klife}
        onChange={(e) => setpointtm10klife(e.target.value)}
        name="pointtm10klife"
      />

      <p>Entrer le nombre des points total des messageaires</p>
      <input
        type="text"
        placeholder="messageaires"
        value={pointtmessagelife}
        onChange={(e) => setpointtmessagelife(e.target.value)}
        name="pointtmessagelife"
      />

      <p>Entrer le nombre des points total des mwiaires</p>
      <input
        type="text"
        placeholder="mwiaires"
        value={pointtmwilife}
        onChange={(e) => setpointtmwilife(e.target.value)}
        name="pointtmwilife"
      />

      <p>Entrer le nombre des points total des publicationaires</p>
      <input
        type="text"
        placeholder="publicationaires"
        value={pointtpublicationlife}
        onChange={(e) => setpointtpublicationlife(e.target.value)}
        name="pointtpublicationlife"
      />

      <p>Entrer le nombre des points total des pwiaires</p>
      <input
        type="text"
        placeholder="pwiaires"
        value={pointtpwilife}
        onChange={(e) => setpointtpwilife(e.target.value)}
        name="pointtpwilife"
      />

      <p>Entrer le nombre des points total des pwpaires</p>
      <input
        type="text"
        placeholder="pwpaires"
        value={pointtpwplife}
        onChange={(e) => setpointtpwplife(e.target.value)}
        name="pointtpwplife"
      />

      <h4>Entrer Points Total</h4>
      <input
        type="text"
        placeholder="Points Total"
        value={pointtlife}
        onChange={(e) => setPointtlife(e.target.value)}
        name="pointtlife"
      />

      <h4>Entrer Gain</h4>
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
