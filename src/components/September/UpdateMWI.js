import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function UpdateMWI() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [mwi, setMwi] = useState("");
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
          const getoldpointtmwisept2022 = res.data.pointtmwisept2022;
          if (getoldpointtmwisept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmwisept2022",
              getoldpointtmwisept2022
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
          const getoldgaintmwisept2022 = res.data.gaintmwisept2022;
          if (getoldgaintmwisept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintmwisept2022",
              getoldgaintmwisept2022
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
          const getoldnumbertmwisept2022 = res.data.numbertmwisept2022;
          if (getoldnumbertmwisept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmwisept2022",
              getoldnumbertmwisept2022
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

  // const ancien = `${tsept.total}`;
  // const total = parseInt(ancien) + parseInt(cSeptember);

  // mwi
  // mwi
  // mwi
  const pointmwi = parseInt(mwi) * 5;
  const gainmwi = parseInt(mwi) * 0.005;
  console.log(gainmwi);

  // point
  const getoldpointtmwisept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmwisept2022"
  );

  const getoldpointtmwi2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmwi2022"
  );
  const getoldpointtmwilife = localStorage.getItem(
    "https://omisify.com/getoldpointtmwilife"
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

  const pointtmwisept2022 =
    parseInt(getoldpointtmwisept2022) + parseInt(pointmwi);
  const pointtmwi2022 = parseInt(getoldpointtmwi2022) + parseInt(pointmwi);
  const pointtmwilife = parseInt(getoldpointtmwilife) + parseInt(pointmwi);
  const pointtlifesept2022 =
    parseInt(getoldpointtlifesept2022) + parseInt(pointmwi);
  const pointtlife2022 = parseInt(getoldpointtlife2022) + parseInt(pointmwi);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointmwi);

  // gain
  const getoldgaintmwisept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintmwisept2022"
  );
  const getoldgaintmwi2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintmwi2022"
  );
  const getoldgaintmwilife = localStorage.getItem(
    "https://omisify.com/getoldgaintmwilife"
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

  const gaintmwisept2022 = parseInt(getoldgaintmwisept2022) + parseInt(gainmwi);
  const gaintmwi2022 = parseInt(getoldgaintmwi2022) + parseInt(gainmwi);
  const gaintmwilife = parseInt(getoldgaintmwilife) + parseInt(gainmwi);
  const gaintlifesept2022 =
    parseInt(getoldgaintlifesept2022) + parseInt(gainmwi);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gainmwi);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainmwi);

  // number
  const getoldnumbertmwisept2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertmwisept2022"
  );
  const getoldnumbertmwi2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertmwi2022"
  );
  const getoldnumbertmwilife = localStorage.getItem(
    "https://omisify.com/getoldnumbertmwilife"
  );

  const numbertmwisept2022 = parseInt(getoldnumbertmwisept2022) + parseInt(mwi);
  const numbertmwi2022 = parseInt(getoldnumbertmwi2022) + parseInt(mwi);
  const numbertmwilife = parseInt(getoldnumbertmwilife) + parseInt(mwi);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        // data mwi
        pointtmwisept2022,
        pointtmwi2022,
        pointtmwilife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintmwisept2022,
        gaintmwi2022,
        gaintmwilife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertmwisept2022,
        numbertmwi2022,
        numbertmwilife,

        mwirecent: mwi,
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
              <p>MWI (Message With Interaction)</p>
            </div>
            <div className="a">
              <p>
                Entrer le nombre de message(s) avec interaction envoyé(s) (MWI)
              </p>
              <input
                type="text"
                placeholder="Nombre de MWI"
                value={mwi}
                onChange={(e) => setMwi(e.target.value)}
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
                <button onClick={Validate}>Valider</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
