import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointE10k() {
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

  // e10k
  const pointte10koct2022 = 0;
  const pointte10k2022 = 0;
  const pointte10klife = 0;

  const gainte10koct2022 = 0;
  const gainte10k2022 = 0;
  const gainte10klife = 0;

  const numberte10koct2022 = 0;
  const numberte10k2022 = 0;
  const numberte10klife = 0;

  const e10krecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointte10koct2022 = res.data.pointte10koct2022;
          if (getoldpointte10koct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointte10koct2022",
              getoldpointte10koct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointte10koct2022 dans le localstorage
  const getoldpointte10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointte10koct2022"
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

      // e10k
      pointte10koct2022,
      pointte10k2022,
      pointte10klife,

      gainte10koct2022,
      gainte10k2022,
      gainte10klife,

      numberte10koct2022,
      numberte10k2022,
      numberte10klife,

      e10krecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatee10k/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointte10koct2022 = res.data.pointte10koct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointte10koct2022",
          getoldpointte10koct2022
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
            {!getoldpointte10koct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  d'E-mail(s) aux 10k (E10k)
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
