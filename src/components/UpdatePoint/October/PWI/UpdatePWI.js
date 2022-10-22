import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addpwi from "../../../../feature/pwi.slice";

export default function UpdatePWI() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [pwi, setpwi] = useState("");
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
          const getoldpointtpwioct2022 = res.data.pointtpwioct2022;
          if (getoldpointtpwioct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpwioct2022",
              getoldpointtpwioct2022
            );
          }

          const getoldpointtpwi2022 = res.data.pointtpwi2022;
          if (getoldpointtpwi2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpwi2022",
              getoldpointtpwi2022
            );
          }

          const getoldpointtpwilife = res.data.pointtpwilife;
          if (getoldpointtpwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpwilife",
              getoldpointtpwilife
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
          const getoldgaintpwioct2022 = res.data.gaintpwioct2022;
          if (getoldgaintpwioct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpwioct2022",
              getoldgaintpwioct2022
            );
          }

          const getoldgaintpwi2022 = res.data.gaintpwi2022;
          if (getoldgaintpwi2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpwi2022",
              getoldgaintpwi2022
            );
          }

          const getoldgaintpwilife = res.data.gaintpwilife;
          if (getoldgaintpwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpwilife",
              getoldgaintpwilife
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
          const getoldnumbertpwioct2022 = res.data.numbertpwioct2022;
          if (getoldnumbertpwioct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwioct2022",
              getoldnumbertpwioct2022
            );
          }

          const getoldnumbertpwi2022 = res.data.numbertpwi2022;
          if (getoldnumbertpwi2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwi2022",
              getoldnumbertpwi2022
            );
          }

          const getoldnumbertpwilife = res.data.numbertpwilife;
          if (getoldnumbertpwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwilife",
              getoldnumbertpwilife
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

  // pwi
  // pwi
  // pwi
  const pointpwi = parseInt(pwi) * 5;
  const gainpwi = parseInt(pwi) * 0.005;
  console.log(gainpwi);

  // point
  const getoldpointtpwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwioct2022"
  );

  const getoldpointtpwi2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwi2022"
  );
  const getoldpointtpwilife = localStorage.getItem(
    "https://omisify.com/getoldpointtpwilife"
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

  const pointtpwioct2022 =
    parseInt(getoldpointtpwioct2022) + parseInt(pointpwi);

  const pointtpwi2022 = parseInt(getoldpointtpwi2022) + parseInt(pointpwi);

  const pointtpwilife = parseInt(getoldpointtpwilife) + parseInt(pointpwi);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointpwi);

  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointpwi);

  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointpwi);

  // gain
  const getoldgaintpwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpwioct2022"
  );
  const getoldgaintpwi2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpwi2022"
  );
  const getoldgaintpwilife = localStorage.getItem(
    "https://omisify.com/getoldgaintpwilife"
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

  const gaintpwioct2022 = parseInt(getoldgaintpwioct2022) + parseInt(gainpwi);

  const gaintpwi2022 = parseInt(getoldgaintpwi2022) + parseInt(gainpwi);
  const gaintpwilife = parseInt(getoldgaintpwilife) + parseInt(gainpwi);
  const gaintlifeoct2022 = parseInt(getoldgaintlifeoct2022) + parseInt(gainpwi);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainpwi);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainpwi);

  const resultgainpwi = gainpwi;
  const resultpointpwi = pointpwi;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointpwi);

  // number
  const getoldnumbertpwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwioct2022"
  );
  const getoldnumbertpwi2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwi2022"
  );
  const getoldnumbertpwilife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwilife"
  );

  const numbertpwioct2022 = parseInt(getoldnumbertpwioct2022) + parseInt(pwi);
  const numbertpwi2022 = parseInt(getoldnumbertpwi2022) + parseInt(pwi);
  const numbertpwilife = parseInt(getoldnumbertpwilife) + parseInt(pwi);

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
      numbertpwilife,
      numbertpwi2022,
      numbertpwioct2022,

      // point
      pointtpwilife,
      pointtpwi2022,
      pointtpwioct2022,

      // gain
      gaintpwilife,
      gaintpwi2022,
      gaintpwioct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgainpwi,
      resultpointpwi,
      pwirecent: pwi,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/pwi/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addpwi(data));
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
              <p>PWI</p>
            </div>
            <div className="a">
              <div className="b">
                <p>
                  Les PWI (Publication With Interaction) en français Publication
                  avec interaction concerne les publications dans lesqueslles
                  des personnes poses des questions en commentaire concernant le
                  produit ou concernant l'entreprise qui est sur l'affiche de la
                  publication et le Partenaire réponds à la question posé en
                  commentaire
                </p>
                <p>1 PWI : 5 point = 0.005€</p>
                <div className="c">
                  <p>Envoyer le résultat de votre travail</p>
                </div>
              </div>
              <p>
                Entrer le nombre de publication(s) avec interaction publiée(s)
                (PWI)
              </p>
              <input
                type="text"
                placeholder="Nombre de PWI"
                value={pwi}
                onChange={(e) => setpwi(e.target.value)}
                name="pwi"
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
