import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addmessage from "../../../../feature/message.slice";

export default function UpdateMessage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [message, setmessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          console.log(res.data.pointtlife2022);

          // point
          const getoldpointtmessageoct2022 = res.data.pointtmessageoct2022;
          if (getoldpointtmessageoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmessageoct2022",
              getoldpointtmessageoct2022
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

          const getoldpointtlifeoct2022 = res.data.pointtlifeoct2022;
          if (getoldpointtlifeoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlifeoct2022",
              getoldpointtlifeoct2022
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
          const getoldgaintmessageoct2022 = res.data.gaintmessageoct2022;
          if (getoldgaintmessageoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintmessageoct2022",
              getoldgaintmessageoct2022
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

          const getoldgaintlifeoct2022 = res.data.gaintlifeoct2022;
          if (getoldgaintlifeoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlifeoct2022",
              getoldgaintlifeoct2022
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
          const getoldnumbertmessageoct2022 = res.data.numbertmessageoct2022;
          if (getoldnumbertmessageoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmessageoct2022",
              getoldnumbertmessageoct2022
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

  // const ancien = `${toct.total}`;
  // const total = parseInt(ancien) + parseInt(coctember);

  //user infos
  //const userId = localStorage.getItem("https://omisify.com/userId");
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  // message
  // message
  // message
  const pointmessage = parseInt(message) * 0.1;
  const gainmessage = parseInt(message) * 0.0001;
  console.log(gainmessage);

  // point
  const getoldpointtmessageoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmessageoct2022"
  );

  const getoldpointtmessage2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmessage2022"
  );
  const getoldpointtmessagelife = localStorage.getItem(
    "https://omisify.com/getoldpointtmessagelife"
  );
  const getoldpointtlifeoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlifeoct2022"
  );
  const getoldpointtlife2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlife2022"
  );
  const getoldpointtlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlife"
  );

  const pointtmessageoct2022 =
    parseInt(getoldpointtmessageoct2022) + parseInt(pointmessage);

  const pointtmessage2022 =
    parseInt(getoldpointtmessage2022) + parseInt(pointmessage);

  const pointtmessagelife =
    parseInt(getoldpointtmessagelife) + parseInt(pointmessage);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointmessage);

  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointmessage);

  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointmessage);

  // gain
  const getoldgaintmessageoct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintmessageoct2022"
  );
  const getoldgaintmessage2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintmessage2022"
  );
  const getoldgaintmessagelife = localStorage.getItem(
    "https://omisify.com/getoldgaintmessagelife"
  );
  const getoldgaintlifeoct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlifeoct2022"
  );
  const getoldgaintlife2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlife2022"
  );
  const getoldgaintlife = localStorage.getItem(
    "https://omisify.com/getoldgaintlife"
  );

  const gaintmessageoct2022 =
    parseInt(getoldgaintmessageoct2022) + parseInt(gainmessage);

  const gaintmessage2022 =
    parseInt(getoldgaintmessage2022) + parseInt(gainmessage);
  const gaintmessagelife =
    parseInt(getoldgaintmessagelife) + parseInt(gainmessage);
  const gaintlifeoct2022 =
    parseInt(getoldgaintlifeoct2022) + parseInt(gainmessage);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainmessage);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainmessage);

  const resultgainmessage = gainmessage;
  const resultpointmessage = pointmessage;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointmessage);

  // number
  const getoldnumbertmessageoct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertmessageoct2022"
  );
  const getoldnumbertmessage2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertmessage2022"
  );
  const getoldnumbertmessagelife = localStorage.getItem(
    "https://omisify.com/getoldnumbertmessagelife"
  );

  const numbertmessageoct2022 =
    parseInt(getoldnumbertmessageoct2022) + parseInt(message);
  const numbertmessage2022 =
    parseInt(getoldnumbertmessage2022) + parseInt(message);
  const numbertmessagelife =
    parseInt(getoldnumbertmessagelife) + parseInt(message);

  // update point, gain
  async function Send(e) {
    setIsLoading2(true);
    e.preventDefault();

    const data = {
      //user infos
      userId,
      name,
      partnername,
      shortname,

      // number
      numbertmessagelife,
      numbertmessage2022,
      numbertmessageoct2022,

      // point
      pointtmessagelife,
      pointtmessage2022,
      pointtmessageoct2022,

      // gain
      gaintmessagelife,
      gaintmessage2022,
      gaintmessageoct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgainmessage,
      resultpointmessage,
      messagerecent: message,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/message/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addmessage(data));
      })
      .catch((err) => console.log(err));
    window.location = "/update-point-success";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="update-comment">
            <p>Mois d'Octobre 2022</p>
            <div className="title">
              <p>Message</p>
            </div>
            <div className="a">
              <div className="b">
                <p>
                  L'option Message concerne les messages envoyés avec la partie
                  présentation et le lien d'affiliation à ses amis ou à ses
                  abonnés sur les réseaux sociaux
                </p>
                <p>1 Message : 0.1 point = 0.0001€</p>
                <div className="c">
                  <p>Envoyer le résultat de votre travail</p>
                </div>
              </div>
              <p>Entrer le nombre de message(s) envoyé(s)</p>
              <input
                type="text"
                placeholder="Nombre de message(s)"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                name="message"
              />
            </div>

            <div className="a">
              <p>Entrer la date d'aujourd'hui</p>
              <input
                type="text"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="date"
              />
            </div>

            <div className="a">
              <p>Entrer l'heure actuelle</p>
              <input
                type="text"
                placeholder="Heure"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                name="time"
              />
            </div>
            {isLoading2 ? (
              <Loader />
            ) : (
              <>
                <button onClick={Send}>Envoyer</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
