import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function AddSeptember() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const pointtcommentsept2022 = 0;
  const pointtcomment2022 = 0;
  const pointtcommentlife = 0;
  const pointtlifesept2022 = 0;
  const pointtlife2022 = 0;
  const pointtlife = 0;

  const gaintcommentsept2022 = 0;
  const gaintcomment2022 = 0;
  const gaintcommentlife = 0;
  const gaintlifesept2022 = 0;
  const gaintlife2022 = 0;
  const gaintlife = 0;

  const numbertcommentsept2022 = 0;
  const numbertcomment2022 = 0;
  const numbertcommentlife = 0;

  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const tpointthismonth = res.data.pointtlifesept2022;
          if (tpointthismonth) {
            localStorage.setItem(
              "https://omisify.com/tpointthismonth",
              tpointthismonth
            );
            window.location = "/update";
          }
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas tpointthismonth dans le localstorage
  const tpointthismonth = localStorage.getItem(
    "https://omisify.com/tpointthismonth"
  );

  async function Next() {
    // first step : post
    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
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
      },
    })
      .then((res) => {
        console.log(res);
        const tpointthismonth = res.data.pointtlifesept2022;
        localStorage.setItem(
          "https://omisify.com/tpointthismonth",
          tpointthismonth
        );

        /*
        // second step : put
        const idtsept2022 = localStorage.getItem("https://omisify.com/idtsept");
        axios({
          method: "put",
          url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
          data: {
            idtsept2022,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));*/
        window.location = "/update";
      })
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
        <>{!tpointthismonth && <button onClick={Next}>Continuer</button>}</>
      )}
    </>
  );
}
