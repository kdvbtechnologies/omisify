import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Partenaire Omisify/Loader";

export default function C1() {
  const [isLoading, setLoading] = useState(true);

  // total life
  const pointtlifesept2022 = 0;
  const pointtlife2022 = 0;
  const pointtlife = 0;

  const gaintlifesept2022 = 0;
  const gaintlife2022 = 0;
  const gaintlife = 0;

  // comment
  const pointtcommentsept2022 = 0;
  const pointtcomment2022 = 0;
  const pointtcommentlife = 0;

  const gaintcommentsept2022 = 0;
  const gaintcomment2022 = 0;
  const gaintcommentlife = 0;

  const numbertcommentsept2022 = 0;
  const numbertcomment2022 = 0;
  const numbertcommentlife = 0;

  const commentrecent = 0;

  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    async function get() {
      await axios
        .get(`https://omisify-api.onrender.com/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const pointtcommentlife = res.data.pointtcommentlife;
          if (pointtcommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtcommentlife",
              pointtcommentlife
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas pointtcommentlife dans le localstorage
  const getpointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );

  function Next() {
    // first step : post
    const userId = localStorage.getItem("https://omisify.com/userId");
    axios({
      method: "put",
      url: `https://omisify-api.onrender.com/api/user/update-comment/${userId}`,
      data: {
        // total life
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        // comment
        pointtcommentsept2022,
        pointtcomment2022,
        pointtcommentlife,

        gaintcommentsept2022,
        gaintcomment2022,
        gaintcommentlife,

        numbertcommentsept2022,
        numbertcomment2022,
        numbertcommentlife,

        commentrecent,
      },
    })
      .then((res) => {
        console.log(res);
        const pointtcommentlife = res.data.pointtcommentlife;
        localStorage.setItem(
          "https://omisify.com/pointtcommentlife",
          pointtcommentlife
        );
      })
      .catch((err) => console.log(err));
    //window.location.reload();
  }

  return (
    <>
      <p>Chargement des données - Septembre 2022</p>
      <div className="go-to-refresh">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!getpointtcommentlife && (
              <>
                <p>
                  Cliquez sur continuer pour aller vers la page d'actualisation
                  des commentaires
                </p>
                <button onClick={Next}>Continuer</button>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
