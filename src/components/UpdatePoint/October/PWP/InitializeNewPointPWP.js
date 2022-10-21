import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointPWP() {
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

  // pwp
  const pointtpwpoct2022 = 0;
  const pointtpwp2022 = 0;
  const pointtpwplife = 0;

  const gaintpwpoct2022 = 0;
  const gaintpwp2022 = 0;
  const gaintpwplife = 0;

  const numbertpwpoct2022 = 0;
  const numbertpwp2022 = 0;
  const numbertpwplife = 0;

  const pwprecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointtpwpoct2022 = res.data.pointtpwpoct2022;
          if (getoldpointtpwpoct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpwpoct2022",
              getoldpointtpwpoct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointtpwpoct2022 dans le localstorage
  const getoldpointtpwpoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwpoct2022"
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

      // pwp
      pointtpwpoct2022,
      pointtpwp2022,
      pointtpwplife,

      gaintpwpoct2022,
      gaintpwp2022,
      gaintpwplife,

      numbertpwpoct2022,
      numbertpwp2022,
      numbertpwplife,

      pwprecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatepwp/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointtpwpoct2022 = res.data.pointtpwpoct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointtpwpoct2022",
          getoldpointtpwpoct2022
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
            {!getoldpointtpwpoct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des Publications sans présentation (PWP)
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
