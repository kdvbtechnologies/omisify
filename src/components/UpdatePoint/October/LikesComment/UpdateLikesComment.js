import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addlikescomment from "../../../../feature/likescomment.slice";

export default function UpdateLikeslikescomment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [likescomment, setlikescomment] = useState("");
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
          const getoldpointtlikescommentoct2022 =
            res.data.pointtlikescommentoct2022;
          if (getoldpointtlikescommentoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikescommentoct2022",
              getoldpointtlikescommentoct2022
            );
          }

          const getoldpointtlikescomment2022 = res.data.pointtlikescomment2022;
          if (getoldpointtlikescomment2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikescomment2022",
              getoldpointtlikescomment2022
            );
          }

          const getoldpointtlikescommentlife = res.data.pointtlikescommentlife;
          if (getoldpointtlikescommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikescommentlife",
              getoldpointtlikescommentlife
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
          const getoldgaintlikescommentoct2022 =
            res.data.gaintlikescommentoct2022;
          if (getoldgaintlikescommentoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikescommentoct2022",
              getoldgaintlikescommentoct2022
            );
          }

          const getoldgaintlikescomment2022 = res.data.gaintlikescomment2022;
          if (getoldgaintlikescomment2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikescomment2022",
              getoldgaintlikescomment2022
            );
          }

          const getoldgaintlikescommentlife = res.data.gaintlikescommentlife;
          if (getoldgaintlikescommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikescommentlife",
              getoldgaintlikescommentlife
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
          const getoldnumbertlikescommentoct2022 =
            res.data.numbertlikescommentoct2022;
          if (getoldnumbertlikescommentoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikescommentoct2022",
              getoldnumbertlikescommentoct2022
            );
          }

          const getoldnumbertlikescomment2022 =
            res.data.numbertlikescomment2022;
          if (getoldnumbertlikescomment2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikescomment2022",
              getoldnumbertlikescomment2022
            );
          }

          const getoldnumbertlikescommentlife =
            res.data.numbertlikescommentlife;
          if (getoldnumbertlikescommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikescommentlife",
              getoldnumbertlikescommentlife
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

  // likescomment
  // likescomment
  // likescomment
  const pointlikescomment = parseInt(likescomment) * 0.01;
  const gainlikescomment = parseInt(likescomment) * 0.00001;
  console.log(gainlikescomment);

  // point
  const getoldpointtlikescommentoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikescommentoct2022"
  );

  const getoldpointtlikescomment2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikescomment2022"
  );
  const getoldpointtlikescommentlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlikescommentlife"
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

  const pointtlikescommentoct2022 =
    parseInt(getoldpointtlikescommentoct2022) + parseInt(pointlikescomment);

  const pointtlikescomment2022 =
    parseInt(getoldpointtlikescomment2022) + parseInt(pointlikescomment);

  const pointtlikescommentlife =
    parseInt(getoldpointtlikescommentlife) + parseInt(pointlikescomment);

  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointlikescomment);

  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointlikescomment);

  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointlikescomment);

  // gain
  const getoldgaintlikescommentoct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlikescommentoct2022"
  );
  const getoldgaintlikescomment2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlikescomment2022"
  );
  const getoldgaintlikescommentlife = localStorage.getItem(
    "https://omisify.com/getoldgaintlikescommentlife"
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

  const gaintlikescommentoct2022 =
    parseInt(getoldgaintlikescommentoct2022) + parseInt(gainlikescomment);

  const gaintlikescomment2022 =
    parseInt(getoldgaintlikescomment2022) + parseInt(gainlikescomment);
  const gaintlikescommentlife =
    parseInt(getoldgaintlikescommentlife) + parseInt(gainlikescomment);
  const gaintlifeoct2022 =
    parseInt(getoldgaintlifeoct2022) + parseInt(gainlikescomment);
  const gaintlife2022 =
    parseInt(getoldgaintlife2022) + parseInt(gainlikescomment);

  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainlikescomment);

  const resultgainlikescomment = gainlikescomment;
  const resultpointlikescomment = pointlikescomment;
  // il faut verifier .toFixed(2) in react , for decimal number
  console.log(resultpointlikescomment);

  // number
  const getoldnumbertlikescommentoct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikescommentoct2022"
  );
  const getoldnumbertlikescomment2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikescomment2022"
  );
  const getoldnumbertlikescommentlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikescommentlife"
  );

  const numbertlikescommentoct2022 =
    parseInt(getoldnumbertlikescommentoct2022) + parseInt(likescomment);
  const numbertlikescomment2022 =
    parseInt(getoldnumbertlikescomment2022) + parseInt(likescomment);
  const numbertlikescommentlife =
    parseInt(getoldnumbertlikescommentlife) + parseInt(likescomment);

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
      numbertlikescommentlife,
      numbertlikescomment2022,
      numbertlikescommentoct2022,

      // point
      pointtlikescommentlife,
      pointtlikescomment2022,
      pointtlikescommentoct2022,

      // gain
      gaintlikescommentlife,
      gaintlikescomment2022,
      gaintlikescommentoct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      resultgainlikescomment,
      resultpointlikescomment,
      likescommentrecent: likescomment,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/likescomment/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addlikescomment(data));
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
              <p>Likes (commentaire)</p>
            </div>
            <div className="a">
              <div className="b">
                <p>
                  L'option Likes (commentaire) concerne les likes que des
                  personnes ont laissés sur le commentaire que le Partenaire a
                  publié sur les réseaux sociaux concernant un produit ou une
                  entreprise
                </p>
                <p>1 likes (commentaire) : 0.01 point = 0.00001€</p>
                <div className="c">
                  <p>Envoyer le résultat de votre travail</p>
                </div>
              </div>
              <p>Entrer le nombre de likes (commentaire)</p>
              <input
                type="text"
                placeholder="Nombre de likes (commentaire)"
                value={likescomment}
                onChange={(e) => setlikescomment(e.target.value)}
                name="likescomment"
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
