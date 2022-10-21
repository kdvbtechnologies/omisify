import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addpwp from "../../../../feature/pwp.slice";

export default function UpdatePWP() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [pwp, setpwp] = useState("");
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
          const getoldpointtpwpoct2022 = res.data.pointtpwpoct2022;
          if (getoldpointtpwpoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpwpoct2022",
              getoldpointtpwpoct2022
            );
          }

          const getoldpointtpwp2022 = res.data.pointtpwp2022;
          if (getoldpointtpwp2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpwp2022",
              getoldpointtpwp2022
            );
          }

          const getoldpointtpwplife = res.data.pointtpwplife;
          if (getoldpointtpwplife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpwplife",
              getoldpointtpwplife
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
          const getoldgaintpwpoct2022 = res.data.gaintpwpoct2022;
          if (getoldgaintpwpoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpwpoct2022",
              getoldgaintpwpoct2022
            );
          }

          const getoldgaintpwp2022 = res.data.gaintpwp2022;
          if (getoldgaintpwp2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpwp2022",
              getoldgaintpwp2022
            );
          }

          const getoldgaintpwplife = res.data.gaintpwplife;
          if (getoldgaintpwplife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpwplife",
              getoldgaintpwplife
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
          const getoldnumbertpwpoct2022 = res.data.numbertpwpoct2022;
          if (getoldnumbertpwpoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwpoct2022",
              getoldnumbertpwpoct2022
            );
          }

          const getoldnumbertpwp2022 = res.data.numbertpwp2022;
          if (getoldnumbertpwp2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwp2022",
              getoldnumbertpwp2022
            );
          }

          const getoldnumbertpwplife = res.data.numbertpwplife;
          if (getoldnumbertpwplife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwplife",
              getoldnumbertpwplife
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

  // pwp
  // pwp
  // pwp
  const pointpwp = parseInt(pwp) * 1;
  const gainpwp = parseInt(pwp) * 0.001;
  console.log(gainpwp);

  // point
  const getoldpointtpwpoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwpoct2022"
  );

  const getoldpointtpwp2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwp2022"
  );
  const getoldpointtpwplife = localStorage.getItem(
    "https://omisify.com/getoldpointtpwplife"
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

  const pointtpwpoct2022 =
    parseInt(getoldpointtpwpoct2022) + parseInt(pointpwp);

  const pointtpwp2022 = parseInt(getoldpointtpwp2022) + parseInt(pointpwp);

  const pointtpwplife = parseInt(getoldpointtpwplife) + parseInt(pointpwp);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointpwp);

  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointpwp);

  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointpwp);

  // gain
  const getoldgaintpwpoct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpwpoct2022"
  );
  const getoldgaintpwp2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpwp2022"
  );
  const getoldgaintpwplife = localStorage.getItem(
    "https://omisify.com/getoldgaintpwplife"
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

  const gaintpwpoct2022 = parseInt(getoldgaintpwpoct2022) + parseInt(gainpwp);

  const gaintpwp2022 = parseInt(getoldgaintpwp2022) + parseInt(gainpwp);
  const gaintpwplife = parseInt(getoldgaintpwplife) + parseInt(gainpwp);
  const gaintlifeoct2022 = parseInt(getoldgaintlifeoct2022) + parseInt(gainpwp);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainpwp);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainpwp);

  const resultgainpwp = gainpwp;
  const resultpointpwp = pointpwp;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointpwp);

  // number
  const getoldnumbertpwpoct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwpoct2022"
  );
  const getoldnumbertpwp2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwp2022"
  );
  const getoldnumbertpwplife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwplife"
  );

  const numbertpwpoct2022 = parseInt(getoldnumbertpwpoct2022) + parseInt(pwp);
  const numbertpwp2022 = parseInt(getoldnumbertpwp2022) + parseInt(pwp);
  const numbertpwplife = parseInt(getoldnumbertpwplife) + parseInt(pwp);

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
      numbertpwplife,
      numbertpwp2022,
      numbertpwpoct2022,

      // point
      pointtpwplife,
      pointtpwp2022,
      pointtpwpoct2022,

      // gain
      gaintpwplife,
      gaintpwp2022,
      gaintpwpoct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgainpwp,
      resultpointpwp,
      pwprecent: pwp,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/pwp/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addpwp(data));
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
              <p>PWP (Publication Without Presentation)</p>
            </div>
            <div className="a">
              <p>
                Entrer le nombre de publication(s) sans présentation publiée(s)
                (PWP)
              </p>
              <input
                type="text"
                placeholder="Nombre de PWP"
                value={pwp}
                onChange={(e) => setpwp(e.target.value)}
                name="pwp"
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
