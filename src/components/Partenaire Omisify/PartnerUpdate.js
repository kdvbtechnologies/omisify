import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PartnerNewMonth from "./PartnerNewMonth";

export default function PartnerUpdate() {
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const userId = "6344c8869e261cca2e3cde7b";
  const [pcomments, setPcomments] = useState("");
  const [date, setDate] = useState("");

  async function AddPoint(e) {
    e.preventDefault();
    await axios({
      method: "post",
      url: "https://famous-peplum-dove.cyclic.app/api/point/add",
      data: {
        userId,
        pcomments,
        date,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Actualiser mes points</p>
      </div>
      <p>
        Entrer la date à laquelle vous avez faite la publication ou envoyer le
        message
      </p>
      <input type="text" placeholder="Date" />
      <p>Entrer le nombre des messages</p>
      <input type="text" placeholder="Nombre des messages" />

      <p>Entrer le nombre des commentaires</p>
      <input
        type="text"
        placeholder="Nombre des commentaires"
        value={pcomments}
        onChange={(e) => setPcomments(e.target.value)}
        name="pcomments"
      />

      <p>Entrer la date d'aujourd'hui</p>
      <input
        type="text"
        placeholder="Date d'aujourd'hui"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        name="date"
      />
      <button onClick={AddPoint}>valider</button>
      <PartnerNewMonth />
    </div>
  );
}
