import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addmwi from "../../../../feature/mwi.slice";

export default function UpdateMWI() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [mwi, setmwi] = useState("");
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
          const getoldpointtmwioct2022 = res.data.pointtmwioct2022;
          if (getoldpointtmwioct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmwioct2022",
              getoldpointtmwioct2022
            );
          }

          const getoldpointtmwi2022 = res.data.pointtmwi2022;
          if (getoldpointtmwi2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmwi2022",
              getoldpointtmwi2022
            );
          }

          const getoldpointtmwilife = res.data.pointtmwilife;
          if (getoldpointtmwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmwilife",
              getoldpointtmwilife
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
          const getoldgaintmwioct2022 = res.data.gaintmwioct2022;
          if (getoldgaintmwioct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintmwioct2022",
              getoldgaintmwioct2022
            );
          }

          const getoldgaintmwi2022 = res.data.gaintmwi2022;
          if (getoldgaintmwi2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintmwi2022",
              getoldgaintmwi2022
            );
          }

          const getoldgaintmwilife = res.data.gaintmwilife;
          if (getoldgaintmwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintmwilife",
              getoldgaintmwilife
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
          const getoldnumbertmwioct2022 = res.data.numbertmwioct2022;
          if (getoldnumbertmwioct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmwioct2022",
              getoldnumbertmwioct2022
            );
          }

          const getoldnumbertmwi2022 = res.data.numbertmwi2022;
          if (getoldnumbertmwi2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmwi2022",
              getoldnumbertmwi2022
            );
          }

          const getoldnumbertmwilife = res.data.numbertmwilife;
          if (getoldnumbertmwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmwilife",
              getoldnumbertmwilife
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

  // mwi
  // mwi
  // mwi
  const pointmwi = parseInt(mwi) * 1;
  const gainmwi = parseInt(mwi) * 0.001;
  console.log(gainmwi);

  // point
  const getoldpointtmwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmwioct2022"
  );

  const getoldpointtmwi2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmwi2022"
  );
  const getoldpointtmwilife = localStorage.getItem(
    "https://omisify.com/getoldpointtmwilife"
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

  const pointtmwioct2022 =
    parseInt(getoldpointtmwioct2022) + parseInt(pointmwi);

  const pointtmwi2022 = parseInt(getoldpointtmwi2022) + parseInt(pointmwi);

  const pointtmwilife = parseInt(getoldpointtmwilife) + parseInt(pointmwi);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointmwi);

  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointmwi);

  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointmwi);

  // gain
  const getoldgaintmwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintmwioct2022"
  );
  const getoldgaintmwi2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintmwi2022"
  );
  const getoldgaintmwilife = localStorage.getItem(
    "https://omisify.com/getoldgaintmwilife"
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

  const gaintmwioct2022 = parseInt(getoldgaintmwioct2022) + parseInt(gainmwi);

  const gaintmwi2022 = parseInt(getoldgaintmwi2022) + parseInt(gainmwi);
  const gaintmwilife = parseInt(getoldgaintmwilife) + parseInt(gainmwi);
  const gaintlifeoct2022 = parseInt(getoldgaintlifeoct2022) + parseInt(gainmwi);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainmwi);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainmwi);

  const resultgainmwi = gainmwi;
  const resultpointmwi = pointmwi;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointmwi);

  // number
  const getoldnumbertmwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertmwioct2022"
  );
  const getoldnumbertmwi2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertmwi2022"
  );
  const getoldnumbertmwilife = localStorage.getItem(
    "https://omisify.com/getoldnumbertmwilife"
  );

  const numbertmwioct2022 = parseInt(getoldnumbertmwioct2022) + parseInt(mwi);
  const numbertmwi2022 = parseInt(getoldnumbertmwi2022) + parseInt(mwi);
  const numbertmwilife = parseInt(getoldnumbertmwilife) + parseInt(mwi);

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
      numbertmwilife,
      numbertmwi2022,
      numbertmwioct2022,

      // point
      pointtmwilife,
      pointtmwi2022,
      pointtmwioct2022,

      // gain
      gaintmwilife,
      gaintmwi2022,
      gaintmwioct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgainmwi,
      resultpointmwi,
      mwirecent: mwi,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/mwi/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addmwi(data));
      })
      .catch((err) => console.log(err));
    //window.location = "/update-point-success";
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
          <div className="update-mwi">
            <p>Mois d'Octobre 2022</p>
            <div className="title">
              <p>mwiaire</p>
            </div>
            <div className="a">
              <p>Entrer le nombre de mwiaire(s)</p>
              <input
                type="text"
                placeholder="Nombre de mwiaire(s)"
                value={mwi}
                onChange={(e) => setmwi(e.target.value)}
                name="mwi"
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
