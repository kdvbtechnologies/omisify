import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function UpdateM10k() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [m10k, setM10k] = useState("");
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
          const getoldpointtm10ksept2022 = res.data.pointtm10ksept2022;
          if (getoldpointtm10ksept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtm10ksept2022",
              getoldpointtm10ksept2022
            );
          }

          const getoldpointtm10k2022 = res.data.pointtm10k2022;
          if (getoldpointtm10k2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtm10k2022",
              getoldpointtm10k2022
            );
          }

          const getoldpointtm10klife = res.data.pointtm10klife;
          if (getoldpointtm10klife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtm10klife",
              getoldpointtm10klife
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
          const getoldgaintm10ksept2022 = res.data.gaintm10ksept2022;
          if (getoldgaintm10ksept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintm10ksept2022",
              getoldgaintm10ksept2022
            );
          }

          const getoldgaintm10k2022 = res.data.gaintm10k2022;
          if (getoldgaintm10k2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintm10k2022",
              getoldgaintm10k2022
            );
          }

          const getoldgaintm10klife = res.data.gaintm10klife;
          if (getoldgaintm10klife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintm10klife",
              getoldgaintm10klife
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
          const getoldnumbertm10ksept2022 = res.data.numbertm10ksept2022;
          if (getoldnumbertm10ksept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertm10ksept2022",
              getoldnumbertm10ksept2022
            );
          }

          const getoldnumbertm10k2022 = res.data.numbertm10k2022;
          if (getoldnumbertm10k2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertm10k2022",
              getoldnumbertm10k2022
            );
          }

          const getoldnumbertm10klife = res.data.numbertm10klife;
          if (getoldnumbertm10klife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertm10klife",
              getoldnumbertm10klife
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

  // m10k
  // m10k
  // m10k
  const pointm10k = parseInt(m10k) * 1;
  const gainm10k = parseInt(m10k) * 0.001;
  console.log(gainm10k);

  // point
  const getoldpointtm10ksept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtm10ksept2022"
  );

  const getoldpointtm10k2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtm10k2022"
  );
  const getoldpointtm10klife = localStorage.getItem(
    "https://omisify.com/getoldpointtm10klife"
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

  const pointtm10ksept2022 =
    parseInt(getoldpointtm10ksept2022) + parseInt(pointm10k);
  const pointtm10k2022 = parseInt(getoldpointtm10k2022) + parseInt(pointm10k);
  const pointtm10klife = parseInt(getoldpointtm10klife) + parseInt(pointm10k);
  const pointtlifesept2022 =
    parseInt(getoldpointtlifesept2022) + parseInt(pointm10k);
  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointm10k);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointm10k);

  // gain
  const getoldgaintm10ksept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintm10ksept2022"
  );
  const getoldgaintm10k2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintm10k2022"
  );
  const getoldgaintm10klife = localStorage.getItem(
    "https://omisify.com/getoldgaintm10klife"
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

  const gaintm10ksept2022 =
    parseInt(getoldgaintm10ksept2022) + parseInt(gainm10k);
  const gaintm10k2022 = parseInt(getoldgaintm10k2022) + parseInt(gainm10k);
  const gaintm10klife = parseInt(getoldgaintm10klife) + parseInt(gainm10k);
  const gaintlifesept2022 =
    parseInt(getoldgaintlifesept2022) + parseInt(gainm10k);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainm10k);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainm10k);

  // number
  const getoldnumbertm10ksept2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertm10ksept2022"
  );
  const getoldnumbertm10k2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertm10k2022"
  );
  const getoldnumbertm10klife = localStorage.getItem(
    "https://omisify.com/getoldnumbertm10klife"
  );

  const numbertm10ksept2022 =
    parseInt(getoldnumbertm10ksept2022) + parseInt(m10k);
  const numbertm10k2022 = parseInt(getoldnumbertm10k2022) + parseInt(m10k);
  const numbertm10klife = parseInt(getoldnumbertm10klife) + parseInt(m10k);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        // data m10k
        pointtm10ksept2022,
        pointtm10k2022,
        pointtm10klife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintm10ksept2022,
        gaintm10k2022,
        gaintm10klife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertm10ksept2022,
        numbertm10k2022,
        numbertm10klife,

        m10krecent: m10k,
        date,
        time,
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
              <p>M10k (Message aux 10k+)</p>
            </div>
            <div className="a">
              <p>
                Entrer le nombre de message(s) envoyé(s) au(x) compte(s) ayant
                plus de 10k d'abonnés (M10k)
              </p>
              <input
                type="text"
                placeholder="Nombre de M10k"
                value={m10k}
                onChange={(e) => setM10k(e.target.value)}
                name="m10k"
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
