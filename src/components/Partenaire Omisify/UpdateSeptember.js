//import { useEffect, useState } from "react";
import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function UpdateSeptember() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  //const [api, setApi] = useState([]);

  console.log(setIsLoading);
  /*
  useEffect(() => {
    async function get() {
      await axios
        .get(
          `https://famous-peplum-dove.cyclic.app/api/point/all/tseptember/${idtsept}`
        )
        .then((res) => setApi(res.data))
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [idtsept]);
  */

  // const ancien = `${tsept.total}`;
  // const total = parseInt(ancien) + parseInt(cSeptember);

  // comment
  // comment
  // comment
  const pointcomment = parseInt(comment) * 1;
  const gaincomment = parseInt(comment) * 0.001;

  // point
  const getoldpointtcommentsept2022 = ``;
  const getoldpointtcomment2022 = ``;
  const getoldpointtcommentlife = ``;
  const getoldpointtlife = ``;

  const pointtcommentsept2022 =
    parseInt(getoldpointtcommentsept2022) + parseInt(pointcomment);
  const pointtcomment2022 =
    parseInt(getoldpointtcomment2022) + parseInt(pointcomment);
  const pointtcommentlife =
    parseInt(getoldpointtcommentlife) + parseInt(pointcomment);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointcomment);

  // gain
  const getoldgaintcommentsept2022 = ``;
  const getoldgaintcomment2022 = ``;
  const getoldgaintcommentlife = ``;
  const getoldgaintlife = ``;

  const gaintcommentsept2022 =
    parseInt(getoldgaintcommentsept2022) + parseInt(gaincomment);
  const gaintcomment2022 =
    parseInt(getoldgaintcomment2022) + parseInt(gaincomment);
  const gaintcommentlife =
    parseInt(getoldgaintcommentlife) + parseInt(gaincomment);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gaincomment);

  // number
  const getoldnumbertcommentsept2022 = ``;
  const getoldnumbertcomment2022 = ``;
  const getoldnumbertcommentlife = ``;

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
        pointtlife,

        gaintcommentsept2022,
        gaintcomment2022,
        gaintcommentlife,
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
          <h1>Septembre</h1>
          <p>Entrer le nombre des commentaires</p>
          <input
            type="text"
            placeholder="Nombre des commentaires"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            name="pcomments"
          />

          <p>Entrer la date d'aujourd'hui</p>
          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            name="date"
          />

          <p>Entrer l'heure actuelle'</p>
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
