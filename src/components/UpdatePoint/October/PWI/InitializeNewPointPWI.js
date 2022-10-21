import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateInfos } from "../../../../feature/infos.slice";
import Loader from "../../../Partenaire Omisify/Loader";

export default function InitializeNewPointPWI() {
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

  // pwi
  const pointtpwioct2022 = 0;
  const pointtpwi2022 = 0;
  const pointtpwilife = 0;

  const gaintpwioct2022 = 0;
  const gaintpwi2022 = 0;
  const gaintpwilife = 0;

  const numbertpwioct2022 = 0;
  const numbertpwi2022 = 0;
  const numbertpwilife = 0;

  const pwirecent = 0;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getoldpointtpwioct2022 = res.data.pointtpwioct2022;
          if (getoldpointtpwioct2022) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtpwioct2022",
              getoldpointtpwioct2022
            );
            window.location.reload();
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  // le bouton s'affichera s'il n'y a pas getoldpointtpwioct2022 dans le localstorage
  const getoldpointtpwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwioct2022"
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

      // pwi
      pointtpwioct2022,
      pointtpwi2022,
      pointtpwilife,

      gaintpwioct2022,
      gaintpwi2022,
      gaintpwilife,

      numbertpwioct2022,
      numbertpwi2022,
      numbertpwilife,

      pwirecent,
    };

    await axios
      .put(
        `${process.env.REACT_APP_OMISIFY_API}/api/user/updatepwi/${userId}`,
        data
      )
      .then((res) => {
        console.log(res);
        dispatch(updateInfos(data));

        const getoldpointtpwioct2022 = res.data.pointtpwioct2022;
        localStorage.setItem(
          "https://omisify.com/getoldpointtpwioct2022",
          getoldpointtpwioct2022
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
            {!getoldpointtpwioct2022 && (
              <>
                <p>
                  Cliquez sur Continuer pour aller sur la page d'actualisation
                  des pwiaires
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
