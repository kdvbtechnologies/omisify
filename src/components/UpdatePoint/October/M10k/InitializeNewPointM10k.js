import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointM10k() {
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

  // m10k
  const pointtm10koct2022 = 0;
  const pointtm10k2022 = 0;
  const pointtm10klife = 0;

  const gaintm10koct2022 = 0;
  const gaintm10k2022 = 0;
  const gaintm10klife = 0;

  const numbertm10koct2022 = 0;
  const numbertm10k2022 = 0;
  const numbertm10klife = 0;

  const m10krecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointtm10koct2022 = res.data.pointtm10koct2022;
          if (getoldpointtm10koct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtm10koct2022",
              getoldpointtm10koct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointtm10koct2022 dans le localstorage
  const getoldpointtm10koct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtm10koct2022"
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

      // m10k
      pointtm10koct2022,
      pointtm10k2022,
      pointtm10klife,

      gaintm10koct2022,
      gaintm10k2022,
      gaintm10klife,

      numbertm10koct2022,
      numbertm10k2022,
      numbertm10klife,

      m10krecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatem10k/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointtm10koct2022 = res.data.pointtm10koct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointtm10koct2022",
          getoldpointtm10koct2022
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
            {!getoldpointtm10koct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des m10kaires
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
