import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointMWI() {
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

  // mwi
  const pointtmwioct2022 = 0;
  const pointtmwi2022 = 0;
  const pointtmwilife = 0;

  const gaintmwioct2022 = 0;
  const gaintmwi2022 = 0;
  const gaintmwilife = 0;

  const numbertmwioct2022 = 0;
  const numbertmwi2022 = 0;
  const numbertmwilife = 0;

  const mwirecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointtmwioct2022 = res.data.pointtmwioct2022;
          if (getoldpointtmwioct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtmwioct2022",
              getoldpointtmwioct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointtmwioct2022 dans le localstorage
  const getoldpointtmwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmwioct2022"
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

      // mwi
      pointtmwioct2022,
      pointtmwi2022,
      pointtmwilife,

      gaintmwioct2022,
      gaintmwi2022,
      gaintmwilife,

      numbertmwioct2022,
      numbertmwi2022,
      numbertmwilife,

      mwirecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatemwi/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointtmwioct2022 = res.data.pointtmwioct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointtmwioct2022",
          getoldpointtmwioct2022
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
            {!getoldpointtmwioct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des Messages avec interaction (MWI)
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
