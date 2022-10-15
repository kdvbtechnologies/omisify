import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function UpdateLikeComment() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);
  const [likecomment, setLikeComment] = useState("");
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
          const getoldpointtlikecommentsept2022 =
            res.data.pointtlikecommentsept2022;
          if (getoldpointtlikecommentsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikecommentsept2022",
              getoldpointtlikecommentsept2022
            );
          }

          const getoldpointtlikecomment2022 = res.data.pointtlikecomment2022;
          if (getoldpointtlikecomment2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikecomment2022",
              getoldpointtlikecomment2022
            );
          }

          const getoldpointtlikecommentlife = res.data.pointtlikecommentlife;
          if (getoldpointtlikecommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikecommentlife",
              getoldpointtlikecommentlife
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
          const getoldgaintlikecommentsept2022 =
            res.data.gaintlikecommentsept2022;
          if (getoldgaintlikecommentsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikecommentsept2022",
              getoldgaintlikecommentsept2022
            );
          }

          const getoldgaintlikecomment2022 = res.data.gaintlikecomment2022;
          if (getoldgaintlikecomment2022) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikecomment2022",
              getoldgaintlikecomment2022
            );
          }

          const getoldgaintlikecommentlife = res.data.gaintlikecommentlife;
          if (getoldgaintlikecommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlikecommentlife",
              getoldgaintlikecommentlife
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
          const getoldnumbertlikecommentsept2022 =
            res.data.numbertlikecommentsept2022;
          if (getoldnumbertlikecommentsept2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikecommentsept2022",
              getoldnumbertlikecommentsept2022
            );
          }

          const getoldnumbertlikecomment2022 = res.data.numbertlikecomment2022;
          if (getoldnumbertlikecomment2022) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikecomment2022",
              getoldnumbertlikecomment2022
            );
          }

          const getoldnumbertlikecommentlife = res.data.numbertlikecommentlife;
          if (getoldnumbertlikecommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikecommentlife",
              getoldnumbertlikecommentlife
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

  // likecomment
  // likecomment
  // likecomment
  const pointlikecomment = parseInt(likecomment) * 0.01;
  const gainlikecomment = parseInt(likecomment) * 0.00001;
  console.log(gainlikecomment);

  // point
  const getoldpointtlikecommentsept2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikecommentsept2022"
  );

  const getoldpointtlikecomment2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikecomment2022"
  );
  const getoldpointtlikecommentlife = localStorage.getItem(
    "https://omisify.com/getoldpointtlikecommentlife"
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

  const pointtlikecommentsept2022 =
    parseInt(getoldpointtlikecommentsept2022) + parseInt(pointlikecomment);
  const pointtlikecomment2022 =
    parseInt(getoldpointtlikecomment2022) + parseInt(pointlikecomment);
  const pointtlikecommentlife =
    parseInt(getoldpointtlikecommentlife) + parseInt(pointlikecomment);
  const pointtlifesept2022 =
    parseInt(getoldpointtlifesept2022) + parseInt(pointlikecomment);
  const pointtlife2022 =
    parseInt(getoldpointtlife2022) + parseInt(pointlikecomment);
  const pointtlife = parseInt(getoldpointtlife) + parseInt(pointlikecomment);

  // gain
  const getoldgaintlikecommentsept2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlikecommentsept2022"
  );
  const getoldgaintlikecomment2022 = localStorage.getItem(
    "https://omisify.com/getoldgaintlikecomment2022"
  );
  const getoldgaintlikecommentlife = localStorage.getItem(
    "https://omisify.com/getoldgaintlikecommentlife"
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

  const gaintlikecommentsept2022 =
    parseInt(getoldgaintlikecommentsept2022) + parseInt(gainlikecomment);
  const gaintlikecomment2022 =
    parseInt(getoldgaintlikecomment2022) + parseInt(gainlikecomment);
  const gaintlikecommentlife =
    parseInt(getoldgaintlikecommentlife) + parseInt(gainlikecomment);
  const gaintlifesept2022 =
    parseInt(getoldgaintlifesept2022) + parseInt(gainlikecomment);
  const gaintlife2022 =
    parseInt(getoldgaintlife2022) + parseInt(gainlikecomment);
  const gaintlife = parseInt(getoldgaintlife) + parseInt(gainlikecomment);

  // number
  const getoldnumbertlikecommentsept2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikecommentsept2022"
  );
  const getoldnumbertlikecomment2022 = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikecomment2022"
  );
  const getoldnumbertlikecommentlife = localStorage.getItem(
    "https://omisify.com/getoldnumbertlikecommentlife"
  );

  const numbertlikecommentsept2022 =
    parseInt(getoldnumbertlikecommentsept2022) + parseInt(likecomment);
  const numbertlikecomment2022 =
    parseInt(getoldnumbertlikecomment2022) + parseInt(likecomment);
  const numbertlikecommentlife =
    parseInt(getoldnumbertlikecommentlife) + parseInt(likecomment);

  // update point, gain
  async function Validate(e) {
    setIsLoading2(true);
    e.preventDefault();
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        // data likecomment
        pointtlikecommentsept2022,
        pointtlikecomment2022,
        pointtlikecommentlife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintlikecommentsept2022,
        gaintlikecomment2022,
        gaintlikecommentlife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertlikecommentsept2022,
        numbertlikecomment2022,
        numbertlikecommentlife,

        likecommentrecent: likecomment,
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
              <p>Likes (commentaire)</p>
            </div>
            <div className="a">
              <p>Entrer le nombre de likes (commentaire)</p>
              <input
                type="text"
                placeholder="Nombre de likes (commentaire)"
                value={likecomment}
                onChange={(e) => setLikeComment(e.target.value)}
                name="likecomment"
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
