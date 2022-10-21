import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addemail from "../../../../feature/email.slice";

export default function UpdateEmail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [email, setemail] = useState("");
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
          const getoldpointtemailoct2022 = res.data.pointtemailoct2022;
          if (getoldpointtemailoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtemailoct2022",
              getoldpointtemailoct2022
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
          const getoldgaintemailoct2022 = res.data.gaintemailoct2022;
          if (getoldgaintemailoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintemailoct2022",
              getoldgaintemailoct2022
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
          const getoldnumbertemailoct2022 = res.data.numbertemailoct2022;
          if (getoldnumbertemailoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertemailoct2022",
              getoldnumbertemailoct2022
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

  // const ancien = `${toct.total}`;
  // const total = parseInt(ancien) + parseInt(coctember);

  //user infos
  //const userId = localStorage.getItem("https://omisify.com/userId");
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  // email
  // email
  // email
  const pointemail = parseInt(email) * 1;
  const gainemail = parseInt(email) * 0.001;
  console.log(gainemail);

  // point
  const getoldpointtemailoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtemailoct2022"
  );

  const getoldpointtemail2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtemail2022"
  );
  const getoldpointtemaillife = localStorage.getItem(
    "https://omisify.com/getoldpointtemaillife"
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

  const pointtemailoct2022 =
    parseInt(getoldpointtemailoct2022) + parseInt(pointemail);

  const pointtemail2022 =
    parseInt(getoldpointtemail2022) + parseInt(pointemail);

  const pointtemaillife =
    parseInt(getoldpointtemaillife) + parseInt(pointemail);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointemail);

  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointemail);

  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointemail);

  // gain
  const getoldgaintemailoct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintemailoct2022"
  );
  const getoldgaintemail2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintemail2022"
  );
  const getoldgaintemaillife = localStorage.getItem(
    "https://omisify.com/getoldgaintemaillife"
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

  const gaintemailoct2022 =
    parseInt(getoldgaintemailoct2022) + parseInt(gainemail);

  const gaintemail2022 = parseInt(getoldgaintemail2022) + parseInt(gainemail);
  const gaintemaillife = parseInt(getoldgaintemaillife) + parseInt(gainemail);
  const gaintlifeoct2022 =
    parseInt(getoldgaintlifeoct2022) + parseInt(gainemail);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainemail);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainemail);

  const resultgainemail = gainemail;
  const resultpointemail = pointemail;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointemail);

  // number
  const getoldnumbertemailoct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertemailoct2022"
  );
  const getoldnumbertemail2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertemail2022"
  );
  const getoldnumbertemaillife = localStorage.getItem(
    "https://omisify.com/getoldnumbertemaillife"
  );

  const numbertemailoct2022 =
    parseInt(getoldnumbertemailoct2022) + parseInt(email);
  const numbertemail2022 = parseInt(getoldnumbertemail2022) + parseInt(email);
  const numbertemaillife = parseInt(getoldnumbertemaillife) + parseInt(email);

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
      numbertemaillife,
      numbertemail2022,
      numbertemailoct2022,

      // point
      pointtemaillife,
      pointtemail2022,
      pointtemailoct2022,

      // gain
      gaintemaillife,
      gaintemail2022,
      gaintemailoct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgainemail,
      resultpointemail,
      emailrecent: email,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/email/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addemail(data));
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
              <p>Email</p>
            </div>
            <div className="a">
              <p>Entrer le nombre d'e-mail(s)</p>
              <input
                type="text"
                placeholder="Nombre d'e-mail"
                value={email}
                onChange={(e) => setemail(e.target.value)}
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
                <button onClick={Send}>Envoyer</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
