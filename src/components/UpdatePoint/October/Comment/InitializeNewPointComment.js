import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointComment() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(false);

  const userId = localStorage.getItem("https://omisify.com/userId");

  // total life
  const pointtlifeoct2022 = 0;
  const pointtlife2022 = 0;
  const pointtlife = 0;

  const gaintlifeoct2022 = 0;
  const gaintlife2022 = 0;
  const gaintlife = 0;

  // comment
  const pointtcommentoct2022 = 0;
  const pointtcomment2022 = 0;
  const pointtcommentlife = 0;

  const gaintcommentoct2022 = 0;
  const gaintcomment2022 = 0;
  const gaintcommentlife = 0;

  const numbertcommentoct2022 = 0;
  const numbertcomment2022 = 0;
  const numbertcommentlife = 0;

  const commentrecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
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
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas pointtcommentlife dans le localstorage
  const getpointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );

  async function Next(e) {
    setIsLoading2(true);
    e.preventDefault();

    const data = {
      // total life
      pointtlifeoct2022,
      pointtlife2022,
      pointtlife,

      gaintlifeoct2022,
      gaintlife2022,
      gaintlife,

      // comment
      pointtcommentoct2022,
      pointtcomment2022,
      pointtcommentlife,

      gaintcommentoct2022,
      gaintcomment2022,
      gaintcommentlife,

      numbertcommentoct2022,
      numbertcomment2022,
      numbertcommentlife,

      commentrecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const pointtcommentlife = res.data.pointtcommentlife;
        localStorage.setItem(
          "https://omisify.com/pointtcommentlife",
          pointtcommentlife
        );
      })
      .catch((err) => console.log(err));
    window.location.reload();
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="stats-big-title">
        <p>Actualisation des points</p>
      </div>
      <div className="initiatlize"></div>
      {isLoading && (
        <p style={{ textAlign: "center", fontSize: "17px" }}>
          Chargement des données...
        </p>
      )}

      <div className="go-to-refresh">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!getpointtcommentlife && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des commentaires
                </p>
                {isLoading2 ? (
                  <Loader />
                ) : (
                  <>
                    <button onClick={Next}>Continuer</button>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
