import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function UpdateLikePublication() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [likepublication, setLikePublication] = useState("");
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
          const getoldpointtlikepublicationsept2022 =
            res.data.pointtlikepublicationsept2022;
          if (getoldpointtlikepublicationsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikepublicationsept2022",
              getoldpointtlikepublicationsept2022
            );
          }

          const getoldpointtlikepublication2022 =
            res.data.pointtlikepublication2022;
          if (getoldpointtlikepublication2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikepublication2022",
              getoldpointtlikepublication2022
            );
          }

          const getoldpointtlikepublicationlife =
            res.data.pointtlikepublicationlife;
          if (getoldpointtlikepublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikepublicationlife",
              getoldpointtlikepublicationlife
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
          const getoldgaintlikepublicationsept2022 =
            res.data.gaintlikepublicationsept2022;
          if (getoldgaintlikepublicationsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikepublicationsept2022",
              getoldgaintlikepublicationsept2022
            );
          }

          const getoldgaintlikepublication2022 =
            res.data.gaintlikepublication2022;
          if (getoldgaintlikepublication2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikepublication2022",
              getoldgaintlikepublication2022
            );
          }

          const getoldgaintlikepublicationlife =
            res.data.gaintlikepublicationlife;
          if (getoldgaintlikepublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikepublicationlife",
              getoldgaintlikepublicationlife
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
          const getoldnumbertlikepublicationsept2022 =
            res.data.numbertlikepublicationsept2022;
          if (getoldnumbertlikepublicationsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikepublicationsept2022",
              getoldnumbertlikepublicationsept2022
            );
          }

          const getoldnumbertlikepublication2022 =
            res.data.numbertlikepublication2022;
          if (getoldnumbertlikepublication2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikepublication2022",
              getoldnumbertlikepublication2022
            );
          }

          const getoldnumbertlikepublicationlife =
            res.data.numbertlikepublicationlife;
          if (getoldnumbertlikepublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikepublicationlife",
              getoldnumbertlikepublicationlife
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

  // likepublication
  // likepublication
  // likepublication
  const pointlikepublication = parseInt(likepublication) * 1;
  const gainlikepublication = parseInt(likepublication) * 5;
  console.log(gainlikepublication);

  // point
  const getoldpointtlikepublicationsept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikepublicationsept2022"
  );

  const getoldpointtlikepublication2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikepublication2022"
  );
  const getoldpointtlikepublicationlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlikepublicationlife"
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

  const pointtlikepublicationsept2022 =
    parseInt(getoldpointtlikepublicationsept2022) +
    parseInt(pointlikepublication);
  const pointtlikepublication2022 =
    parseInt(getoldpointtlikepublication2022) + parseInt(pointlikepublication);
  const pointtlikepublicationlife =
    parseInt(getoldpointtlikepublicationlife) + parseInt(pointlikepublication);
  const pointtlifesept2022 =
    parseInt(getoldpointtlifesept2022) + parseInt(pointlikepublication);
  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointlikepublication);
  const pointtlife =
    parseInt(getoldpointtlife) + parseInt(pointlikepublication);

  // gain
  const getoldgaintlikepublicationsept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlikepublicationsept2022"
  );
  const getoldgaintlikepublication2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlikepublication2022"
  );
  const getoldgaintlikepublicationlife = localStorage.getItem(
    "https://omisify.com/getoldgaintlikepublicationlife"
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

  const gaintlikepublicationsept2022 =
    parseInt(getoldgaintlikepublicationsept2022) +
    parseInt(gainlikepublication);
  const gaintlikepublication2022 =
    parseInt(getoldgaintlikepublication2022) + parseInt(gainlikepublication);
  const gaintlikepublicationlife =
    parseInt(getoldgaintlikepublicationlife) + parseInt(gainlikepublication);
  const gaintlifesept2022 =
    parseInt(getoldgaintlifesept2022) + parseInt(gainlikepublication);
  const gaintlife2022 =
    parseInt(getoldgaintlife2022) + parseInt(gainlikepublication);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainlikepublication);

  // number
  const getoldnumbertlikepublicationsept2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikepublicationsept2022"
  );
  const getoldnumbertlikepublication2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikepublication2022"
  );
  const getoldnumbertlikepublicationlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikepublicationlife"
  );

  const numbertlikepublicationsept2022 =
    parseInt(getoldnumbertlikepublicationsept2022) + parseInt(likepublication);
  const numbertlikepublication2022 =
    parseInt(getoldnumbertlikepublication2022) + parseInt(likepublication);
  const numbertlikepublicationlife =
    parseInt(getoldnumbertlikepublicationlife) + parseInt(likepublication);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        // data likepublication
        pointtlikepublicationsept2022,
        pointtlikepublication2022,
        pointtlikepublicationlife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintlikepublicationsept2022,
        gaintlikepublication2022,
        gaintlikepublicationlife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertlikepublicationsept2022,
        numbertlikepublication2022,
        numbertlikepublicationlife,

        date,
        time,
        likepublicationrecent: likepublication,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
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
          <h3>Septembre</h3>
          <h1>Likes (publication)</h1>
          <p>Entrer le nombre de like(s) (publication)</p>
          <input
            type="text"
            placeholder="Nombre de like(s) (publication)"
            value={likepublication}
            onChange={(e) => setLikePublication(e.target.value)}
            name="likepublication"
          />

          <p>Entrer la date d'aujourd'hui</p>
          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            name="date"
          />

          <p>Entrer l'heure actuelle</p>
          <input
            type="text"
            placeholder="Heure"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            name="time"
          />
          {isLoading2 ? (
            <Loader />
          ) : (
            <>
              <button onClick={Validate}>Valider</button>
            </>
          )}
        </>
      )}
    </>
  );
}
