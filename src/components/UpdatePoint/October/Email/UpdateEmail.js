import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function UpdateEmail() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [email, setEmail] = useState("");
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
          const getoldpointtemailsept2022 = res.data.pointtemailsept2022;
          if (getoldpointtemailsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtemailsept2022",
              getoldpointtemailsept2022
            );
          }

          const getoldpointtemail2022 = res.data.pointtemail2022;
          if (getoldpointtemail2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtemail2022",
              getoldpointtemail2022
            );
          }

          const getoldpointtemaillife = res.data.pointtemaillife;
          if (getoldpointtemaillife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtemaillife",
              getoldpointtemaillife
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
          const getoldgaintemailsept2022 = res.data.gaintemailsept2022;
          if (getoldgaintemailsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintemailsept2022",
              getoldgaintemailsept2022
            );
          }

          const getoldgaintemail2022 = res.data.gaintemail2022;
          if (getoldgaintemail2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintemail2022",
              getoldgaintemail2022
            );
          }

          const getoldgaintemaillife = res.data.gaintemaillife;
          if (getoldgaintemaillife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintemaillife",
              getoldgaintemaillife
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
          const getoldnumbertemailsept2022 = res.data.numbertemailsept2022;
          if (getoldnumbertemailsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertemailsept2022",
              getoldnumbertemailsept2022
            );
          }

          const getoldnumbertemail2022 = res.data.numbertemail2022;
          if (getoldnumbertemail2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertemail2022",
              getoldnumbertemail2022
            );
          }

          const getoldnumbertemaillife = res.data.numbertemaillife;
          if (getoldnumbertemaillife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertemaillife",
              getoldnumbertemaillife
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

  // email
  // email
  // email
  const pointemail = parseInt(email) * 1;
  const gainemail = parseInt(email) * 0.001;
  console.log(gainemail);

  // point
  const getoldpointtemailsept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtemailsept2022"
  );

  const getoldpointtemail2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtemail2022"
  );
  const getoldpointtemaillife = localStorage.getItem(
    "https://omisify.com/getoldpointtemaillife"
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

  const pointtemailsept2022 =
    parseInt(getoldpointtemailsept2022) + parseInt(pointemail);
  const pointtemail2022 =
    parseInt(getoldpointtemail2022) + parseInt(pointemail);
  const pointtemaillife =
    parseInt(getoldpointtemaillife) + parseInt(pointemail);
  const pointtlifesept2022 =
    parseInt(getoldpointtlifesept2022) + parseInt(pointemail);
  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointemail);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointemail);

  // gain
  const getoldgaintemailsept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintemailsept2022"
  );
  const getoldgaintemail2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintemail2022"
  );
  const getoldgaintemaillife = localStorage.getItem(
    "https://omisify.com/getoldgaintemaillife"
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

  const gaintemailsept2022 =
    parseInt(getoldgaintemailsept2022) + parseInt(gainemail);
  const gaintemail2022 = parseInt(getoldgaintemail2022) + parseInt(gainemail);
  const gaintemaillife = parseInt(getoldgaintemaillife) + parseInt(gainemail);
  const gaintlifesept2022 =
    parseInt(getoldgaintlifesept2022) + parseInt(gainemail);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainemail);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainemail);

  // number
  const getoldnumbertemailsept2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertemailsept2022"
  );
  const getoldnumbertemail2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertemail2022"
  );
  const getoldnumbertemaillife = localStorage.getItem(
    "https://omisify.com/getoldnumbertemaillife"
  );

  const numbertemailsept2022 =
    parseInt(getoldnumbertemailsept2022) + parseInt(email);
  const numbertemail2022 = parseInt(getoldnumbertemail2022) + parseInt(email);
  const numbertemaillife = parseInt(getoldnumbertemaillife) + parseInt(email);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        // data email
        pointtemailsept2022,
        pointtemail2022,
        pointtemaillife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintemailsept2022,
        gaintemail2022,
        gaintemaillife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertemailsept2022,
        numbertemail2022,
        numbertemaillife,

        date,
        time,
        emailrecent: email,
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
          <div className="update-comment">
            <p>Mois de : Septembre 2022</p>
            <div className="title">
              <p>Email</p>
            </div>
            <div className="a">
              <p>Entrer le nombre d'e-mail(s)</p>
              <input
                type="text"
                placeholder="Nombre d'e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
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
                <button onClick={Validate}>Valider</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
