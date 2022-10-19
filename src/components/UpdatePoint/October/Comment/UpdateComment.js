import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../Partenaire Omisify/Loader";
import addComment from "../../../../feature/comment.slice";

export default function UpdateComment() {
  const dispatch = useDispatch();
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
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          console.log(res.data.pointtlife2022);

          // point
          const getoldpointtcommentoct2022 = res.data.pointtcommentoct2022;
          if (getoldpointtcommentoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtcommentoct2022",
              getoldpointtcommentoct2022
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
          const getoldgaintcommentoct2022 = res.data.gaintcommentoct2022;
          if (getoldgaintcommentoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintcommentoct2022",
              getoldgaintcommentoct2022
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
          const getoldnumbertcommentoct2022 = res.data.numbertcommentoct2022;
          if (getoldnumbertcommentoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertcommentoct2022",
              getoldnumbertcommentoct2022
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

  // const ancien = `${toct.total}`;
  // const total = parseInt(ancien) + parseInt(coctember);

  //user infos
  //user infos
  //user infos
  //const userId = localStorage.getItem("https://omisify.com/userId");
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  // comment
  // comment
  // comment
  const pointcomment = parseInt(comment) * 1;
  const gaincomment = parseInt(comment) * 0.001;
  console.log(gaincomment);

  // point
  const getoldpointtcommentoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtcommentoct2022"
  );

  const getoldpointtcomment2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtcomment2022"
  );
  const getoldpointtcommentlife = localStorage.getItem(
    "https://omisify.com/getoldpointtcommentlife"
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

  const pointtcommentoct2022 =
    parseInt(getoldpointtcommentoct2022) + parseInt(pointcomment);
  const pointtcomment2022 =
    parseInt(getoldpointtcomment2022) + parseInt(pointcomment);
  const pointtcommentlife =
    parseInt(getoldpointtcommentlife) + parseInt(pointcomment);
  const pointtlifeoct2022 =
    parseInt(getoldpointtlifeoct2022) + parseInt(pointcomment);
  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointcomment);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointcomment);

  // gain
  const getoldgaintcommentoct2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintcommentoct2022"
  );
  const getoldgaintcomment2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintcomment2022"
  );
  const getoldgaintcommentlife = localStorage.getItem(
    "https://omisify.com/getoldgaintcommentlife"
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

  const gaintcommentoct2022 =
    parseInt(getoldgaintcommentoct2022) + parseInt(gaincomment);
  const gaintcomment2022 =
    parseInt(getoldgaintcomment2022) + parseInt(gaincomment);
  const gaintcommentlife =
    parseInt(getoldgaintcommentlife) + parseInt(gaincomment);
  const gaintlifeoct2022 =
    parseInt(getoldgaintlifeoct2022) + parseInt(gaincomment);
  const gaintlife2022 = parseInt(getoldgaintlife2022) + parseInt(gaincomment);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gaincomment);

  // number
  const getoldnumbertcommentoct2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertcommentoct2022"
  );
  const getoldnumbertcomment2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertcomment2022"
  );
  const getoldnumbertcommentlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertcommentlife"
  );

  const numbertcommentoct2022 =
    parseInt(getoldnumbertcommentoct2022) + parseInt(comment);
  const numbertcomment2022 =
    parseInt(getoldnumbertcomment2022) + parseInt(comment);
  const numbertcommentlife =
    parseInt(getoldnumbertcommentlife) + parseInt(comment);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();

    const data = {
      //user infos
      userId,
      name,
      partnername,
      shortname,

      // number
      numbertcommentlife,
      numbertcomment2022,
      numbertcommentoct2022,

      // point
      pointtcommentlife,
      pointtcomment2022,
      pointtcommentoct2022,

      // gain
      gaintcommentlife,
      gaintcomment2022,
      gaintcommentoct2022,

      // life
      pointtlife,
      pointtlife2022,
      pointtlifeoct2022,

      gaintlife,
      gaintlife2022,
      gaintlifeoct2022,

      // others
      commentrecent: comment,
      date,
      time,
    };

    await axios
      .post(
        `${process.env.REACT_APP_OMISIFY_API}/api/panel/october/comment/add`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(addComment(data));
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
