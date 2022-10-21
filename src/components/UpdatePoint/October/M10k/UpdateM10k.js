import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addm10k from "../../../../feature/m10k.slice";

export default function UpdateM10k() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [m10k, setm10k] = useState("");
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
          const getoldpointtm10koct2022 = res.data.pointtm10koct2022;
          if (getoldpointtm10koct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtm10koct2022",
              getoldpointtm10koct2022
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
          const getoldgaintm10koct2022 = res.data.gaintm10koct2022;
          if (getoldgaintm10koct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintm10koct2022",
              getoldgaintm10koct2022
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
          const getoldnumbertm10koct2022 = res.data.numbertm10koct2022;
          if (getoldnumbertm10koct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertm10koct2022",
              getoldnumbertm10koct2022
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

  // const ancien = `${toct.total}`;
  // const total = parseInt(ancien) + parseInt(coctember);

  //user infos
  //const userId = localStorage.getItem("https://omisify.com/userId");
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  // m10k
  // m10k
  // m10k
  const pointm10k = parseInt(m10k) * 1;
  const gainm10k = parseInt(m10k) * 0.001;
  console.log(gainm10k);

  // point
  const getoldpointtm10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtm10koct2022"
  );

  const getoldpointtm10k2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtm10k2022"
  );
  const getoldpointtm10klife = localStorage.getItem(
    "https://omisify.com/getoldpointtm10klife"
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

  const pointtm10koct2022 =
    parseInt(getoldpointtm10koct2022) + parseInt(pointm10k);

  const pointtm10k2022 = parseInt(getoldpointtm10k2022) + parseInt(pointm10k);

  const pointtm10klife = parseInt(getoldpointtm10klife) + parseInt(pointm10k);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointm10k);

  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointm10k);

  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointm10k);

  // gain
  const getoldgaintm10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintm10koct2022"
  );
  const getoldgaintm10k2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintm10k2022"
  );
  const getoldgaintm10klife = localStorage.getItem(
    "https://omisify.com/getoldgaintm10klife"
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

  const gaintm10koct2022 =
    parseInt(getoldgaintm10koct2022) + parseInt(gainm10k);

  const gaintm10k2022 = parseInt(getoldgaintm10k2022) + parseInt(gainm10k);
  const gaintm10klife = parseInt(getoldgaintm10klife) + parseInt(gainm10k);
  const gaintlifeoct2022 =
    parseInt(getoldgaintlifeoct2022) + parseInt(gainm10k);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainm10k);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainm10k);

  const resultgainm10k = gainm10k;
  const resultpointm10k = pointm10k;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointm10k);

  // number
  const getoldnumbertm10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertm10koct2022"
  );
  const getoldnumbertm10k2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertm10k2022"
  );
  const getoldnumbertm10klife = localStorage.getItem(
    "https://omisify.com/getoldnumbertm10klife"
  );

  const numbertm10koct2022 =
    parseInt(getoldnumbertm10koct2022) + parseInt(m10k);
  const numbertm10k2022 = parseInt(getoldnumbertm10k2022) + parseInt(m10k);
  const numbertm10klife = parseInt(getoldnumbertm10klife) + parseInt(m10k);

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
      numbertm10klife,
      numbertm10k2022,
      numbertm10koct2022,

      // point
      pointtm10klife,
      pointtm10k2022,
      pointtm10koct2022,

      // gain
      gaintm10klife,
      gaintm10k2022,
      gaintm10koct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgainm10k,
      resultpointm10k,
      m10krecent: m10k,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/m10k/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addm10k(data));
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
              <p>M10k (Message aux 10k+)</p>
            </div>
            <div className="a">
              <div className="b">
                <p>
                  Les M10k (Message aux 10k) concerne les messages envoyés aux
                  comptes ayant entre 10000 abonnés et moins de 1 millions
                  d'abonnés
                </p>
                <p>1 M10k : 1 point = 0.001€</p>
                <div className="c">
                  <p>Envoyer le résultat de votre travail</p>
                </div>
              </div>
              <p>Entrer le nombre de M10k</p>
              <input
                type="text"
                placeholder="Nombre de M10k"
                value={m10k}
                onChange={(e) => setm10k(e.target.value)}
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
                <button onClick={Send}>Envoyer</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
