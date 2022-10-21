import axios from "axios";
import { useState } from "react";
import LoginNav from "../../../Auth/LoginNav";
import PanelNav from "../../Navigation/PanelNav";

export default function UpdateCommentPanel() {
  const [userId, setUserId] = useState("");
  const [numbertcommentlife, setNumbertcommentlife] = useState("");
  const [pointtlife, setPointtlife] = useState("");
  const [gaintlife, setGaintlife] = useState("");
  const [date, setDate] = useState("");
  const [numberte10klife, setNumberte10klife] = useState("");
  const [numbertemaillife, setNumbertemaillife] = useState("");
  const [numbertlikescommentlife, setNumbertlikescommentlife] = useState("");
  const [numbertlikespublicationlife, setNumbertlikespublicationlife] =
    useState("");
  const [numbertm10klife, setNumbertm10klife] = useState("");
  const [numbertmessagelife, setNumbertmessagelife] = useState("");
  const [numbertmwilife, setNumbertmwilife] = useState("");
  const [numbertpublicationlife, setNumbertpublicationlife] = useState("");
  const [numbertpwilife, setNumbertpwilife] = useState("");
  const [numbertpwplife, setNumbertpwplife] = useState("");

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
      data: {
        numbertcommentlife,
        pointtlife,
        gaintlife,
        date,

        numberte10klife,

        numbertemaillife,

        numbertlikescommentlife,

        numbertlikespublicationlife,

        numbertm10klife,

        numbertmessagelife,

        numbertmwilife,

        numbertpublicationlife,

        numbertpwilife,

        numbertpwplife,
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
        value={numbertcommentlife}
        onChange={(e) => setNumbertcommentlife(e.target.value)}
        name="numbertcommentlife"
      />

      <p>Ajouter les points des e10kaires</p>
      <p>Entrer le userId</p>
      <p>Entrer le nombre des points total des e10kaires</p>
      <input
        type="text"
        placeholder="e10kaires"
        value={numberte10klife}
        onChange={(e) => setNumberte10klife(e.target.value)}
        name="numberte10klife"
      />

      <p>Entrer le nombre des points total des emailaires</p>
      <input
        type="text"
        placeholder="emailaires"
        value={numbertemaillife}
        onChange={(e) => setNumbertemaillife(e.target.value)}
        name="numbertemaillife"
      />

      <p>Entrer le nombre des points total des likescommentaires</p>
      <input
        type="text"
        placeholder="likescommentaires"
        value={numbertlikescommentlife}
        onChange={(e) => setNumbertlikescommentlife(e.target.value)}
        name="numbertlikescommentlife"
      />

      <p>Entrer le nombre des points total des likespublicationaires</p>
      <input
        type="text"
        placeholder="likespublicationaires"
        value={numbertlikespublicationlife}
        onChange={(e) => setNumbertlikespublicationlife(e.target.value)}
        name="numbertlikespublicationlife"
      />

      <p>Entrer le nombre des points total des m10kaires</p>
      <input
        type="text"
        placeholder="m10kaires"
        value={numbertm10klife}
        onChange={(e) => setNumbertm10klife(e.target.value)}
        name="numbertm10klife"
      />

      <p>Entrer le nombre des points total des messageaires</p>
      <input
        type="text"
        placeholder="messageaires"
        value={numbertmessagelife}
        onChange={(e) => setNumbertmessagelife(e.target.value)}
        name="numbertmessagelife"
      />

      <p>Entrer le nombre des points total des mwiaires</p>
      <input
        type="text"
        placeholder="mwiaires"
        value={numbertmwilife}
        onChange={(e) => setNumbertmwilife(e.target.value)}
        name="numbertmwilife"
      />

      <p>Entrer le nombre des points total des publicationaires</p>
      <input
        type="text"
        placeholder="publicationaires"
        value={numbertpublicationlife}
        onChange={(e) => setNumbertpublicationlife(e.target.value)}
        name="numbertpublicationlife"
      />

      <p>Entrer le nombre des points total des pwiaires</p>
      <input
        type="text"
        placeholder="pwiaires"
        value={numbertpwilife}
        onChange={(e) => setNumbertpwilife(e.target.value)}
        name="numbertpwilife"
      />

      <p>Entrer le nombre des points total des pwpaires</p>
      <input
        type="text"
        placeholder="pwpaires"
        value={numbertpwplife}
        onChange={(e) => setNumbertpwplife(e.target.value)}
        name="numbertpwplife"
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
