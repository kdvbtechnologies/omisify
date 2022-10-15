import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function UpdatePublication() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [publication, setPublication] = useState("");
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
          const getoldpointtpublicationsept2022 =
            res.data.pointtpublicationsept2022;
          if (getoldpointtpublicationsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpublicationsept2022",
              getoldpointtpublicationsept2022
            );
          }

          const getoldpointtpublication2022 = res.data.pointtpublication2022;
          if (getoldpointtpublication2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpublication2022",
              getoldpointtpublication2022
            );
          }

          const getoldpointtpublicationlife = res.data.pointtpublicationlife;
          if (getoldpointtpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpublicationlife",
              getoldpointtpublicationlife
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
          const getoldgaintpublicationsept2022 =
            res.data.gaintpublicationsept2022;
          if (getoldgaintpublicationsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpublicationsept2022",
              getoldgaintpublicationsept2022
            );
          }

          const getoldgaintpublication2022 = res.data.gaintpublication2022;
          if (getoldgaintpublication2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpublication2022",
              getoldgaintpublication2022
            );
          }

          const getoldgaintpublicationlife = res.data.gaintpublicationlife;
          if (getoldgaintpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpublicationlife",
              getoldgaintpublicationlife
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
          const getoldnumbertpublicationsept2022 =
            res.data.numbertpublicationsept2022;
          if (getoldnumbertpublicationsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpublicationsept2022",
              getoldnumbertpublicationsept2022
            );
          }

          const getoldnumbertpublication2022 = res.data.numbertpublication2022;
          if (getoldnumbertpublication2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpublication2022",
              getoldnumbertpublication2022
            );
          }

          const getoldnumbertpublicationlife = res.data.numbertpublicationlife;
          if (getoldnumbertpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpublicationlife",
              getoldnumbertpublicationlife
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

  // publication
  // publication
  // publication
  const pointpublication = parseInt(publication) * 1;
  const gainpublication = parseInt(publication) * 5;
  console.log(gainpublication);

  // point
  const getoldpointtpublicationsept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpublicationsept2022"
  );

  const getoldpointtpublication2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpublication2022"
  );
  const getoldpointtpublicationlife = localStorage.getItem(
    "https://omisify.com/getoldpointtpublicationlife"
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

  const pointtpublicationsept2022 =
    parseInt(getoldpointtpublicationsept2022) + parseInt(pointpublication);
  const pointtpublication2022 =
    parseInt(getoldpointtpublication2022) + parseInt(pointpublication);
  const pointtpublicationlife =
    parseInt(getoldpointtpublicationlife) + parseInt(pointpublication);
  const pointtlifesept2022 =
    parseInt(getoldpointtlifesept2022) + parseInt(pointpublication);
  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointpublication);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointpublication);

  // gain
  const getoldgaintpublicationsept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpublicationsept2022"
  );
  const getoldgaintpublication2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpublication2022"
  );
  const getoldgaintpublicationlife = localStorage.getItem(
    "https://omisify.com/getoldgaintpublicationlife"
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

  const gaintpublicationsept2022 =
    parseInt(getoldgaintpublicationsept2022) + parseInt(gainpublication);
  const gaintpublication2022 =
    parseInt(getoldgaintpublication2022) + parseInt(gainpublication);
  const gaintpublicationlife =
    parseInt(getoldgaintpublicationlife) + parseInt(gainpublication);
  const gaintlifesept2022 =
    parseInt(getoldgaintlifesept2022) + parseInt(gainpublication);
  const gaintlife2022 =
    parseInt(getoldgaintlife2022) + parseInt(gainpublication);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainpublication);

  // number
  const getoldnumbertpublicationsept2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpublicationsept2022"
  );
  const getoldnumbertpublication2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpublication2022"
  );
  const getoldnumbertpublicationlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpublicationlife"
  );

  const numbertpublicationsept2022 =
    parseInt(getoldnumbertpublicationsept2022) + parseInt(publication);
  const numbertpublication2022 =
    parseInt(getoldnumbertpublication2022) + parseInt(publication);
  const numbertpublicationlife =
    parseInt(getoldnumbertpublicationlife) + parseInt(publication);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        // data publication
        pointtpublicationsept2022,
        pointtpublication2022,
        pointtpublicationlife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintpublicationsept2022,
        gaintpublication2022,
        gaintpublicationlife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertpublicationsept2022,
        numbertpublication2022,
        numbertpublicationlife,

        date,
        time,
        publicationrecent: publication,
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
          <h1>Publication</h1>
          <p>Entrer le nombre de publication(s) publié(s)</p>
          <input
            type="text"
            placeholder="Nombre de publication(s)"
            value={publication}
            onChange={(e) => setPublication(e.target.value)}
            name="publication"
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
