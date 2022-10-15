import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function UpdateMessage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    async function get() {
      await axios
        .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          console.log(res.data.pointtlife2022);

          // point
          const getoldpointtmessagesept2022 = res.data.pointtmessagesept2022;
          if (getoldpointtmessagesept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmessagesept2022",
              getoldpointtmessagesept2022
            );
          }

          const getoldpointtmessage2022 = res.data.pointtmessage2022;
          if (getoldpointtmessage2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmessage2022",
              getoldpointtmessage2022
            );
          }

          const getoldpointtmessagelife = res.data.pointtmessagelife;
          if (getoldpointtmessagelife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmessagelife",
              getoldpointtmessagelife
            );
          }

          const getoldpointtlifesept2022 = res.data.pointtlifesept2022;
          if (getoldpointtlifesept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlifesept2022",
              getoldpointtlifesept2022
            );
          }

          const getoldpointtlife2022 = res.data.pointtlife2022;
          if (getoldpointtlife2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlife2022",
              getoldpointtlife2022
            );
          }

          const getoldpointtlife = res.data.pointtlife;
          if (getoldpointtlife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlife",
              getoldpointtlife
            );
          }

          // gain
          const getoldgaintmessagesept2022 = res.data.gaintmessagesept2022;
          if (getoldgaintmessagesept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintmessagesept2022",
              getoldgaintmessagesept2022
            );
          }

          const getoldgaintmessage2022 = res.data.gaintmessage2022;
          if (getoldgaintmessage2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintmessage2022",
              getoldgaintmessage2022
            );
          }

          const getoldgaintmessagelife = res.data.gaintmessagelife;
          if (getoldgaintmessagelife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintmessagelife",
              getoldgaintmessagelife
            );
          }

          const getoldgaintlifesept2022 = res.data.gaintlifesept2022;
          if (getoldgaintlifesept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlifesept2022",
              getoldgaintlifesept2022
            );
          }

          const getoldgaintlife2022 = res.data.gaintlife2022;
          if (getoldgaintlife2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlife2022",
              getoldgaintlife2022
            );
          }

          const getoldgaintlife = res.data.gaintlife;
          if (getoldgaintlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlife",
              getoldgaintlife
            );
          }

          // number
          const getoldnumbertmessagesept2022 = res.data.numbertmessagesept2022;
          if (getoldnumbertmessagesept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmessagesept2022",
              getoldnumbertmessagesept2022
            );
          }

          const getoldnumbertmessage2022 = res.data.numbertmessage2022;
          if (getoldnumbertmessage2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmessage2022",
              getoldnumbertmessage2022
            );
          }

          const getoldnumbertmessagelife = res.data.numbertmessagelife;
          if (getoldnumbertmessagelife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmessagelife",
              getoldnumbertmessagelife
            );
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // const ancien = `${tsept.total}`;
  // const total = parseInt(ancien) + parseInt(cSeptember);

  // message
  // message
  // message
  const pointmessage = parseInt(message) * 1;
  const gainmessage = parseInt(message) * 5;
  console.log(gainmessage);

  // point
  const getoldpointtmessagesept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmessagesept2022"
  );

  const getoldpointtmessage2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmessage2022"
  );
  const getoldpointtmessagelife = localStorage.getItem(
    "https://omisify.com/getoldpointtmessagelife"
  );
  const getoldpointtlifesept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlifesept2022"
  );
  const getoldpointtlife2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlife2022"
  );
  const getoldpointtlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlife"
  );

  const pointtmessagesept2022 =
    parseInt(getoldpointtmessagesept2022) + parseInt(pointmessage);
  const pointtmessage2022 =
    parseInt(getoldpointtmessage2022) + parseInt(pointmessage);
  const pointtmessagelife =
    parseInt(getoldpointtmessagelife) + parseInt(pointmessage);
  const pointtlifesept2022 =
    parseInt(getoldpointtlifesept2022) + parseInt(pointmessage);
  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointmessage);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointmessage);

  // gain
  const getoldgaintmessagesept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintmessagesept2022"
  );
  const getoldgaintmessage2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintmessage2022"
  );
  const getoldgaintmessagelife = localStorage.getItem(
    "https://omisify.com/getoldgaintmessagelife"
  );
  const getoldgaintlifesept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlifesept2022"
  );
  const getoldgaintlife2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlife2022"
  );
  const getoldgaintlife = localStorage.getItem(
    "https://omisify.com/getoldgaintlife"
  );

  const gaintmessagesept2022 =
    parseInt(getoldgaintmessagesept2022) + parseInt(gainmessage);
  const gaintmessage2022 =
    parseInt(getoldgaintmessage2022) + parseInt(gainmessage);
  const gaintmessagelife =
    parseInt(getoldgaintmessagelife) + parseInt(gainmessage);
  const gaintlifesept2022 =
    parseInt(getoldgaintlifesept2022) + parseInt(gainmessage);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainmessage);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainmessage);

  // number
  const getoldnumbertmessagesept2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertmessagesept2022"
  );
  const getoldnumbertmessage2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertmessage2022"
  );
  const getoldnumbertmessagelife = localStorage.getItem(
    "https://omisify.com/getoldnumbertmessagelife"
  );

  const numbertmessagesept2022 =
    parseInt(getoldnumbertmessagesept2022) + parseInt(message);
  const numbertmessage2022 =
    parseInt(getoldnumbertmessage2022) + parseInt(message);
  const numbertmessagelife =
    parseInt(getoldnumbertmessagelife) + parseInt(message);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        // data message
        pointtmessagesept2022,
        pointtmessage2022,
        pointtmessagelife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintmessagesept2022,
        gaintmessage2022,
        gaintmessagelife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertmessagesept2022,
        numbertmessage2022,
        numbertmessagelife,

        date,
        time,
        messagerecent: message,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Actualiser mes points</p>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>Septembre</h3>
          <h1>Message</h1>
          <p>Entrer le nombre de message(s) envoyé(s)</p>
          <input
            type="text"
            placeholder="Nombre de message(s)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />

          <p>Entrer la date d'aujourd'hui</p>
          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            name="date"
          />

          <p>Entrer l'heure actuelle</p>
          <input
            type="text"
            placeholder="Heure"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            name="time"
          />
          {isLoading2 ? (
            <Loader />
          ) : (
            <>
              <button onClick={Validate}>Valider</button>
            </>
          )}
        </>
      )}
    </>
  );
}
