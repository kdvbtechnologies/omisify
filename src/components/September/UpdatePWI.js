import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function UpdatePWI() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [pwi, setPwi] = useState("");
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
          const getoldpointtpwisept2022 = res.data.pointtpwisept2022;
          if (getoldpointtpwisept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpwisept2022",
              getoldpointtpwisept2022
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
          const getoldgaintpwisept2022 = res.data.gaintpwisept2022;
          if (getoldgaintpwisept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpwisept2022",
              getoldgaintpwisept2022
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
          const getoldnumbertpwisept2022 = res.data.numbertpwisept2022;
          if (getoldnumbertpwisept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwisept2022",
              getoldnumbertpwisept2022
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

  // const ancien = `${tsept.total}`;
  // const total = parseInt(ancien) + parseInt(cSeptember);

  // pwi
  // pwi
  // pwi
  const pointpwi = parseInt(pwi) * 5;
  const gainpwi = parseInt(pwi) * 0.005;
  console.log(gainpwi);

  // point
  const getoldpointtpwisept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwisept2022"
  );

  const getoldpointtpwi2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwi2022"
  );
  const getoldpointtpwilife = localStorage.getItem(
    "https://omisify.com/getoldpointtpwilife"
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

  const pointtpwisept2022 =
    parseInt(getoldpointtpwisept2022) + parseInt(pointpwi);
  const pointtpwi2022 = parseInt(getoldpointtpwi2022) + parseInt(pointpwi);
  const pointtpwilife = parseInt(getoldpointtpwilife) + parseInt(pointpwi);
  const pointtlifesept2022 =
    parseInt(getoldpointtlifesept2022) + parseInt(pointpwi);
  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointpwi);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointpwi);

  // gain
  const getoldgaintpwisept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpwisept2022"
  );
  const getoldgaintpwi2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpwi2022"
  );
  const getoldgaintpwilife = localStorage.getItem(
    "https://omisify.com/getoldgaintpwilife"
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

  const gaintpwisept2022 = parseInt(getoldgaintpwisept2022) + parseInt(gainpwi);
  const gaintpwi2022 = parseInt(getoldgaintpwi2022) + parseInt(gainpwi);
  const gaintpwilife = parseInt(getoldgaintpwilife) + parseInt(gainpwi);
  const gaintlifesept2022 =
    parseInt(getoldgaintlifesept2022) + parseInt(gainpwi);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainpwi);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainpwi);

  // number
  const getoldnumbertpwisept2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwisept2022"
  );
  const getoldnumbertpwi2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwi2022"
  );
  const getoldnumbertpwilife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpwilife"
  );

  const numbertpwisept2022 = parseInt(getoldnumbertpwisept2022) + parseInt(pwi);
  const numbertpwi2022 = parseInt(getoldnumbertpwi2022) + parseInt(pwi);
  const numbertpwilife = parseInt(getoldnumbertpwilife) + parseInt(pwi);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        // data pwi
        pointtpwisept2022,
        pointtpwi2022,
        pointtpwilife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintpwisept2022,
        gaintpwi2022,
        gaintpwilife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertpwisept2022,
        numbertpwi2022,
        numbertpwilife,

        pwirecent: pwi,
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
              <p>PWI (Publication With Interaction)</p>
            </div>
            <div className="a">
              <p>
                Entrer le nombre de publication(s) avec interaction publiée(s)
                (PWI)
              </p>
              <input
                type="text"
                placeholder="Nombre de PWI"
                value={pwi}
                onChange={(e) => setPwi(e.target.value)}
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
                <button onClick={Validate}>Valider</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
