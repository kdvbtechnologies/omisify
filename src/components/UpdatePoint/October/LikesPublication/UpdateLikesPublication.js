import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addlikespublication from "../../../../feature/likespublication.slice";

export default function UpdateLikesPublication() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [likespublication, setlikespublication] = useState("");
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
          const getoldpointtlikespublicationoct2022 =
            res.data.pointtlikespublicationoct2022;
          if (getoldpointtlikespublicationoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikespublicationoct2022",
              getoldpointtlikespublicationoct2022
            );
          }

          const getoldpointtlikespublication2022 =
            res.data.pointtlikespublication2022;
          if (getoldpointtlikespublication2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikespublication2022",
              getoldpointtlikespublication2022
            );
          }

          const getoldpointtlikespublicationlife =
            res.data.pointtlikespublicationlife;
          if (getoldpointtlikespublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikespublicationlife",
              getoldpointtlikespublicationlife
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
          const getoldgaintlikespublicationoct2022 =
            res.data.gaintlikespublicationoct2022;
          if (getoldgaintlikespublicationoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikespublicationoct2022",
              getoldgaintlikespublicationoct2022
            );
          }

          const getoldgaintlikespublication2022 =
            res.data.gaintlikespublication2022;
          if (getoldgaintlikespublication2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikespublication2022",
              getoldgaintlikespublication2022
            );
          }

          const getoldgaintlikespublicationlife =
            res.data.gaintlikespublicationlife;
          if (getoldgaintlikespublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikespublicationlife",
              getoldgaintlikespublicationlife
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
          const getoldnumbertlikespublicationoct2022 =
            res.data.numbertlikespublicationoct2022;
          if (getoldnumbertlikespublicationoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikespublicationoct2022",
              getoldnumbertlikespublicationoct2022
            );
          }

          const getoldnumbertlikespublication2022 =
            res.data.numbertlikespublication2022;
          if (getoldnumbertlikespublication2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikespublication2022",
              getoldnumbertlikespublication2022
            );
          }

          const getoldnumbertlikespublicationlife =
            res.data.numbertlikespublicationlife;
          if (getoldnumbertlikespublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikespublicationlife",
              getoldnumbertlikespublicationlife
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

  // likespublication
  // likespublication
  // likespublication
  const pointlikespublication = parseInt(likespublication) * 0.01;
  const gainlikespublication = parseInt(likespublication) * 0.00001;
  console.log(gainlikespublication);

  // point
  const getoldpointtlikespublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikespublicationoct2022"
  );

  const getoldpointtlikespublication2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikespublication2022"
  );
  const getoldpointtlikespublicationlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlikespublicationlife"
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

  const pointtlikespublicationoct2022 =
    parseInt(getoldpointtlikespublicationoct2022) +
    parseInt(pointlikespublication);

  const pointtlikespublication2022 =
    parseInt(getoldpointtlikespublication2022) +
    parseInt(pointlikespublication);

  const pointtlikespublicationlife =
    parseInt(getoldpointtlikespublicationlife) +
    parseInt(pointlikespublication);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointlikespublication);

  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointlikespublication);

  const pointtlife =
    parseInt(getoldpointtlife) + parseInt(pointlikespublication);

  // gain
  const getoldgaintlikespublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlikespublicationoct2022"
  );
  const getoldgaintlikespublication2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlikespublication2022"
  );
  const getoldgaintlikespublicationlife = localStorage.getItem(
    "https://omisify.com/getoldgaintlikespublicationlife"
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

  const gaintlikespublicationoct2022 =
    parseInt(getoldgaintlikespublicationoct2022) +
    parseInt(gainlikespublication);

  const gaintlikespublication2022 =
    parseInt(getoldgaintlikespublication2022) + parseInt(gainlikespublication);
  const gaintlikespublicationlife =
    parseInt(getoldgaintlikespublicationlife) + parseInt(gainlikespublication);
  const gaintlifeoct2022 =
    parseInt(getoldgaintlifeoct2022) + parseInt(gainlikespublication);
  const gaintlife2022 =
    parseInt(getoldgaintlife2022) + parseInt(gainlikespublication);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainlikespublication);

  const resultgainlikespublication = gainlikespublication;
  const resultpointlikespublication = pointlikespublication;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointlikespublication);

  // number
  const getoldnumbertlikespublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikespublicationoct2022"
  );
  const getoldnumbertlikespublication2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikespublication2022"
  );
  const getoldnumbertlikespublicationlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikespublicationlife"
  );

  const numbertlikespublicationoct2022 =
    parseInt(getoldnumbertlikespublicationoct2022) + parseInt(likespublication);
  const numbertlikespublication2022 =
    parseInt(getoldnumbertlikespublication2022) + parseInt(likespublication);
  const numbertlikespublicationlife =
    parseInt(getoldnumbertlikespublicationlife) + parseInt(likespublication);

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
      numbertlikespublicationlife,
      numbertlikespublication2022,
      numbertlikespublicationoct2022,

      // point
      pointtlikespublicationlife,
      pointtlikespublication2022,
      pointtlikespublicationoct2022,

      // gain
      gaintlikespublicationlife,
      gaintlikespublication2022,
      gaintlikespublicationoct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgainlikespublication,
      resultpointlikespublication,
      likespublicationrecent: likespublication,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/likespublication/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addlikespublication(data));
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
              <p>Likes (publication)</p>
            </div>
            <div className="a">
              <div className="b">
                <p>
                  L'option Likes (publication) concerne les likes que des
                  personnes ont laissés sur la publication que le Partenaire a
                  faites concernant un produit ou une entreprise
                </p>
                <p>1 likes (publication) : 0.01 point = 0.00001€</p>
                <div className="c">
                  <p>Envoyer le résultat de votre travail</p>
                </div>
              </div>
              <p>Entrer le nombre de likes (publication)</p>
              <input
                type="text"
                placeholder="Nombre de likes (publication)"
                value={likespublication}
                onChange={(e) => setlikespublication(e.target.value)}
                name="likespublication"
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
