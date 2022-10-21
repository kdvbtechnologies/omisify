import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointLikeslikescomment() {
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

  // likescomment
  const pointtlikescommentoct2022 = 0;
  const pointtlikescomment2022 = 0;
  const pointtlikescommentlife = 0;

  const gaintlikescommentoct2022 = 0;
  const gaintlikescomment2022 = 0;
  const gaintlikescommentlife = 0;

  const numbertlikescommentoct2022 = 0;
  const numbertlikescomment2022 = 0;
  const numbertlikescommentlife = 0;

  const likescommentrecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointtlikescommentoct2022 =
            res.data.pointtlikescommentoct2022;
          if (getoldpointtlikescommentoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlikescommentoct2022",
              getoldpointtlikescommentoct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointtlikescommentoct2022 dans le localstorage
  const getoldpointtlikescommentoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikescommentoct2022"
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

      // likescomment
      pointtlikescommentoct2022,
      pointtlikescomment2022,
      pointtlikescommentlife,

      gaintlikescommentoct2022,
      gaintlikescomment2022,
      gaintlikescommentlife,

      numbertlikescommentoct2022,
      numbertlikescomment2022,
      numbertlikescommentlife,

      likescommentrecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatelikescomment/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointtlikescommentoct2022 =
          res.data.pointtlikescommentoct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointtlikescommentoct2022",
          getoldpointtlikescommentoct2022
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
            {!getoldpointtlikescommentoct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des likescommentaires
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
