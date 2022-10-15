import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function UpdateComment() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [comment, setComment] = useState("");
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
          const getoldpointtcommentsept2022 = res.data.pointtcommentsept2022;
          if (getoldpointtcommentsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtcommentsept2022",
              getoldpointtcommentsept2022
            );
          }

          const getoldpointtcomment2022 = res.data.pointtcomment2022;
          if (getoldpointtcomment2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtcomment2022",
              getoldpointtcomment2022
            );
          }

          const getoldpointtcommentlife = res.data.pointtcommentlife;
          if (getoldpointtcommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtcommentlife",
              getoldpointtcommentlife
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
          const getoldgaintcommentsept2022 = res.data.gaintcommentsept2022;
          if (getoldgaintcommentsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintcommentsept2022",
              getoldgaintcommentsept2022
            );
          }

          const getoldgaintcomment2022 = res.data.gaintcomment2022;
          if (getoldgaintcomment2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintcomment2022",
              getoldgaintcomment2022
            );
          }

          const getoldgaintcommentlife = res.data.gaintcommentlife;
          if (getoldgaintcommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintcommentlife",
              getoldgaintcommentlife
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
          const getoldnumbertcommentsept2022 = res.data.numbertcommentsept2022;
          if (getoldnumbertcommentsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertcommentsept2022",
              getoldnumbertcommentsept2022
            );
          }

          const getoldnumbertcomment2022 = res.data.numbertcomment2022;
          if (getoldnumbertcomment2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertcomment2022",
              getoldnumbertcomment2022
            );
          }

          const getoldnumbertcommentlife = res.data.numbertcommentlife;
          if (getoldnumbertcommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertcommentlife",
              getoldnumbertcommentlife
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

  // comment
  // comment
  // comment
  const pointcomment = parseInt(comment) * 1;
  const gaincomment = parseInt(comment) * 5;
  console.log(gaincomment);

  // point
  const getoldpointtcommentsept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtcommentsept2022"
  );

  const getoldpointtcomment2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtcomment2022"
  );
  const getoldpointtcommentlife = localStorage.getItem(
    "https://omisify.com/getoldpointtcommentlife"
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

  const pointtcommentsept2022 =
    parseInt(getoldpointtcommentsept2022) + parseInt(pointcomment);
  const pointtcomment2022 =
    parseInt(getoldpointtcomment2022) + parseInt(pointcomment);
  const pointtcommentlife =
    parseInt(getoldpointtcommentlife) + parseInt(pointcomment);
  const pointtlifesept2022 =
    parseInt(getoldpointtlifesept2022) + parseInt(pointcomment);
  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointcomment);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointcomment);

  // gain
  const getoldgaintcommentsept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintcommentsept2022"
  );
  const getoldgaintcomment2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintcomment2022"
  );
  const getoldgaintcommentlife = localStorage.getItem(
    "https://omisify.com/getoldgaintcommentlife"
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

  const gaintcommentsept2022 =
    parseInt(getoldgaintcommentsept2022) + parseInt(gaincomment);
  const gaintcomment2022 =
    parseInt(getoldgaintcomment2022) + parseInt(gaincomment);
  const gaintcommentlife =
    parseInt(getoldgaintcommentlife) + parseInt(gaincomment);
  const gaintlifesept2022 =
    parseInt(getoldgaintlifesept2022) + parseInt(gaincomment);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gaincomment);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gaincomment);

  // number
  const getoldnumbertcommentsept2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertcommentsept2022"
  );
  const getoldnumbertcomment2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertcomment2022"
  );
  const getoldnumbertcommentlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertcommentlife"
  );

  const numbertcommentsept2022 =
    parseInt(getoldnumbertcommentsept2022) + parseInt(comment);
  const numbertcomment2022 =
    parseInt(getoldnumbertcomment2022) + parseInt(comment);
  const numbertcommentlife =
    parseInt(getoldnumbertcommentlife) + parseInt(comment);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        // data comment
        pointtcommentsept2022,
        pointtcomment2022,
        pointtcommentlife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintcommentsept2022,
        gaintcomment2022,
        gaintcommentlife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertcommentsept2022,
        numbertcomment2022,
        numbertcommentlife,

        date,
        time,
        commentrecent: comment,
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
              <p>Commentaire</p>
            </div>
            <div className="a">
              <p>Entrer le nombre de commentaire(s)</p>
              <input
                type="text"
                placeholder="Nombre de commentaire(s)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                name="comment"
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
