import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import adde10k from "../../../../feature/e10k.slice";

export default function UpdateE10k() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [e10k, sete10k] = useState("");
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
          const getoldpointte10koct2022 = res.data.pointte10koct2022;
          if (getoldpointte10koct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointte10koct2022",
              getoldpointte10koct2022
            );
          }

          const getoldpointte10k2022 = res.data.pointte10k2022;
          if (getoldpointte10k2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointte10k2022",
              getoldpointte10k2022
            );
          }

          const getoldpointte10klife = res.data.pointte10klife;
          if (getoldpointte10klife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointte10klife",
              getoldpointte10klife
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
          const getoldgainte10koct2022 = res.data.gainte10koct2022;
          if (getoldgainte10koct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgainte10koct2022",
              getoldgainte10koct2022
            );
          }

          const getoldgainte10k2022 = res.data.gainte10k2022;
          if (getoldgainte10k2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgainte10k2022",
              getoldgainte10k2022
            );
          }

          const getoldgainte10klife = res.data.gainte10klife;
          if (getoldgainte10klife) {
            localStorage.setItem(
              "https://omisify.com/getoldgainte10klife",
              getoldgainte10klife
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
          const getoldnumberte10koct2022 = res.data.numberte10koct2022;
          if (getoldnumberte10koct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumberte10koct2022",
              getoldnumberte10koct2022
            );
          }

          const getoldnumberte10k2022 = res.data.numberte10k2022;
          if (getoldnumberte10k2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumberte10k2022",
              getoldnumberte10k2022
            );
          }

          const getoldnumberte10klife = res.data.numberte10klife;
          if (getoldnumberte10klife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumberte10klife",
              getoldnumberte10klife
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

  // e10k
  // e10k
  // e10k
  const pointe10k = parseInt(e10k) * 3;
  const gaine10k = parseInt(e10k) * 0.003;
  console.log(gaine10k);

  // point
  const getoldpointte10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointte10koct2022"
  );

  const getoldpointte10k2022 = localStorage.getItem(
    "https://omisify.com/getoldpointte10k2022"
  );
  const getoldpointte10klife = localStorage.getItem(
    "https://omisify.com/getoldpointte10klife"
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

  const pointte10koct2022 =
    parseInt(getoldpointte10koct2022) + parseInt(pointe10k);

  const pointte10k2022 = parseInt(getoldpointte10k2022) + parseInt(pointe10k);

  const pointte10klife = parseInt(getoldpointte10klife) + parseInt(pointe10k);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointe10k);

  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointe10k);

  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointe10k);

  // gain
  const getoldgainte10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldgainte10koct2022"
  );
  const getoldgainte10k2022 = localStorage.getItem(
    "https://omisify.com/getoldgainte10k2022"
  );
  const getoldgainte10klife = localStorage.getItem(
    "https://omisify.com/getoldgainte10klife"
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

  const gainte10koct2022 =
    parseInt(getoldgainte10koct2022) + parseInt(gaine10k);

  const gainte10k2022 = parseInt(getoldgainte10k2022) + parseInt(gaine10k);
  const gainte10klife = parseInt(getoldgainte10klife) + parseInt(gaine10k);
  const gaintlifeoct2022 =
    parseInt(getoldgaintlifeoct2022) + parseInt(gaine10k);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gaine10k);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gaine10k);

  const resultgaine10k = gaine10k;
  const resultpointe10k = pointe10k;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointe10k);

  // number
  const getoldnumberte10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumberte10koct2022"
  );
  const getoldnumberte10k2022 = localStorage.getItem(
    "https://omisify.com/getoldnumberte10k2022"
  );
  const getoldnumberte10klife = localStorage.getItem(
    "https://omisify.com/getoldnumberte10klife"
  );

  const numberte10koct2022 =
    parseInt(getoldnumberte10koct2022) + parseInt(e10k);
  const numberte10k2022 = parseInt(getoldnumberte10k2022) + parseInt(e10k);
  const numberte10klife = parseInt(getoldnumberte10klife) + parseInt(e10k);

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
      numberte10klife,
      numberte10k2022,
      numberte10koct2022,

      // point
      pointte10klife,
      pointte10k2022,
      pointte10koct2022,

      // gain
      gainte10klife,
      gainte10k2022,
      gainte10koct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgaine10k,
      resultpointe10k,
      e10krecent: e10k,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/e10k/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(adde10k(data));
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
              <p>E10k</p>
            </div>
            <div className="a">
              <div className="b">
                <p>
                  Les E10k (E-mails aux 10k) concerne les e-mails envoyés aux
                  comptes ayant entre 10000 abonnés et moins de 1 millions
                  d'abonnés
                </p>
                <p>1 M10k : 3 points = 0.003€</p>
                <div className="c">
                  <p>Envoyer le résultat de votre travail</p>
                </div>
              </div>
              <p>Entrer le nombre d'E10k</p>
              <input
                type="text"
                placeholder="Nombre d'e-mail(s)"
                value={e10k}
                onChange={(e) => sete10k(e.target.value)}
                name="e10k"
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
