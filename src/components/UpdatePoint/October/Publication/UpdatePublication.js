import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addpublication from "../../../../feature/publication.slice";

export default function UpdatePublication() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [publication, setpublication] = useState("");
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
          const getoldpointtpublicationoct2022 =
            res.data.pointtpublicationoct2022;
          if (getoldpointtpublicationoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpublicationoct2022",
              getoldpointtpublicationoct2022
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
          const getoldgaintpublicationoct2022 =
            res.data.gaintpublicationoct2022;
          if (getoldgaintpublicationoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintpublicationoct2022",
              getoldgaintpublicationoct2022
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
          const getoldnumbertpublicationoct2022 =
            res.data.numbertpublicationoct2022;
          if (getoldnumbertpublicationoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpublicationoct2022",
              getoldnumbertpublicationoct2022
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

  // const ancien = `${toct.total}`;
  // const total = parseInt(ancien) + parseInt(coctember);

  //user infos
  //const userId = localStorage.getItem("https://omisify.com/userId");
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  // publication
  // publication
  // publication
  const pointpublication = parseInt(publication) * 1;
  const gainpublication = parseInt(publication) * 0.001;
  console.log(gainpublication);

  // point
  const getoldpointtpublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpublicationoct2022"
  );

  const getoldpointtpublication2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpublication2022"
  );
  const getoldpointtpublicationlife = localStorage.getItem(
    "https://omisify.com/getoldpointtpublicationlife"
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

  const pointtpublicationoct2022 =
    parseInt(getoldpointtpublicationoct2022) + parseInt(pointpublication);

  const pointtpublication2022 =
    parseInt(getoldpointtpublication2022) + parseInt(pointpublication);

  const pointtpublicationlife =
    parseInt(getoldpointtpublicationlife) + parseInt(pointpublication);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointpublication);

  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointpublication);

  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointpublication);

  // gain
  const getoldgaintpublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpublicationoct2022"
  );
  const getoldgaintpublication2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintpublication2022"
  );
  const getoldgaintpublicationlife = localStorage.getItem(
    "https://omisify.com/getoldgaintpublicationlife"
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

  const gaintpublicationoct2022 =
    parseInt(getoldgaintpublicationoct2022) + parseInt(gainpublication);

  const gaintpublication2022 =
    parseInt(getoldgaintpublication2022) + parseInt(gainpublication);
  const gaintpublicationlife =
    parseInt(getoldgaintpublicationlife) + parseInt(gainpublication);
  const gaintlifeoct2022 =
    parseInt(getoldgaintlifeoct2022) + parseInt(gainpublication);
  const gaintlife2022 =
    parseInt(getoldgaintlife2022) + parseInt(gainpublication);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainpublication);

  const resultgainpublication = gainpublication;
  const resultpointpublication = pointpublication;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointpublication);

  // number
  const getoldnumbertpublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpublicationoct2022"
  );
  const getoldnumbertpublication2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertpublication2022"
  );
  const getoldnumbertpublicationlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertpublicationlife"
  );

  const numbertpublicationoct2022 =
    parseInt(getoldnumbertpublicationoct2022) + parseInt(publication);
  const numbertpublication2022 =
    parseInt(getoldnumbertpublication2022) + parseInt(publication);
  const numbertpublicationlife =
    parseInt(getoldnumbertpublicationlife) + parseInt(publication);

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
      numbertpublicationlife,
      numbertpublication2022,
      numbertpublicationoct2022,

      // point
      pointtpublicationlife,
      pointtpublication2022,
      pointtpublicationoct2022,

      // gain
      gaintpublicationlife,
      gaintpublication2022,
      gaintpublicationoct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgainpublication,
      resultpointpublication,
      publicationrecent: publication,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/publication/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addpublication(data));
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
              <p>Publication</p>
            </div>
            <div className="a">
              <p>
                L'option Publication concerne les publications publiées avec la
                partie présentation, le lien d'affiliation et l'affiche du
                produit ou de l'entreprise
              </p>
              <p>1 Publication : 1 point = 0.001€</p>
              <p>Envoyer le résultat de votre travail</p>
              <p>Entrer le nombre de publication(s) publié(s)</p>
              <input
                type="text"
                placeholder="Nombre de publication(s)"
                value={publication}
                onChange={(e) => setpublication(e.target.value)}
                name="publication"
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
